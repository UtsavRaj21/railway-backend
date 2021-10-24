const mongoose = require("mongoose");
 let { db_link } =  require("../secrets"); 
//  let { db_link } =   process.env 


mongoose.connect(db_link, {useNewUrlParser: true, useUnifiedTopology: true}).then(function (db) {
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