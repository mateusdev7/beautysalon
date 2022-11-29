import pymongo
import sys
sys.path.append('C:/Apache24/htdocs/bm')
class MongoConnection:
    def connect(self):
        self.myclient = pymongo.MongoClient("mongodb://localhost:27017/")
        self.mydb = self.myclient["bm"]
        self.collectionUsers = self.mydb["user"]
        self.collectionSallon = self.mydb["sallon"]
    def close(self):
        self.myclient.close()
        
if __name__ == "__main__":
    MongoConnection.connect()




