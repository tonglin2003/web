from flask import Flask
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
def getProduct():
    return JsonAccess.pullData(productDataDirectory)

if __name__ == "__main__":
    app.run(debug=True)

