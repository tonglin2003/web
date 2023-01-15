import json
import os
from flask import Flask

app = Flask(__name__)


# function to pull data out of the json file, and return data as a list of dictionaries
def pullData(file_directory):
    # file_directory is the file you want to read the data from
    with open(file_directory, mode="r") as file:
        data = json.load(file)
        return data


# adds/update Data into JSON, takes in price(double), discount(double), productType(string)
# and doesn't return anything
def write_user_data(file_directory, username, password, name, image, bio, phone, email, website, location):
    # file_directory is the file you want to write the data to
    listObj = pullData(file_directory)

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
    with open(file_directory, 'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))


def write_product_data(file_directory, title, price=0, description='', category='', image=''):
    # file_directory is the file you want to write the data to
    listObj = pullData(file_directory)

    listObj.append(
        {
            "id": listObj[len(listObj) - 1]["id"] + 1,
            "title": title,
            "price": price,
            "description": description,
            "category": category,
            "image": image,
            "rating": 0
        }
    )
    with open(file_directory, 'w') as file:
        json.dump(listObj, file, indent=4, separators=(',', ': '))

    return listObj
