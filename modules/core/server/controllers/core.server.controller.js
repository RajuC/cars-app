/**
 * Created by raju on 7/10/16.
 */

'use strict';

var carService =  require('../services/car.server.service.js');


// add a car
module.exports.addCar = function (req,res) {
    var car = req.body;
    if (!car) {
        res.status(400);
        res.end("error undefined in posting the car..");
    }
    carService.saveCar(car, function (err, car) {
        if (err) {
            console.log("server controller :save Car error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in saving car details"}]);
        } else {
            res.status(200);
            res.json(car);
        }

    })

    }

// get all cars
module.exports.getAllCars = function(req,res){
    res.status(200);
    carService.getAllCars(function (err,cars) {
        if (err) {
            console.log("server controller :Error in getting all car details: " );
            console.log(err);
            res
                .status(400)
                .json([{message:"error in getting all cars details"}]);
        } else {
            res.status(200);
            res.json(cars);
        }

    })
}


//get car by id
module.exports.getCarById = function (req,res) {
    var id = req.params.id;
    carService.getCarById(id, function (err, car) {
        if (err) {
            console.log("server controller :get car by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in getting car by id"}]);
        } else {
            res.status(200);
            res.json(car);
        }
    })
}



//To update car
module.exports.updateCarById = function(req,res){
    var carToUpdate = req.body;
    var id = req.metadata.id;
    carService.updateCarById(id, carToUpdate, function (err, car) {
        if (err) {
            console.log("server controller :update car by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in update car by id"}]);
        } else {
            res.status(200);
            res.json(car);
        }

    })
}



//To delete car by id
module.exports.deleteCarById = function(req,res){
    var id = req.metadata.id;
    carService.deleteCarById(id, function (err, car) {
        if (err) {
            console.log("server controller :delete car by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in delete car by id"}]);
        } else {
            res.status(200);
            res.json(car);
        }

    })

}

// validate the car id and forwarding it to required request (getcarbyid and update)
module.exports.validateCarId = function(req,res,next,id){
    var metadata =req.metadata = {};
    metadata.id = id;
    carService.getCarById(id,function (err,car) {
        if (err) {
            console.log("server validate controller :get car by id error : " );
            console.log(err);
            res
                .status(400)
                .json([{message:"validate error in getting car by id"}]);
        }
    });
    next();
}












