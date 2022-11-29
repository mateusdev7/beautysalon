import sys
sys.path.append('C:/Apache24/htdocs/bm')
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from data.userSallon.operationSallon import OperationsSallon
from model.sallon import Sallon
app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/searchAllSallon', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def searchAllSallon():
    responseDatSallons = OperationsSallon.findAllSallons()
    if (responseDatSallons != []):
        return responseDatSallons
    else:
        return []

@app.route('/getServicesSallon', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getServicesSallon():
    responseDataSallons = OperationsSallon.findServicesSallon()
    if (responseDataSallons != []):
        return responseDataSallons
    else:
        return []
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001, debug=False, threaded=True)