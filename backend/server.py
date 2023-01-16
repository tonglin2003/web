from flask import Flask, current_app, jsonify, request
import json
import JsonAccess
import os
import updateUserData
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

userDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'userData.json')
productDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'productData.json')


@app.route('/products')
def get_product():
    return JsonAccess.pullData(productDataDirectory)

@app.route('/getItemByCategory', methods=["GET", "POST"])
def get_product_by_category():
    category = request.json['category']
    print("Something is get by the getItemByCategory function!!")
    return JsonAccess.pullDataByKey(productDataDirectory, "category", category)

@app.route('/getItemById', methods=["GET", "POST"])
def get_product_by_id():
    productId = request.json['id']
    print(JsonAccess.pullDataByKey(productDataDirectory, "id", int(productId)))
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
