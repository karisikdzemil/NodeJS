const Product = require("../models/Product");

exports.getShop = (req, res, next) => {
  Product.find().then((products) => {
    res.render("shop/shop", { title: "Shop", active: "home", prods: products });
  });
};

exports.getProducts = (req, res, next) => {
  Product.find().then((products) => {
    res.render("shop/products", {
      title: "Products",
      active: "products",
      prods: products,
    });
  });
};

exports.getCart = async (req, res, next) => {
  try{
    const cartItems = await Promise.all(
      req.user.cart.items.map(async (el) => {
        const product = await Product.findById(el.productId);
        return {product: product, quantity: el.quantity};
      })
    );
    let total = 0;
    cartItems.forEach(el => {
      total += el.product.price * el.quantity;
    });
    res.render('shop/cart', {
      active: 'cart',
      title: 'Your Cart',
      cartItems: cartItems,
      total: total
    });
  }catch(err){
    console.log(err)
  }
};

exports.postToCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render("shop/order", { active: "orders", title: "Order" });
};

exports.postOrder = (req, res, next) => {
  
  res.redirect('/orders')
}