from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    username = data.get("username")

    for user in users:
        if user["username"] == username:
            return jsonify({
                "message": "Username already exists"
            }), 400

    users.append(data)

    return jsonify({
        "message": "Registration Successful"
    })


@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    for user in users:
        if (
            user["username"] == username and
            user["password"] == password
        ):
            return jsonify({
                "message": "Login Successful",
                "user": {
                    "name": user["name"],
                    "username": user["username"],
                    "email": user["email"]
                }
            })

    return jsonify({
        "message": "Invalid Credentials"
    }), 401


if __name__ == "__main__":
    app.run(debug=True)