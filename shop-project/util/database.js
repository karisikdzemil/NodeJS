const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://karisikdzemil:Dzemil123@cluster0.ldrhrp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then((result) => {
    console.log("Connected!!!");
  })
  .catch((err) => console.log(err));
