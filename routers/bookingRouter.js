const express = require('express');
let bookingRouter = express.Router();

let emptyModel = require("../models/emptyModel")
let bookingModel = require("../models/bookingModel")

const addSeat = async function(req,res){
    try {
        let number = req.body.arr;
        let user = await bookingModel.findOne({"user":"Utsav"})
        user.seatOccupied = user.seatOccupied.concat(number) ;
        await user.save();
        res.status(200).json({
            element: number,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error",
           
        });
    }
}

const setSeat = async function(req,res){
    try {
        let number = req.body.number;
        let user = await emptyModel.findOne({"user":"Utsav"})
        user.seat = user.seat - number;
        await user.save();
        res.status(200).json({
            element: number,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error",
           
        });
    }
}

const add = async function(req,res){
    try {
        let element = await bookingModel.create({
            "user":"Utsav",
            "seatOccupied":[]
       });
        res.status(200).json({
            element: element,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error",
           
        });
    }
}

const get = async function(req,res){
    try{
        let user = await bookingModel.findOne({"user":"Utsav"})
        res.status(200).json({
            "message": user.seatOccupied
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

bookingRouter
    .route('/')
    .post(add)

bookingRouter
    .route('/get')
    .get(get)

bookingRouter
    .route('/set')
    .post(setSeat)

bookingRouter
    .route('/add')
    .post(addSeat)

module.exports = bookingRouter;