const express = require('express');
let emptyRouter = express.Router();

let emptyModel = require("../models/emptyModel")
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });
  

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