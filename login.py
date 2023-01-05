
import app

from flask import Flask
from flask import LoginManager

@app.app.route("/login")
def login():
    return 'Login Page'