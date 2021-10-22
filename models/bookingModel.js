const mongoose = require("mongoose");
let { db_link } =  process.env         //||require("../secrets");

mongoose.connect(db_link, {

}).then(function (db) {
    // console.log(db);
    console.log("connected to db")
}).catch(function (err) {
    console.log("err", err);
});

const bookingSchema = new mongoose.Schema({
    user:{
        type : String
    },
    seatOccupied: {
        type: [Number]
    }
})

const bookingModel = mongoose.model("bookingModel", bookingSchema);
module.exports = bookingModel; 