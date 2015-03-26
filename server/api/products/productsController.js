'use strict';

var productService = require('./productsService');


exports.getAll = function (req, res) {
    productService.getAll(function (err, product) {
        if (err) {
            res.send(400, err);
        }  else {          
            res.send(product);
        }
    });
};

exports.getById = function (req, res) {
    var id = req.params.id;

    productService.getById(id, function (err, product) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(product);
        }
    });
};


exports.create = function(req, res){
    var product = req.body;

    productService.create(product, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(201, response.ops[0]);
        }
    });
};


exports.update = function(req, res){
    var product = req.body;
    var id = req.params.id;

    productService.update(product, function (err, response) {
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

    productService.delete(id, function (err, response) {
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