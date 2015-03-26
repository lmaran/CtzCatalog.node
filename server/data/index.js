(function (data) {
    
    //var seedData = require("./seedData");
    var database = require('./database');

    //data.getNodeCategories = function (next) {
    //    //next(null, seedData.initialNotes);

    //    database.getDb(function (err, db) {
    //        if (err) {
    //            next(err, null);
    //        } else {
    //            db.notes.find().sort({ name: 1 }).toArray(function (err, results) {
    //                if (err) {
    //                    next(err, null);
    //                } else {
    //                    next(null, results);
    //                }
    //            });
    //        }
    //    });

    //};
    
    //data.getNotes = function (categoryName, next) {
        
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            next(err);
    //        } else {
    //            db.notes.findOne({ name: categoryName }, next); // we can re-use the next funtion here, 'cos it's the same signature as the anonymous function we'd normally define here.
    //        }
    //    });
    //};
    
    //data.addNote = function (categoryName, noteToInsert, next) {
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            next(err);
    //        } else {
    //            db.notes.update(
    //                { name: categoryName }, { $push: { notes: noteToInsert } }, next);
    //        }
    //    });
    //};
    
    //data.createNewCategory = function (categoryName, next) {
        
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            next(err);
    //        } else {
    //            // use 'count' to test for duplicate names
    //            db.notes.find({ name: categoryName }).count(function (err, count) {
    //                if (err) {
    //                    next(err);
    //                } else {
    //                    if (count !== 0) {
    //                        // category already exists
    //                        next('Category already exists.');
    //                    } else {
    //                        var cat = {
    //                            name: categoryName,
    //                            notes: []
    //                        };
    //                        db.notes.insert(cat, function (err) {
    //                            if (err) {
    //                                next(err);
    //                            } else next(null);
    //                        });
    //                    }
    //                }
    //            });
    //        }
    //    });
    //};
    
    //data.getUser = function (username, next) {
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            next(err);
    //        } else {
    //            db.users.findOne({ username: username }, next);
    //        }
    //    });
    //};
    
    //data.addUser = function (user, next) {
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            console.log('Failed to add user: ' + err);
    //        } else {
    //            db.users.insert(user, next);
    //        }
    //    });
    //};    


    //function seedDatabase(){
    //    database.getDb(function (err, db) {
    //        if (err) {
    //            console.log("Failed to seed database: " + err);
    //        } else {
    //            // test to see if data exists
    //            db.notes.count(function (err, count) {
    //                console.log('Number of records: ' + count);
    //                if (err) {
    //                    console.log("Failed to retrieve database count.");
    //                } else {
    //                    if (count == 0) {
    //                        console.log("Seeding the database...");
    //                        seedData.initialNotes.forEach(function (item) {
    //                            db.notes.insert(item, function (err) {
    //                                if (err) console.log("Failed to insert note into database");
    //                                console.log('I supposedly inserted a record: ' + JSON.stringify(item));
    //                            });
    //                        });
    //                    } else console.log("Database already seeded");
    //                }
    //            });
    //        }
    //    });
    //};

    //seedDatabase();

    data.getCustomers = function (next) {
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

    // data.getStaffMembers = function (next) {
    //     database.getDb(function (err, db) {
    //         if (err) {
    //             next(err, null);
    //         } else {
    //             db.staffMembers.find().toArray(function (err, results) {
    //                 if (err) {
    //                     next(err, null);
    //                 } else {
    //                     next(null, results);
    //                 }
    //             });
    //         }
    //     });
    // };

})(module.exports);