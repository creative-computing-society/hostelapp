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

class Hostel(db.Model):

    __tablename__ = 'hostels'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(10), nullable = False)
    warden = db.Column(db.String(50), nullable = True)
    caretaker = db.Column(db.String(50), nullable = True)
    mess_members = db.Column(db.String(50), nullable = True)  # format - 'member1:member2:member3'
    student_representatives = db.Column(db.String(50), nullable = True)  # format - 'student1:student2:student3'
    mess_menus = db.relationship('Mess_Menu', backref = 'hostel', lazy ='dynamic')
    complaints = db.relationship('Complaint', backref = 'hostel', lazy ='dynamic')


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

class Mess_Menu(db.Model):

    __tablename__ = 'mess_menus'

    '''
        Format - Timings::BreakFast::Timings::Lunch::Timings::Dinner
    '''
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    week = db.Column(db.Integer, nullable=False)
    hostel_name = db.Column(db.String(10), nullable=False)
    sunday = db.Column(db.String(500), nullable=False)
    monday = db.Column(db.String(500), nullable=False)
    tuesday = db.Column(db.String(500), nullable=False)
    wednesday = db.Column(db.String(500), nullable=False)
    thursday = db.Column(db.String(500), nullable=False)
    friday = db.Column(db.String(500), nullable=False)
    saturday = db.Column(db.String(500), nullable=False)
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))

class Complaint(db.Model):

    __tablename__ = 'complaints'

    id = db.Column(db.Integer, primary_key = True, nullable = False)

    category = db.Column(db.String(120), nullable = False)
    description = db.Column(db.Text(), nullable = False)
    timestamp = db.Column(db.DateTime(),default = datetime.utcnow)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hostel_name = db.Column(db.String(10), nullable = False)
    room_number = db.Column(db.String(10), nullable = False)
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.id'))

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

    @staticmethod
    def create_hostels(name, warden, caretaker, mess_members,student_representatives):

        hostel = Hostel(name=name, warden=warden, caretaker=caretaker,mess_members=mess_members,student_representatives=student_representatives)
        db.session.add(hostel)
        db.session.commit()

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

    if request.method == 'POST':
        json = request.get_json()
        complaints = Complaint.query.filter_by(hostel = json['hostel']).all()
         

