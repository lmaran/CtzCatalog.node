'use strict';

var techSpecService = require('./techSpecsService');


exports.getAll = function (req, res) {
    techSpecService.getAll(function (err, techSpec) {
        if (err) {
            res.send(400, err);
        }  else {          
            res.send(techSpec);
        }
    });
};


exports.getById = function (req, res) {
    var id = req.params.id;

    techSpecService.getById(id, function (err, techSpec) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(techSpec);
        }
    });
};


exports.create = function(req, res){
    var techSpec = req.body;

    techSpecService.create(techSpec, function (err, response) {
        if (err) {
            res.send(400, err);
        } else {
            res.send(201, response.ops[0]);
        }
    });
};


exports.update = function(req, res){
    var techSpec = req.body;
    var id = req.params.id;

    techSpecService.update(techSpec, function (err, response) {
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

    techSpecService.delete(id, function (err, response) {
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