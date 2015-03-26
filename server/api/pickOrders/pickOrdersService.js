(function (pickOrderService) {
    
    //var seedData = require("./seedData");
    var database = require('../../data/database');
    var ObjectID = require('mongodb').ObjectID; // http://stackoverflow.com/a/24802198/2726725
 
    pickOrderService.getAll = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.pickOrders.find().toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };


    pickOrderService.getById = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);
                db.pickOrders.findOne({ _id: o_id }, next);
            }
        });
    };


    pickOrderService.create = function (pickOrder, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.pickOrders.insertOne(pickOrder, {w:1}, next);
            }
        });
    };


    pickOrderService.update = function (pickOrder, next) {

        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(pickOrder._id);
                //delete pickOrder._id; // http://stackoverflow.com/a/14585652/2726725
                pickOrder._id = o_id;
                // the seccond param of nex function contains the updated object
                db.pickOrders.findOneAndUpdate({_id:o_id}, pickOrder, {returnOriginal: false, upsert:false}, next);
            }
        });
    };  


    pickOrderService.delete = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);                
                db.pickOrders.findOneAndDelete({_id:o_id},  next);
            }
        });
    };


})(module.exports);