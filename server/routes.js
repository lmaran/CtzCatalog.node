'use strict';

var path = require('path'); 

module.exports = function (app) {
    
    // API routes
    // ====================================================
    
    var customers = require('./api/customers/customersController');
    app.get('/api/customers/', customers.getAll);
    app.get('/api/customers/:id', customers.getById);
    app.post('/api/customers/', customers.create);
    app.put('/api/customers/', customers.update);
    // //app.patch('/api/customers/:id', controller.update);
    app.delete('/api/customers/:id', customers.delete);

    var products = require('./api/products/productsController');
    app.get('/api/products/', products.getAll);
    app.get('/api/products/:id', products.getById);
    app.post('/api/products/', products.create);
    app.put('/api/products/', products.update);
    app.delete('/api/products/:id', products.delete);  

    var techSpecs = require('./api/techSpecs/techSpecsController');
    app.get('/api/techSpecs/', techSpecs.getAll);
    app.get('/api/techSpecs/:id', techSpecs.getById);
    app.post('/api/techSpecs/', techSpecs.create);
    app.put('/api/techSpecs/', techSpecs.update);
    app.delete('/api/techSpecs/:id', techSpecs.delete);
    
    var pickOrders = require('./api/pickOrders/pickOrdersController');
    app.get('/api/pickOrders/', pickOrders.getAll);
    app.get('/api/pickOrders/:id', pickOrders.getById);
    app.post('/api/pickOrders/', pickOrders.create);
    app.put('/api/pickOrders/', pickOrders.update);
    app.delete('/api/pickOrders/:id', pickOrders.delete); 

    // front-end routes
    // ====================================================


    // All other routes should redirect to the index.html
    app.route('/*')
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};
