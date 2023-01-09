import postingFunction
from flask import Flask, render_template, request, redirect, url_for, session
from fake_store_api import AllProducts


app = Flask(__name__)
product_access = AllProducts()


# --------------- FLASK Route -------------------- #

#Main/base page will show all the products from the JSON file
# it loads data from file and returns to the index.html or main page
@app.route('/')
def main():
    # products = product_access.get_product_info()
    # product_titles = [product['product_title'] for product in products]
    # product_images = [product['product_image'] for product in products]
    # product_price = [product['product_price'] for product in products]
    #return render_template("index.html", title=product_titles, image=product_images, price=product_price)

    return render_template("index.html")

@app.route('/post')
def post_page():
    return render_template("post_page.html")

#When user fill out all the information and click on the post button, it will return the below function
# the function takes the user's input and add to the mockData.json and go back to main page
@app.route('/post/success', methods=["POST"])
def add_new_product():
    if request.method == "POST":
        product_name = request.form['productName']
        product_price = request.form['price']
        product_discount = request.form['discount']
        product_type = request.form['productType']
        postingFunction.writeData(product_name, product_price, product_discount, product_type)
    return render_template("index.html")


if __name__ == '__main__':
    app.run()




#------------------------------------------------------------------------
#                      LOGIN
#------------------------------------------------------------------------
""" @app.route('/login')
def login():
    return render_template("login.html")

@app.route('/profile', methods=['POST'])
def login_input():
    username = request.form['username']
    return render_template("profile.html", _username=username) """


#if login == true, show upload info/profile
#use dictionary to store user data
#if username == certainUser then pull info from that dictionary to get

#------------------------------------------------------------------------

