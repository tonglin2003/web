import json
import os
from flask import Flask

app = Flask(__name__)

userDataDirectory = os.path.join(os.path.dirname(app.instance_path), 'static', 'userData.json')

#Load json file
def loadData():
    with open(userDataDirectory) as f:
        return json.load(f)


data = loadData()

#Save json file with new data
def saveData(data):
     with open('static/userData.json', 'w') as f:
        json.dump(data, f, indent=4)

# Create new user in json file
def newUser(newData):
        data.append(newData)
        saveData(data)

#Update one item in json file
def updateData(userID, key, newValue):
    data[userID][key] = newValue
    saveData(data)

def updateProfile(userID, name, image, bio, phone, email, website, location, profile_background):
        updateData(userID, 'name', name)
        updateData(userID, 'image', image)
        updateData(userID, 'bio', bio)
        updateData(userID, 'phone', phone)
        updateData(userID, 'email', email)
        updateData(userID, 'website', website)
        updateData(userID, 'location', location)
        updateData(userID, 'profile_background', profile_background)

def updateAccount(userID, name, phone, email):
        updateData(userID, 'name', name)
        updateData(userID, 'phone', phone)
        updateData(userID, 'email', email)

def updatePassword(userID, password):
        updateData(userID, 'password', password)


