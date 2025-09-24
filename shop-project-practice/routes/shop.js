const shopController = require('../controllers/shop');

// GET shop products
app.get("/", shopController.getShop);

// GET products
app.get("/products", shopController.getProducts);

// GET cart
app.get("/cart", shopController.getCart);

// GET orders
app.get("/orders", shopController.getOrders);

module.exports = router;