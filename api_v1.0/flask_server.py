from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug import check_password_hash, generate_password_hash
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
import os

app = Flask(__name__)

base_dir=os.path.abspath(os.path.dirname(__file__))

app.config['SECRET_KEY'] = 'CCS'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(base_dir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

db = SQLAlchemy(app)

users = []

#Databases

class Hostel(db.Model):

    __tablename__ = 'hostels'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(10), nullable = False)
    mess_menus = db.relationship('Mess_Menu', backref = 'hostel', lazy ='dynamic')
    complaints = db.relationship('Complaint', backref = 'hostel', lazy ='dynamic')
    members = db.relationship('User' , backref = 'hostel', lazy = 'dynamic' )
    notifications = db.relationship('Notification', backref = 'hostel', lazy ='dynamic')
    
class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    username = db.Column(db.String(50), nullable = False)
    roll_number = db.Column(db.Integer(), unique= True, nullable = False)
    email = db.Column(db.String(120), unique= True, nullable = False)
    password = db.Column(db.String(120), nullable = False)
    phone_number = db.Column(db.Integer(), unique= True, nullable = False)
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))
    complaints = db.relationship('Complaint', backref = 'student', lazy ='dynamic')
    leave_entries = db.relationship('LeaveEntries' , backref = 'student', lazy = 'dynamic' )
    notifications = db.relationship('Notification' , backref = 'user', lazy = 'dynamic' )

class Mess_Menu(db.Model):

    __tablename__ = 'mess_menus'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))
    week = db.Column(db.Integer, nullable=False)    # 1,2,3
    day = db.Column(db.String(50), nullable=False)  # Sunday, Monday, etc.
    category = db.Column(db.String(50), nullable=False)  # Breakfast, Lunch, Dinner
    info = db.Column(db.Text(), nullable = True)        # Any special stuff  (Optional)
    meal = db.Column(db.Text(), nullable = False)       # Actual menu here 
    timings =db.Column(db.String(20), nullable = False)  # format = 8:00 AM-10:00 AM 
    
class ComplaintCategory(db.Model):

    __tablename__ = 'complaint_categories'
    
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(120), nullable = False)
    complaints = db.relationship('Complaint' , backref = 'category', lazy = 'dynamic')
    
class Complaint(db.Model):

    __tablename__ = 'complaints'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    
    category_id = db.Column(db.Integer, db.ForeignKey('complaint_categories.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))
    
    description = db.Column(db.Text(), nullable = False)
    timestamp = db.Column(db.DateTime(),default = datetime.utcnow)
    hostel_name = db.Column(db.String(10), nullable = False)
    room_number = db.Column(db.String(10), nullable = False)
    
    completed = db.Column(db.Boolean)
    

class Role(db.Model):

    __tablename__ = 'roles'

    id = db.Column(db.Integer, primary_key = True)
    role_name =  db.Column(db.String(50), unique = True)
    users = db.relationship('User' , backref = 'role', lazy = 'dynamic' )
    permissions = db.Column(db.Integer)

    @staticmethod
    def insert_roles():

        roles = [
                 'user',
                 'warden/caretaker',
                 'mess_members',
                 'god',
                 'moderators',
                 'guard'
                ]

        for role in roles:
            if Role.query.filter_by(role_name = str(r)).first() is None:
                role = Role(role_name = str(role))
                db.session.add(role)
            else:
                continue
        db.session.commit()

class Notification(db.Model):

    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))
    
    start_date = db.Column(db.DateTime())
    end_date = db.Column(db.DateTime())
    description = db.Column(db.Text(), nullable = False)

