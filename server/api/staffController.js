'use strict';

var data = require('../data');


// Get list of staff members
exports.index = function (req, res) {

    data.getStaffMembers(function (err, data) {
        
        if (err) {
            res.send(400, err);
        } else {          
            res.set('Content-Type', 'application/json');
            res.send(data);
        }
    });
};

function handleError(res, err) {
    return res.send(500, err);
}