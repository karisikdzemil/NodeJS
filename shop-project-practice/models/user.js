const getDb = require("../util/database").getDb;
const { ObjectId } = require("mongodb");

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.cart = { items: [] };
  }

  save() {}

  static findById() {}

   addToCart(productId) {
    const db = getDb();
    db.collection("products")
      .findOne({ _id: new ObjectId(productId) })
      .then((product) => {
        this.cart.items.push(product);
      })
      .catch((err) => console.log(err));
  }

  static removeFromCart(productId) {}

  static getCart() {}

  static clearCart() {}
};
