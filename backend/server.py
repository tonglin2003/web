from flask import Flask, current_app, jsonify, request
import json
import JsonAccess
import os
import updateUserData
# from flask_cors import CORS, cross_origin

app = Flask(__name__)
# cors = CORS(app)

userDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'userData.json')
productDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'productData.json')


@app.route('/products')
def get_product():
    return JsonAccess.pullData(productDataDirectory)


@app.route('/getItemByCategory', methods=["GET", "POST"])
def get_product_by_category():
    category = request.json['category']

    return JsonAccess.pullDataByKey(productDataDirectory, "category", category)


@app.route('/getItemById', methods=["GET", "POST"])
def get_product_by_id():
    productId = request.json['id']
    return JsonAccess.pullDataByKey(productDataDirectory, "id", int(productId))


@app.route('/post%product/success', methods=["POST"])
def add_new_product():
    print("Server.py's add_new_product is running!!")
    title = request.json["title"]
    discount = int(request.json['discount'])
    price = int(request.json["price"])
    description = request.json["description"]
    category = request.json["category"]
    image = request.json["image"]

    return JsonAccess.write_product_data(productDataDirectory, title, discount, price, description, category, image)


# API Route
@app.route('/api/userdata')
def user_data():
    with open(updateUserData) as f:
        return json.load(f)

@app.route('/api/update_profile', methods=['POST', 'GET'])
def get_profile_update_from_react():
    id = int(request.json['id'])
    name = request.json["newName"]
    image = request.json["newImage"]
    bio = request.json["newBio"]
    phone = request.json["newPhone"]
    email = request.json["newEmail"]
    website = request.json["newWebsite"]
    location = request.json["newLocation"]
    updateUserData.updateProfile(id, name, image, bio, phone, email, website, location)
    return "Update success!"

@app.route('/api/update_account', methods=['POST', 'GET'])
def get_account_update_from_react():
    id = int(request.json['id'])
    name = request.json["newName"]
    password = request.json["newPassword"]
    phone = request.json["newPhone"]
    email = request.json["newEmail"]
    updateUserData.updateAccount(id, name, phone, email)
    if(password):   
        updateUserData.updatePassword(id, password)
    return "Update success!"

@app.route('/api/new_user', methods=['POST', 'GET'])
def get_new_user_from_react():
    data= {
        "id": len(user_data()),
        "username": request.json["usernameInput"],
        "password": request.json["passwordInput"],
        "name": request.json["nameInput"],
        "image": "/imgs/default-avatar.jpg",
        "bio": "",
        "phone": request.json["phoneInput"],
        "email": request.json["emailInput"],
        "website": "",
        "location": "",
        "products": [],
        "revenue": [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    updateUserData.newUser(data)
    return "Update success!"

if __name__ == "__main__":
    app.run(debug=True)


