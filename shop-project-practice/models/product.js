const mongoConnect = require('../util/database');
const getDb = require("../util/database").getDb;

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
    return db.collection('products').find();
  }
}
