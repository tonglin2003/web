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

@app.route('/getMoreItemByKey', methods=["GET", "POST"])
def get_product_by_id_list():
    product_id_list = request.json['id']
    return JsonAccess.pullMoreDataByKey(productDataDirectory, "id", product_id_list)


@app.route('/post%product/success', methods=["POST"])
def add_new_product():
    print("Server.py's add_new_product is running!!")
    title = request.json["title"]
    discount = float(request.json['discount'])
    price = float(request.json["price"])
    description = request.json["description"]
    category = request.json["category"]
    companyLogo = request.json['companyLogo']
    image = request.json["image"]

    return JsonAccess.write_product_data(productDataDirectory, title, discount, price, description,
                                         category, companyLogo, image)


# API Route
@app.route('/api/userdata')
def user_data():
    with open(userDataDirectory) as f:
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
    profile_background = request.json["newBackground"]
    updateUserData.updateProfile(id, name, image, bio, phone, email, website, location, profile_background)
    return "Update success!"

@app.route('/api/update_shop', methods=['POST', 'GET'])
def get_shop_update_from_react():
    id = int(request.json['userID'])
    name = request.json["newName"]
    image = request.json["newImage"]
    bio = request.json["newBio"]
    history = request.json["newHistory"]
    staff_photos = request.json["newStaffPhotos"]
    testimonials = request.json["newTestimonials"]
    shop_banner = request.json["newShopBanner"]
    updateUserData.updateShop(id, name, image, bio, history, testimonials, staff_photos, shop_banner)
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
        "profile_background": "",
        "shop_banner": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        "bio": "",
        "history": ["Founded in 2022","Their slogan etc. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor."],
        "phone": request.json["phoneInput"],
        "email": request.json["emailInput"],
        "website": "",
        "location": "",
        "products": [],
        "staff_photos": ["https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13976092/pexels-photo-13976092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3799717/pexels-photo-3799717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "testimonials": ["https://i.ibb.co/Wsr9wjX/Pexels-photo-1681010.jpg", "Testimonials", "Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices.", "https://i.ibb.co/7SxWmpX/Pexels-photo-14917591.jpg" ,"Testimonials", "Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices."],
        "revenue": [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    updateUserData.newUser(data)
    return "Update success!"

if __name__ == "__main__":
    app.run(debug=True)


