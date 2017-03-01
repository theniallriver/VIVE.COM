var app = require('./../index.js');

var db = app.get('db');
var exports = module.exports = {}

exports.getProducts = function(req, res) {
    console.log('backend ctrl')
    db.product.get_products([], function(err, products) {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            res.send(products);
        }
    })
}

exports.addToCart = function(req, res) {
    console.log("product: " + req.body.product_id)
    console.log('quantity: ' + req.body.quantity)
    console.log('user order id: ' + req.user.order_id);
    db.product.add_cart([req.user.order_id, req.body.product_id, req.body.quantity], function(err, item) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            console.log('added to cart')
            return res.status(200).send('Added to cart');
        }
    })
}
exports.getCart = function(req, res) {
    console.log('now we in the backend')
    db.product.get_cart([req.user.order_id], function(err, cart) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            console.log('got Cart')
            return res.status(200).send(cart);
        }
    })
}
exports.removeFromCart = function(req, res) {
    db.product.remove_from_cart([req.params.id], function(err, cart) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            console.log('got Cart')
            return res.status(200).send(cart);
        }
    })
}
exports.checkout = function(req, res) {
    console.log('order: ' + req.user.order_id + ' user: ' + req.user.user_id)
    db.product.checkout([req.user.order_id], function(err, results) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            console.log('got Cart')
            return res.status(200).send(results);
        }
    })

    db.product.checkout2([req.user.user_id], function(err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log('got Cart')
        }
    })



}