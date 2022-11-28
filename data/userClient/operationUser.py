import sys
import json
from conexao.DataBaseConnectionMongo import MongoConnection
sys.path.append('C:/Apache24/htdocs/bm')

mongo = MongoConnection()

class OperationsUser():
    def insertOneUser(data: json):
        mongo.connect()
        resultSearchUser = OperationsUser.searchUserWithEmail(data["email"])
        if (resultSearchUser == None):
            mongo.collectionUsers.insert_one(data)
            return True
        else:
            return False
        
    def findLastUser():
        mongo.connect()
        list = []
        for x in mongo.collectionUsers.find():
            list.append(x["id"])
        mongo.close()
        if (list == []):
            lastUser = 0
        else:
            lastUser = list[-1]
        mongo.close()
        return lastUser
    
    def searchUserWithEmail(email: str):
        mongo.connect()
        list = []
        for user in mongo.collectionUsers.find({ "email": email }):
            userObject = {
                "id" : user["id"],
                "email" : user["email"],
                "descriptionAccess" : user["descriptionAccess"],
                "fullName" : user["fullName"],
                "cpf" : user["cpf"],
                "telephoneNumber" : user["telephoneNumber"],
                "isSallon" : user["isSallon"],
            }
            list.append(userObject)
        if (list != []):
            return list[0]
        else:
            return None
    
    def updateUser(email: str, cpf: str, telephoneNumber: str):
        mongo.connect()
        myQuery = { "email": email }
        newValues = { "$set" : { "cpf": cpf, "telephoneNumber": telephoneNumber}}
        mongo.collectionUsers.update_many(myQuery, newValues)
        mongo.close()
    
    # def findAllUsers():
    #     mongo.connect()
    #     list = []
    #     for user in mongo.collectionUsers.find():
    #         userObject = dict(
    #             id = user["id"],
    #             name = user["name"],
    #             email = user["email"],
    #             cpf = user["cpf"]
    #         )
    #         list.append(userObject)
    #     mongo.close()
    #     return list
        
    # def findOneUserById(id: int):
    #     mongo.connect()
    #     list = []
    #     for user in mongo.collectionUsers.find({ "id": id }):
    #         userObject = {
    #             "id" : user["id"],
    #             "name" : user["name"],
    #             "email" : user["email"],
    #             "descriptionAccess" : user["descriptionAccess"],
    #             "cpf" : user["cpf"],
    #         }
    #         list.append(userObject)
    #     if (list != []):
    #         return list[0]
    #     else:
    #         return None
        
    # def deleteUser(cpf: str):
    #     mongo.connect()
    #     mongo.collectionUsers.delete_many({ "cpf": cpf })
    #     mongo.close()
    