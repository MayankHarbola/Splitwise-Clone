module.exports = function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); 
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Headers","*")
     next();
    }