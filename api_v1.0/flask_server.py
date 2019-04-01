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
    roll_number = db.Column(db.String(120), unique= True, nullable = False)
    email = db.Column(db.String(120), unique= True, nullable = False)
    password = db.Column(db.String(120), nullable = False)
    phone_number = db.Column(db.String(10), unique= True, nullable = False)
    hostel = db.Column(db.String(10), nullable = False)

class Mess_Menu(db.Model):

    __tablename__ = 'mess_menu'

    '''
        Format - Timings:BreakFast:Lunch:Dinner
    '''
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    
    sunday = db.Column(db.String(500), nullable=False)
    monday = db.Column(db.String(500), nullable=False)
    tuesday = db.Column(db.String(500), nullable=False)
    wednesdaay = db.Column(db.String(500), nullable=False)
    thursday = db.Column(db.String(500), nullable=False)
    friday = db.Column(db.String(500), nullable=False)
    saturday = db.Column(db.String(500), nullable=False)

def Complaints(db.Model):

    __tablename__ = 'complaints'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    
    timestamp = db.Column(db.DateTime(),default = datetime.utcnow)
    username = db.Column(db.String(50), nullable = False)
    roll_number = db.Column(db.String(120), nullable = False)
    email = db.Column(db.String(120), nullable = False)
    phone_number = db.Column(db.String(10) , nullable = False)
    hostel = db.Column(db.String(10), nullable = False)

    


def validate_email(email):

    email = User.query.filter_by(email = email).first()
    if email:
        return False

def validate_phone_number(phone_number):

    phone_number = User.query.filter_by(phone_number = phone_number).first()
    if phone_number:
        return False

def validate_roll_number(roll_number):

    roll_number = User.query.filter_by(roll_number = roll_number).first()
    if roll_number:
        return False

@app.route('/TUhostels/v1.0/register',methods=['GET','POST'])
def register():

    '''
        format - {'name':str, 'roll_number':str,
                  'email':str, 'password':str, 'phone_number':str, 'hostel:'char', 'confirm_pass':str}
    '''

    if request.method == 'POST':
        credentials = request.get_json()
        
        if validate_email(credentials['email']) is False:
            return jsonify(status='401', error='Email already in use')
        
        if validate_phone_number(credentials['phone_number']) is False:
            return jsonify(status='401', error='phone_number already in use')
        
        if validate_roll_number(credentials['roll_number']) is False:
            return jsonify(status='401', error='roll_number already in use')

        if credentials['password'] != credentials['confirm_pass']:
            return jsonify(status='401', error="'Password' and 'Confirm Password' fields must match")

        try:
            user = User(username = credentials['name'], email = credentials['email'], password = credentials['password'], phone_number = credentials['phone_number'],roll_number=credentials['roll_nmber'])
            db.session.add(user)
            db.session.commit()
            
            return jsonify(status='200',error='None', message='Registration Successful')
        else:
            return jsonify(status='400',error='Bad Request')

@app.route('/TUhostels/v1.0/login',methods=['GET','POST'])
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
            users.append(credentials['email'])
            return jsonify(status='200',error='ILogged In')
        
        
@app.route('/TUhostels/v1.0/complaint',methods=['GET','POST'])
def register_complaint():

    '''
        format - {'roll_number':str, 'name':str, 'phone_number':str, 'email':str, 'category':str, 'details':str }
    '''

    if request.method == 'POST':
        complaint = request.get_json()
        
        
    
        
        
        
        
     
    
    


   
