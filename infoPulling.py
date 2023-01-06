import json

#function to pull data out of the json file, and return data as a list of dictionaries
def pullData():
    with open("/static/mockData.json", mode="r") as file:
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
    with open("/static/mockData.json",'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))

