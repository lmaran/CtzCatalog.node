(function(database) {
    
    var mongodb = require('mongodb');
    var config = require('../config/environment');
    
    var theDb = null; // this will be re-used so the db is only created once (on first request).

    database.getDb = function(next) { // the 'next' parameter is the callback function. Takes an error as first parameter, or the created db as the second.
        if (!theDb) {
            // connect to the db
            mongodb.MongoClient.connect(config.mongo.uri, config.mongo.options, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    // Shawn recommends that we wrap the db in an object so we can extend it easily later.
                    theDb = {
                        db: db,
                        customers: db.collection('Customers'),
                        products: db.collection('Products'),
                        techSpecs: db.collection('TechSpecs'),
                        pickOrders: db.collection('PickOrders')
                    };
                    next(null, theDb);
                }
            });
        } else { // db already exists...
            next(null, // no error
                theDb);
        }
    };

})(module.exports);