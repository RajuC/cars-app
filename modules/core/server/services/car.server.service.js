/**
 * Created by raju on 7/24/16.
 */

'use strict'

var mongoose = require('mongoose'),
    Car = mongoose.model('Car');

//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

module.exports.saveCar = function (CarToSave,callback) {
    var car = new Car(CarToSave);  // creates a new object whch is of model
    car.save(function (err) {
        callback(err,car);
    })
}


module.exports.getAllCars = function (callback){
    // get all the cars
    Car.find({}, function(err,cars) {
        callback(err,cars);
    });
}


module.exports.getCarById = function (id,callback) {
    Car.findById(id, function(err, car) {
        callback(err,car);
    });
}


module.exports.updateCarById = function (id, carToUpdate,callback) {
    console.log(carToUpdate);
    Car.findByIdAndUpdate(id,carToUpdate, function(err, car) {
        callback(err,{"status":"successfully updated " + id});
    });
}


module.exports.deleteCarById = function (id,callback) {
    Car.findByIdAndRemove(id, function(err) {
        callback(err,{"status":"successfully deleted " + id});
    });

}
