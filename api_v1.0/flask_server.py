from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)

base_dir=os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(base_dir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

db = SQLAlchemy(app)

users = []

#Databases
class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    username = db.Column(db.String(50), nullable = False)
    roll_number = db.Column(db.Integer(), unique= True, nullable = False)
    email = db.Column(db.String(120), unique= True, nullable = False)
    password = db.Column(db.String(120), nullable = False)
    phone_number = db.Column(db.Integer(), unique= True, nullable = False)
    hostel = db.Column(db.String(10), nullable = False)
    complaints = db.relationship('Complaint', backref = 'student', lazy ='dynamic')

class Mess_Menu_Week1(db.Model):

    __tablename__ = 'mess_menu'

    '''
        Format - Hostel:Timings:BreakFast:Timings:Lunch:Timings:Dinner
    '''
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    hostel = db.db.Column(db.String(10), nullable=False)
    sunday = db.Column(db.String(500), nullable=False)
    monday = db.Column(db.String(500), nullable=False)
    tuesday = db.Column(db.String(500), nullable=False)
    wednesdaay = db.Column(db.String(500), nullable=False)
    thursday = db.Column(db.String(500), nullable=False)
    friday = db.Column(db.String(500), nullable=False)
    saturday = db.Column(db.String(500), nullable=False)

class Mess_Menu_Week2(db.Model):

    __tablename__ = 'mess_menu'

    '''
        Format - Hostel:Timings:BreakFast:Timings:Lunch:Timings:Dinner
    '''
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    hostel = db.db.Column(db.String(10), nullable=False)
    sunday = db.Column(db.String(500), nullable=False)
    monday = db.Column(db.String(500), nullable=False)
    tuesday = db.Column(db.String(500), nullable=False)
    wednesdaay = db.Column(db.String(500), nullable=False)
    thursday = db.Column(db.String(500), nullable=False)
    friday = db.Column(db.String(500), nullable=False)
    saturday = db.Column(db.String(500), nullable=False)

class Complaint(db.Model):

    __tablename__ = 'complaints'

    id = db.Column(db.Integer, primary_key = True, nullable = False)

    category = db.Column(db.String(120), nullable = False)
    description = db.Column(db.Text(), nullable = False)
    timestamp = db.Column(db.DateTime(),default = datetime.utcnow)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hostel = db.Column(db.String(10), nullable = False) 


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
    def is_logged_in(roll_number):
        if roll_number in users:
            return True
        return False

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
            user = User(username = credentials['name'], email = credentials['email'], password = credentials['password'], phone_number = credentials['phone_number'],roll_number=credentials['roll_number'],hostel=credentials['hostel'])
            db.session.add(user)
            db.session.commit()
            
            return jsonify(status='200',error='None', message='Registration Successful')
        except:
            return jsonify(status='400',error='Bad Request')

@app.route('/v1.0/login',methods=['GET','POST'])
def login():

    '''
        format - {'email':str, 'password':str}
        return_format - {}
    '''
    
    if request.method == 'POST':
        credentials = request.get_json()

        user = User.query.filter_by(roll_number = credentials['roll_number']).first()
        if not user:
            return jsonify(status='401',error='Invalid Roll Number')
        elif user.password != credentials['password']:
            return jsonify(status='401',error='Invalid password')
        else:
            users.append(credentials['roll_number'])
            return jsonify(status='200',error='None', message='Login Successful')
        
        
@app.route('/v1.0/complaint',methods=['GET','POST'])
def register_complaint():

    '''
        post_format - {'category':str, 'description':text}
        return_format - {'status':str}
    '''

    if request.method == 'POST':
        complaint = request.get_json()
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
    return jsonify(status=Utility.is_logged_in(credentials['roll_number']))

@app.route('/v1.0/fetch_complaints',methods=['GET','POST'])
def fetch_complaints():
    pass

@app.route('/v1.0/fetch_menu',methods=['GET','POST'])
def fetch_mess_menu():
    pass

db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
        
        
        
        
        
    
        
        
        
        
     
    
    


   
