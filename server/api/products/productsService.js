(function (productService) {
    
    //var seedData = require("./seedData");
    var database = require('../../data/database');
    var ObjectID = require('mongodb').ObjectID; // http://stackoverflow.com/a/24802198/2726725
 
    productService.getAll = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.products.find().toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };


    productService.getById = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);
                db.products.findOne({ _id: o_id }, next);
            }
        });
    };


    productService.create = function (product, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.products.insertOne(product, {w:1}, next);
            }
        });
    };


    productService.update = function (product, next) {

        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(product._id);
                //delete product._id; // http://stackoverflow.com/a/14585652/2726725
                product._id = o_id;
                // the seccond param of nex function contains the updated object
                db.products.findOneAndUpdate({_id:o_id}, product, {returnOriginal: false, upsert:false}, next);
            }
        });
    };  


    productService.delete = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);                
                db.products.findOneAndDelete({_id:o_id},  next);
            }
        });
    };


})(module.exports);