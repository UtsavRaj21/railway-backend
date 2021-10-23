const express = require('express');
var bodyParser = require('body-parser')


//server creation 
const app = express();
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())
const cors = require("cors");


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });

  app.use(cors());

let port = '8000'
app.listen(process.env.PORT||port,function(){
    console.log(`server is Listening on port ${port}`)
});

app.get('/' , (req,res)=>{
    console.log('<h1>hi hlo</h1>')
    res.send('<h1>hello</h1>');
})

const bookingRouter = require('./routers/bookingRouter');
const emptyRouter = require('./routers/emptyRouter');

 app.use('/api/book', bookingRouter);
app.use('/api/empty', emptyRouter);
