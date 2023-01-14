import json
import os
from flask import Flask

app = Flask(__name__)




# function to pull data out of the json file, and return data as a list of dictionaries
def pullData(fileDirectory):
    with open(fileDirectory, mode="r") as file:
        data = json.load(file)
        return data


# adds/update Data into JSON, takes in price(double), discount(double), productType(string)
# and doesn't return anything
def writeData(fileDirectory, username, password, name, image, bio, phone, email, website, location):
    listObj = pullData(fileDirectory)

    listObj.append(
        {
            "id": listObj[len(listObj) - 1]["id"] + 1,
            "username": username,
            "password": password,
            "name": name,
            "image": image,
            "bio": bio,
            "phone": phone,
            "email": email,
            "website": website,
            "location": location
        }
    )
    with open(fileDirectory, 'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))
