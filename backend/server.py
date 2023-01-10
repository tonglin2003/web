from flask import Flask

app = Flask(__name__)

# API Route

if __name__ == "__main__":
    app.run(debug=True)