import time
import json
from flask import Flask, request, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/bene"
mongo = PyMongo(app)


@app.route('/',methods=['GET', 'POST'])
def index():
    return "Hello there!"
    
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/form',methods=['POST'])
def form():
    data = request.get_json()
    answers = data["form_response"]["answers"]
    interests = answers[0]["choices"].get("labels")
    skills = answers[1]["choices"].get("labels")
    userinfo = {"interests": interests, "skills": skills}
    print(userinfo)
    mongo.db.formDetails.insert_one(userinfo)
    return userinfo

@app.route('/dosomething')
def recs():
    skills = str(mongo.db.formDetails.find().sort([('timestamp', -1)]).limit(1)[0]["skills"])
    details = str(mongo.db.formDetails.find().sort([('timestamp', -1)]).limit(1)[0]["interests"])
    return {"skills": skills, "details": details}

if __name__ == '__main__':
    app.run(use_reloader=True)