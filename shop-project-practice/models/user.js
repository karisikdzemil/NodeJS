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
  return db.collection("users")
    .findOne({ _id: new ObjectId(userId) })
    .then((user) => {
      if (!user.cart) user.cart = { items: [] };
      user.cart.items.push({ productId: new ObjectId(productId) });

      return db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        { $set: { cart: user.cart } }
      );
    })
    .catch((err) => console.log(err));
}


  static removeFromCart(productId) {}

static getCart(userId) {
  const db = getDb();
  return db.collection('users').findOne({ _id: userId }).then(user => {
    if (!user || !user.cart || !user.cart.items) return [];

    const itemIds = user.cart.items;
    const productPromises = itemIds.map(itemId => {
      return db.collection('products').findOne({ _id: new ObjectId(itemId) });
    });
    console.log(itemIds)

    return Promise.all(productPromises);
  });
}


  static clearCart() {}
};
