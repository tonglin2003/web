from flask import Flask
import json
import JsonAcess

app = Flask(__name__)


# API Route
@app.route('/userdata')
def user_data():
    with open('static/userData.json') as f:
        return json.load(f)
# @app.route('/userdata')
# def user_data():
#     return JsonAcess.pullData()

if __name__ == "__main__":
    app.run(debug=True)

