import time
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/',methods=['GET', 'POST'])
def index():
    return "Hello!"
    
@app.route('/time')
def get_current_time():
    return {'time': time.time()}