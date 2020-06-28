import time
from flask import Flask, request, render_template

app = Flask(__name__)


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
    return userinfo

if __name__ == '__main__':
    app.run(use_reloader=True)