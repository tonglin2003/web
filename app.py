import json
import mysql.connector
from flask import Flask, render_template, request


app = Flask(__name__)

#function to pull data out of the json file, and return data as a list of dictionaries
def pullData():
    with open("/Users/tonglin/PycharmProjects/webProject/static/mockData.json", mode="r") as file:
        data = json.load(file)
        return data


#adds/update Data into JSON, takes in price(double), discount(double), productType(string)
# and doesn't return anything
def writeData(productName, price, discount, productType):
    listObj = pullData()

    listObj.append(
        {
            "productID": listObj[len(listObj)-1]["productID"] + 1,
            "productName": productName,
            "price": price,
            "discount": discount,
            "productType": productType
        }
    )
    with open("/Users/tonglin/PycharmProjects/webProject/static/mockData.json",'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))


#Main/base page will show all the products from the JSON file
# it loads data from file and returns to the base.html
@app.route('/')
def main():  # put application's code here
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
        writeData(product_name, product_price, product_discount, product_type)
    return render_template("index.html")


if __name__ == '__main__':
    app.run()



#------------------------------------------------------------------------
#                      LOGIN
#------------------------------------------------------------------------

connection = mysql.connector(host='localhost', port ='3306',
            database='login',user='admin',password='0000')

@app.route('/login',methods=['GET','POST'])
def login():
    message=''
    if request.method=='POST':
        username= request.form['username']
        password= request.form['password']
    #return render_template("login.html")


#------------------------------------------------------------------------

