const express = require('express');
let emptyRouter = express.Router();

let emptyModel = require("../models/emptyModel")

const getSeats = async function(req,res){
    try{
        let user = await emptyModel.findOne({"user":"Utsav"})
        res.status(200).json(user.seat)
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

const setSeat = async function(req,res){
    try {
        console.log(req.body)
        console.log("hello")
        let element = await emptyModel.create({
            "user":"Utsav",
            "seat":80
       });
        res.status(200).json({
            element: element,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Server error",
           
        });
    }
}

emptyRouter
    .route('/')
    .post(setSeat)
    .get(getSeats);

module.exports = emptyRouter;