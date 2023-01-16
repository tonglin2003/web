from flask import Flask, request
import json
import updateUserData
from flask_cors import CORS, cross_origin

# import JsonAcess

app = Flask(__name__)
cors = CORS(app)


# API Route
@app.route('/api/userdata')
@cross_origin(supports_credentials=True)
def user_data():
    with open('static/userData.json') as f:
        return json.load(f)

@app.route('/api/update_user', methods=['POST', 'GET'])
@cross_origin(supports_credentials=True)
def get_user_update_from_react():
    if request.method == 'POST':
        data = request.json()
        print(data)
        id = request.json['id']
        name = request.json['newName']
        print(name)
        print("yoyoyoyo")
        print (id)
        updateUserData.updateData(id, 'name', name)
        return "Update success!"
    # id = request.form.get('id')
    # name = request.form.get('newName')
    # id = 0
    # name = "Henry"
    
    

# @app.route('/userdata')
# def user_data():
#     return JsonAcess.pullData()

if __name__ == "__main__":
    app.run(debug=True)

