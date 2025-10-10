const getDb = require("../util/database").getDb;
const { ObjectId } = require("mongodb");

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.cart = { items: [] };
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById() {}

   static addToCart(productId, userId) {
    const db = getDb();
    console.log(req.user._id)
    db.collection("users")
      .findOne({ _id: userId })
      .then((user) => {
        this.cart.items.push(productId);
        user.save();
      })
      .catch((err) => console.log(err));
  }

  static removeFromCart(productId) {}

  static getCart() {}

  static clearCart() {}
};
