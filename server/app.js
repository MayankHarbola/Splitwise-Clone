const express = require('express');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./utils/cors'));

app.use("/",userRoute);
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log("Error in sever Staring ",err);
    }else{
        console.log("Server started .....")
    }
})