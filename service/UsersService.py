import sys
sys.path.append('C:/Apache24/htdocs/bm')
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from data.userClient.operationUser import OperationsUser
from model.user.User import User
app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/insert', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def insert():
    data = request.json
    data["id"] = OperationsUser.findLastUser() + 1
    user = User(**data)
    resultInsert = OperationsUser.insertOneUser(data)
    if (resultInsert):
        returnJson = json.dumps(user.__dict__, ensure_ascii=False).encode('utf8')
        return returnJson
    else:
        return []

@app.route('/searchUserForLogin', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def searchUserForLogin():
    data = request.json
    responseDataForLoginUser = OperationsUser.searchUserWithEmail(data["email"])
    if (responseDataForLoginUser != None):
        return responseDataForLoginUser
    else:
        return []
    
@app.route('/update', methods=['GET', 'POST', 'UPDATE'])
@cross_origin(supports_credentials=True)
def update():
    data = request.json
    if (data != None):
        user = User(**data)
        OperationsUser.updateUser(data["email"], data["cpf"], data["telephoneNumber"])
        returnJson = json.dumps(user.__dict__, ensure_ascii=False).encode('utf8')
        return returnJson
    else: 
        return []
    
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=False, threaded=True)