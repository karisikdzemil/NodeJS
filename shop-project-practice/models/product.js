const mongoConnect = require('../util/database');
const getDb = require("../util/database").getDb;
const {ObjectId} = require('mongodb');

module.exports = class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  saveProduct(){
    const db = getDb();
    return db.collection('products').insertOne(this);
  }

  static findProducts(){
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static deleteProduct(productId){
      const db = getDb();
      db.collection('products').deleteOne({_id: new ObjectId(productId)}).then(result => {
        console.log('product deleted')
      }).catch(err => console.log(err));
  }
}
