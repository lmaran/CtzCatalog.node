(function (customerService) {
    
    //var seedData = require("./seedData");
    var database = require('../../data/database');
    var ObjectID = require('mongodb').ObjectID; // http://stackoverflow.com/a/24802198/2726725
 
    customerService.getAll = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.customers.find().toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };


    customerService.getById = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);
                db.customers.findOne({ _id: o_id }, next);
            }
        });
    };


    customerService.create = function (customer, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.customers.insertOne(customer, {w:1}, next);
            }
        });
    };


    customerService.update = function (customer, next) {

        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(customer._id);
                //delete customer._id; // http://stackoverflow.com/a/14585652/2726725
                customer._id = o_id;
                // the seccond param of nex function contains the updated object
                db.customers.findOneAndUpdate({_id:o_id}, customer, {returnOriginal: false, upsert:false}, next);
            }
        });
    };  


    customerService.delete = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);                
                db.customers.findOneAndDelete({_id:o_id},  next);
            }
        });
    };


})(module.exports);