(function (techSpecService) {
    
    //var seedData = require("./seedData");
    var database = require('../../data/database');
    var ObjectID = require('mongodb').ObjectID; // http://stackoverflow.com/a/24802198/2726725
 
    techSpecService.getAll = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.techSpecs.find().toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };


    techSpecService.getById = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);
                db.techSpecs.findOne({ _id: o_id }, next);
            }
        });
    };


    techSpecService.create = function (techSpec, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.techSpecs.insertOne(techSpec, {w:1}, next);
            }
        });
    };


    techSpecService.update = function (techSpec, next) {

        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(techSpec._id);
                //delete techSpec._id; // http://stackoverflow.com/a/14585652/2726725
                techSpec._id = o_id;
                // the seccond param of nex function contains the updated object
                db.techSpecs.findOneAndUpdate({_id:o_id}, techSpec, {returnOriginal: false, upsert:false}, next);
            }
        });
    };  


    techSpecService.delete = function (id, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                var o_id = new ObjectID(id);                
                db.techSpecs.findOneAndDelete({_id:o_id},  next);
            }
        });
    };


})(module.exports);