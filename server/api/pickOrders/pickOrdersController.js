'use strict';

var pickOrderService = require('./pickOrdersService');


exports.getAll = function (req, res) {
    pickOrderService.getAll(function (err, pickOrder) {
        if (err) {
            res.send(400, err);
        }  else {          
            res.send(pickOrder);
        }
    });
};


exports.getById = function (req, res) {
    var id = req.params.id;

    pickOrderService.getById(id, function (err, pickOrder) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(pickOrder);
        }
    });
};


exports.create = function(req, res){
    var pickOrder = req.body;

    pickOrderService.create(pickOrder, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(201, response.ops[0]);
        }
    });
};


exports.update = function(req, res){
    var pickOrder = req.body;
    var id = req.params.id;

    pickOrderService.update(pickOrder, function (err, response) {
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

    pickOrderService.delete(id, function (err, response) {
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