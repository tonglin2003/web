import json
import os
from flask import Flask

app = Flask(__name__)

filename = os.path.join(os.path.dirname(app.instance_path), 'static', 'mockData.json')

#function to pull data out of the json file, and return data as a list of dictionaries
def pullData():
    with open(filename, mode="r") as file:
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
    with open(filename, 'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))


'''
Ways to keep the product info:
1. find a way to edit Github json and let github host the files(database) for you

2. Use postman api

3. Find something that can host the data storage for you

Current problem (1.6, 12:07PM): Each device will have different display. 
It won't let all devices to show the same product content. 
So we might need something(like database) to host the product info for us
'''

