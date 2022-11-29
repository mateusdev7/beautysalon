import sys
from conexao.DataBaseConnectionMongo import MongoConnection
sys.path.append('C:/Apache24/htdocs/bm')

mongo = MongoConnection()

class OperationsSallon():
    def findAllSallons():
      mongo.connect()
      list = []
      for sallon in mongo.collectionSallon.find():
          sallonObject = dict(
              id = sallon["id"],
              nameSallon = sallon["nameSallon"],
              address = sallon["address"],
              arrayProfessionals = sallon["listProfessionals"]
          )
          list.append(sallonObject)
      if list != []:
          return list
      else:
          return []
    
    def findServicesSallon():
      mongo.connect()
      list = []
      for sallon in mongo.collectionSallon.find():
          sallonObject = dict(
              arrayProfessionals = sallon["listProfessionals"]
          )
          list.append(sallonObject)
      if list != []:
          return list[0]
      else:
          return []
      
    