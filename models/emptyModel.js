const mongoose = require("mongoose");
let { db_link } =  require("../secrets"); 
//  let { db_link } =   process.env 


mongoose.connect(db_link, {

}).then(function (db) {
    // console.log(db);
    console.log("connected to db")
}).catch(function (err) {
    console.log("err", err);
});

const emptySchema = new mongoose.Schema({
    user:{
        type:String,
    },
    seat: {
        type: Number,
    }
})

const emptyModel = mongoose.model("emptyModel", emptySchema);
module.exports = emptyModel; 