class LeaveEntries(db.Model):

    __tablename__ = 'leave_entries'

    id = db.Column(db.Integer, primary_key = True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    leave_time = db.Column(db.DateTime(),default = datetime.utcnow)
    leaving_place = db.Column(db.String(50))
    in_time = db.Column(db.DateTime())
    verified = db.Column(db.Boolean)

class Utility():

    @staticmethod
    def validate_email(email):

        email = User.query.filter_by(email = email).first()
        if email or email=='':
            return False
        return True
    
    @staticmethod
    def validate_phone_number(phone_number):

        phone_number = User.query.filter_by(phone_number = phone_number).first()
        if phone_number or len(str(phone_number)) == 10:
            return False
        return True
    
    @staticmethod
    def validate_roll_number(roll_number):

        roll_number = User.query.filter_by(roll_number = roll_number).first()
        if roll_number:
            return False
        return True

    @staticmethod
    def is_logged_in(token):
        
        s = Serializer(app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None    # valid token, but expired
        except BadSignature:
            return None    # invalid token
        user = User.query.get(data['id'])
        
        if user and str(user.roll_number) in users:
            return True
        return False

    @staticmethod
    def create_hostels(name, warden, caretaker, mess_members,student_representatives):

        hostel = Hostel(name=name, warden=warden, caretaker=caretaker,mess_members=mess_members,student_representatives=student_representatives)
        db.session.add(hostel)
        db.session.commit()

    @staticmethod
    def generate_auth_token(user, expiration = 4*604800):  
        s = Serializer(app.config['SECRET_KEY'], expires_in = expiration)
        return s.dumps({ 'id': user.id })
   
@app.route('/v1.0/register',methods=['GET','POST'])
def register():

    '''
        format - {'name':str, 'roll_number':str,
                  'email':str, 'password':str, 'phone_number':str, 'hostel:'char', 'confirm_pass':str}
    '''

    if request.method == 'POST':
        credentials = request.get_json()
        
        if Utility.validate_email(credentials['email']) is False:
            return jsonify(status='401', error='Invalid Email or Emailalready in use')
        
        if Utility.validate_phone_number(int(credentials['phone_number'])) is False:
            return jsonify(status='401', error='Invalid Phone Number or Phone Number already in use')
        
        if Utility.validate_roll_number(int(credentials['roll_number'])) is False:
            return jsonify(status='401', error='Invalid Roll Number or Roll Number already in use')

        if credentials['password'] != credentials['confirm_pass']:
            return jsonify(status='401', error="'Password' and 'Confirm Password' fields must match")
        

        try:
            hashed_password = generate_password_hash(credentials['password'])
            user = User(username = credentials['name'], email = credentials['email'], password = hashed_password, phone_number = credentials['phone_number'],roll_number=credentials['roll_number'],hostel=credentials['hostel'])
            db.session.add(user)
            db.session.commit()
            
            return jsonify(status='200',error='None', message='Registration Successful')
        except:
            return jsonify(status='400',error='Bad Request')

@app.route('/v1.0/login',methods=['GET','POST'])
def login():

    '''
        format - {'email':str, 'password':str}
         
    '''
    
    if request.method == 'POST':
        credentials = request.get_json()

        user = User.query.filter_by(roll_number = credentials['roll_number']).first()
        if not user:
            return jsonify(status='401',error='Invalid Roll Number')
        elif not check_password_hash(user.password,credentials['password']):
            return jsonify(status='401',error='Invalid password')
        else:
            token = Utility.generate_auth_token(user)
            users.append(credentials['roll_number'])
            return jsonify(status='200',error='None', message='Login Successful', token=token.decode('ascii'))
        
        
@app.route('/v1.0/complaint',methods=['GET','POST'])
def register_complaint():

    '''
        post_format - {'category':str, 'description':text}
        return_format - {'status':str}
    '''

    if request.method == 'POST':
        complaint = request.get_json()
        if not Utility.is_logged_in(complaint['token']):
            return jsonify(error='unauthorized',status='400')
        try:
            complaint = Complaint(category = complaint['category'], description = complaint['description'], hostel = complaint['hostel'])
            db.session.add(complaint)
            db.session.commit()
            return jsonify(status='200')
        except:
            return jsonify(status='503')


@app.route('/v1.0/log_check',methods=['GET','POST'])
def login_check():
    credentials = request.get_json()
    return jsonify(status=Utility.is_logged_in(credentials['token']))


@app.route('/v1.0/fetch_complaints',methods=['GET','POST'])
def fetch_complaints():

    if request.method == 'POST':
        json = request.get_json()
        complaints = Complaint.query.filter_by(hostel_name = json['hostel']).all()
         

@app.route('/v1.0/fetch_menu',methods=['GET','POST'])  # Work with caution, mindfux ahead
def fetch_mess_menu():

    pass


@app.route('/v1.0/update_menu',methods=['GET','POST'])   # if menu is not created yet, create else updating takes place.
def update_menu():

    pass

db.drop_all()
db.create_all()


if __name__ == '__main__':
    app.run(debug=True)
