import json
from flask import Flask, render_template

app = Flask(__name__)

#function to pull data out of the json file, and return data as a list of dictionaries
def pullData():
    with open("/Users/tonglin/PycharmProjects/webProject/static/mockData.json", mode="r") as file:
        data = json.load(file)
        return data


#adds/update Data into JSON, takes in price(double), discount(double), productType(string)
# and doesn't return anything
def writeData(price, discount, productType):
    # with open("/Users/tonglin/PycharmProjects/webProject/static/mockData.json", )as file:
    #     listObj = json.load(file)
    listObj = pullData()

    listObj.append(
        {
            "productID": listObj[len(listObj)-1]["productID"] + 1,
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
    return render_template("base.html")

#function for pulling
#@app.route('/pull/success'



if __name__ == '__main__':
    app.run()
