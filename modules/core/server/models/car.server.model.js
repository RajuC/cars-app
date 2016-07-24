/**
 * Created by raju on 7/17/16.
 */

'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function (property) {
    return property.length;

}
var validateYearStrategy = function (property) {
    return validator.isLength(property, {min:4, max: 4});
}

var CarSchema = new Schema({
    title: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the Title, cannot be empty']
    },
    brand: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the brand, cannot be empty']
    },
    model : {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please enter the valid model,, cannot be empty']
    },
    year: {
        type : String,
        default: '',
        trim:true,
        validate: [validateYearStrategy,'Please fill the year, cannot be empty']
    },
    fuel: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the fuel, cannot be empty']
    },
    description : {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please enter the valid description, cannot be empty ']
    },
    images : {
        type : Array,
        default: '',
        trim:true,
        properties: {
            image_id: {type: String},
            image_link: {type: String}
        },
        validate: [validateFieldStrategy,'Please enter the valid Object, cannot be empty']
    }
/*{
    images: [
        { id: 1, link: "davidwalsh" },
        { id: 2, link: "russianprince" }
    ]
}
*/
});

mongoose.model('Car',CarSchema);