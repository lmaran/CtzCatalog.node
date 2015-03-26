'use strict';

var customerService = require('./customersService');


exports.getAll = function (req, res) {
    customerService.getAll(function (err, customer) {
        if (err) {
            res.send(400, err);
        }  else {          
            res.send(customer);
        }
    });
};


exports.getById = function (req, res) {
    var id = req.params.id;

    customerService.getById(id, function (err, customer) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(customer);
        }
    });
};


exports.create = function(req, res){
    var customer = req.body;

    customerService.create(customer, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(201, response.ops[0]);
        }
    });
};


exports.update = function(req, res){
    var customer = req.body;
    var id = req.params.id;

    customerService.update(customer, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            if (!response.value) {
                res.sendStatus(404); // not found
            } else {
                res.sendStatus(200);
            }
        }
    });
};


exports.delete = function(req, res){
    var id = req.params.id;

    customerService.delete(id, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            res.sendStatus(204);
        }
    });
};

// function handleError(res, err) {
//     return res.send(500, err);
// };