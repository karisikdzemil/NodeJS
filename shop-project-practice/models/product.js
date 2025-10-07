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
    db.collection('products').insertOne(this);
  }

  static findProducts(){
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static deleteProduct(productId){
      const db = getDb();
      db.collection('products').findOne(new ObjectId(productId)).then(product => {
        console.log(product);
      }).catch(err => console.log(err));

  }
}
