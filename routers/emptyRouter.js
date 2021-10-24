const express = require('express');
let emptyRouter = express.Router();

let emptyModel = require("../models/emptyModel")
let bookingModel = require("../models/bookingModel")


const getSeats = async function(req,res){
    try{
        let user = await emptyModel.findOne({"user":"Utsav"})
        res.status(200).json({
            user:user.seat
        })
    }catch(err){
        console.log(err.message);
        res.status(500).json("error")
    }
}

const setSeat = async function(req,res){
    try {
        let user = await emptyModel.findOne({"user":"Utsav"})
        user.seat = 80;
        await user.save();
        let arrUser = await bookingModel.findOne({"user":"Utsav"})
        arrUser.seatOccupied = [];
        await arrUser.save();
        res.status(200).json({
            user: user.seat,
            seatOccupied:arrUser.seatOccupied
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