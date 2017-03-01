const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const config = require('./config')
const cors = require('cors')

//CONTROLLERS


//APP INIT
const app = module.exports = express();

app.use(bodyParser.json());


//SESSION
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./'))

const massiveInstance = massive.connectSync({
    connectionString: config.dbConnectionString
})

app.set('db', massiveInstance);
const db = app.get('db');



//CONTROLLERS
const productCtrl = require('./controllers/productCtrl.js')

app.get('/api/products', productCtrl.getProducts);
app.post('/api/cart', productCtrl.addToCart);
app.get('/api/cart', productCtrl.getCart);
app.delete('/api/cart/:id', productCtrl.removeFromCart)
app.get('/api/checkout', productCtrl.checkout)
app.get('/api/history', productCtrl.getHistory)
    //create User Table
db.init.create_tables([], function(err, results) {
    if (err) {
        console.error(err);
    } else {
        console.log("Initialized Tables")
    }
})

passport.use(new Auth0Strategy(config.authConfig,
    function(accessToken, refreshToken, extraParams, profile, done) {
        db.user.getUserByAuthId([profile.identities[0].user_id], function(err, user) {
            if (!user.length) { //if there isn't one, we'll create one!
                console.log('CREATING USER');
                db.user.add_user([profile.name.familyName, profile.name.givenName, profile.identities[0].user_id, profile.picture], function(err, user) {
                    console.log('USER CREATED', user);
                    db.order.insert([user[0].user_id], function(err, order) {
                        if (err) {
                            console.log('Db Create, during user create: ', err)
                        }
                        console.log('order created')
                        user[0].order_id = order[0].order_id
                        return done(null, user[0])
                    })
                })

            } else {
                console.log('User found', user);
                db.order.read_incomplete([user[0].user_id], function(err, order) {
                    if (err) {
                        return console.log("Find User Auth, Order not found", err);
                    }
                    console.log('order: ', order);
                    user[0].order_id = order[0].order_id;
                    return done(null, user[0]);
                });
            }

        })
    }));

app.get('/getUserInfo', function(req, res) {
    if (req.user) {
        res.send(req.user)
        console.log("yoyo" + req.user)
    } else {
        res.status(200).send('User not found')
    }
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#/home',
    failureRedirect: '/auth'
}));
app.get('/api/logout', function(req, res, next) {
    req.logout();
    return res.redirect('/#/home');
});

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
app.get('/auth/me', function(req, res, next) {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user);
    }
});



const PORT = 3000;

app.listen(PORT, function() {
    console.log('Listening: Port ' + PORT)
})