from flask import Flask
import json

app = Flask(__name__)

# API Route
@app.route('/userdata')
def user_data():
    with open('userData.json') as f:
        return json.load(f)

if __name__ == "__main__":
    app.run(debug=True)
