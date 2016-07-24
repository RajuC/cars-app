/**
 * Created by raju on 7/10/16.
 */
'use strict';

module.exports = function (app) {
    var controller =  require('../controllers/core.server.controller.js');
    app
        .route('/api/car')
        .get(controller.getAllCars)
        .post(controller.addCar);

    app
        .route('/api/car/:id')
        .put(controller.updateCarById)
        .get(controller.getCarById)
        .delete(controller.deleteCarById);
    
    app.
        param('id',controller.validateCarId);
}

