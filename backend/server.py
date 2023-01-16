from flask import Flask, current_app, jsonify, request
import json
import JsonAccess
import os

app = Flask(__name__)

userDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'userData.json')
productDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'productData.json')


# API Route
@app.route('/userdata')
def user_data():
    return JsonAccess.pullData(userDataDirectory)


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
    discount = request.json['discount']
    price = request.json["price"]
    description = request.json["description"]
    category = request.json["category"]
    image = request.json["image"]

    return JsonAccess.write_product_data(productDataDirectory, title, discount, price, description, category, image)


if __name__ == "__main__":
    app.run(debug=True)