@app.route('/v1.0/fetch_menu',methods=['GET','POST'])  # Work with caution, mindfux ahead
def fetch_mess_menu():

    '''
        input format - {hostel:string, week:int}
        return_format - {
                             header:{hostel:str,week:int}
                             food:{weekdays:str}
                             timings:{weekdays:str}
                         }  
    '''
    
    if request.method == 'POST':
        
        json = request.get_json()
        menu = Mess_Menu.query.filter_by(hostel_name=json['hostel'], week=int(json['week'])).first()
        if menu:
            print(menu.sunday.split('::'))
            dict = {
                                "header":{"hostel":json['hostel'], "week":json['week']},\
                                        
                                "food":{
                                    
                                    {'breakfast':{'sunday':menu.sunday.split('::')[1], 'monday':menu.monday.split('::')[1],'tuesday':menu.tuesday.split('::')[1],'wednesday':menu.wednesday.split('::')[1],'thursday':menu.thursday.split('::')[1],'friday':menu.friday.split('::')[1],'saturday':menu.saturday.split('::')[1]}},\
                                    {'lunch':{'sunday':menu.sunday.split('::')[3], 'monday':menu.monday.split('::')[3],'tuesday':menu.tuesday.split('::')[3],'wednesday':menu.wednesday.split('::')[3],'thursday':menu.thursday.split('::')[3],'friday':menu.friday.split('::')[3],'saturday':menu.saturday.split('::')[3]}},\
                                    {'dinner':{'sunday':menu.sunday.split('::')[5], 'monday':menu.monday.split('::')[5],'tuesday':menu.tuesday.split('::')[5],'wednesday':menu.wednesday.split('::')[5],'thursday':menu.thursday.split('::')[5],'friday':menu.friday.split('::')[5],'saturday':menu.saturday.split('::')[5]}}

                                    },
                                "timings":{
                                    
                                    {'breakfast':{'sunday':menu.sunday.split('::')[0], 'monday':menu.monday.split('::')[0],'tuesday':menu.tuesday.split('::')[0],'wednesday':menu.wednesday.split('::')[0],'thursday':menu.thursday.split('::')[0],'friday':menu.friday.split('::')[0],'saturday':menu.saturday.split('::')[0]}},\
                                    {'lunch':{'sunday':menu.sunday.split('::')[2], 'monday':menu.monday.split('::')[2],'tuesday':menu.tuesday.split('::')[2],'wednesday':menu.wednesday.split('::')[2],'thursday':menu.thursday.split('::')[2],'friday':menu.friday.split('::')[2],'saturday':menu.saturday.split('::')[2]}},\
                                    {'dinner':{'sunday':menu.sunday.split('::')[4], 'monday':menu.monday.split('::')[4],'tuesday':menu.tuesday.split('::')[4],'wednesday':menu.wednesday.split('::')[4],'thursday':menu.thursday.split('::')[4],'friday':menu.friday.split('::')[4],'saturday':menu.saturday.split('::')[4]}}
                             }
                            }
            return jsonify(
                            {
                                "header":{"hostel":json['hostel'], "week":json['week']},\
                                        
                                "food":{
                                    
                                    {'breakfast':{'sunday':menu.sunday.split('::')[1], 'monday':menu.monday.split('::')[1],'tuesday':menu.tuesday.split('::')[1],'wednesday':menu.wednesday.split('::')[1],'thursday':menu.thursday.split('::')[1],'friday':menu.friday.split('::')[1],'saturday':menu.saturday.split('::')[1]}},\
                                    {'lunch':{'sunday':menu.sunday.split('::')[3], 'monday':menu.monday.split('::')[3],'tuesday':menu.tuesday.split('::')[3],'wednesday':menu.wednesday.split('::')[3],'thursday':menu.thursday.split('::')[3],'friday':menu.friday.split('::')[3],'saturday':menu.saturday.split('::')[3]}},\
                                    {'dinner':{'sunday':menu.sunday.split('::')[5], 'monday':menu.monday.split('::')[5],'tuesday':menu.tuesday.split('::')[5],'wednesday':menu.wednesday.split('::')[5],'thursday':menu.thursday.split('::')[5],'friday':menu.friday.split('::')[5],'saturday':menu.saturday.split('::')[5]}}

                                    },
                                "timings":{
                                    
                                    {'breakfast':{'sunday':menu.sunday.split('::')[0], 'monday':menu.monday.split('::')[0],'tuesday':menu.tuesday.split('::')[0],'wednesday':menu.wednesday.split('::')[0],'thursday':menu.thursday.split('::')[0],'friday':menu.friday.split('::')[0],'saturday':menu.saturday.split('::')[0]}},\
                                    {'lunch':{'sunday':menu.sunday.split('::')[2], 'monday':menu.monday.split('::')[2],'tuesday':menu.tuesday.split('::')[2],'wednesday':menu.wednesday.split('::')[2],'thursday':menu.thursday.split('::')[2],'friday':menu.friday.split('::')[2],'saturday':menu.saturday.split('::')[2]}},\
                                    {'dinner':{'sunday':menu.sunday.split('::')[4], 'monday':menu.monday.split('::')[4],'tuesday':menu.tuesday.split('::')[4],'wednesday':menu.wednesday.split('::')[4],'thursday':menu.thursday.split('::')[4],'friday':menu.friday.split('::')[4],'saturday':menu.saturday.split('::')[4]}}
                             }
                            }
                            )
        return jsonify(error='menu not found')


@app.route('/v1.0/update_menu',methods=['GET','POST'])   # if menu is not created yet, create else updating takes place.
def update_menu():

    if request.method == 'POST':
        menu_details = request.get_json()

        menu = Mess_Menu.query.filter_by(hostel_name=menu_details['hostel'],week=int(menu_details['week']))

        if menu:
        
            
            menu = Mess_Menu(hostel_name=menu_details['hostel'], week=int(menu_details['week']), sunday=menu_details['sunday'],monday=menu_details['monday'],tuesday=menu_details['tuesday']\
                             ,wednesday=menu_details['wednesday'],thursday=menu_details['thursday'],friday=menu_details['friday'],saturday=menu_details['saturday'])
            hostel_object = Hostel.query.filter_by(name=menu_details['hostel'])
            
            db.session.add(menu)
            db.session.commit()

            return jsonify(message='menu created successfully')
            
        else:
            menu.sunday = menu_details['sunday']
            menu.monday = menu_details['monday']
            menu.tuesday = menu_details['tuesday']
            menu.wednesday = menu_details['wednesday']
            menu.thursday = menu_details['thursday']
            menu.friday = menu_details['friday']
            menu.saturday = menu_details['saturday']

            db.session.commit()
            return jsonify(message='menu updated successfully')
        
db.drop_all()    
db.create_all()

Utility.create_hostels('H','ABC','ABC', 'Mankaran Singh::Udhbav Oberoi', 'Mankaran Singh::Udhbav Oberoi::Nikhil')    # name, warden, caretaker, mess_members,student_representatives
Utility.create_hostels('B','ABC','ABC', 'Mankaran Singh::Udhbav Oberoi', 'Mankaran Singh::Udhbav Oberoi::Nikhil')

if __name__ == '__main__':
    app.run(debug=True)
        
        
        
        
        
    
        
        
        
        
     
    
    


   
