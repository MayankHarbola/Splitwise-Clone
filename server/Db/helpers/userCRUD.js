const userModel = require('../models/UserSchema');
const jwt = require('jsonwebtoken');

const userOperation = {
AddUser(userObject,response){
    userModel.create(userObject,(err,doc)=>{
       if(err){
           console.log("Error is ",err);
           response.json({Status: "F"});
       }else{
           response.json({Status: "S", record: doc});
       }
    })
},

login(userObject,response){
    userModel.findOne(userObject,(err,doc)=>{
        if(err){
            console.log(err);
        }else{
            if(doc){
                jwt.sign({doc}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                response.json({Status: "S",msg: "welcome bro " + doc.username,token: token});
                });
            }else{
                response.json({Status: "F",msg: "Invalid username or password"});
            }
        }
    })
},

async AddFriend(userObject,response){
  var check = await this.Find(userObject.username);
  console.log(check);
  if(check){
      userModel.findOneAndUpdate({username: userObject.defaultUser},
        {"$push": {"friends" : userObject.username,"expensis":{"name": userObject.username,"data": {}}}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }else{
                //send mail to check.email => that userObject.default user has added you as his friend;
             
                response.json({Status: "S",msg: "Added succesfully",doc: doc});
            }
        }
        )
  }else{
      console.log("status Fail")
      response.json({Status:"F",msg: "your friend is not registerd yet"});
  }
},
Find(username){
    return userModel.findOne({username},function(err,doc){
        if(err){
           console.log(err); 
        //   return false;
        }else{
            if(doc){
                console.log(doc);
                // return true;
            }else{
            console.log("not Found");
            //  return false;
            }
        }
    })

},

AddExp(userObject,response){
   
 userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{'$set' : {"expensis.$.data.desc": userObject.inp.description,"expensis.$.data.date": userObject.inp.date},"$inc":{"expensis.$.data.ammount": userObject.inp.amount}},{"new": true},
 (err,doc)=>{
     if(err){
         console.log(err);
     }else{
         //send mail to check.email => that userObject.default user has added you as his friend;
        console.log(doc);
         response.json({Status: "S",msg: "Added succesfully",doc: doc});
     }
 })
},

settle(userObject,response){
     userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{"$inc":{"expensis.$.data.ammount": userObject.val}},{"new": true},
    (err,doc)=>{
        if(err){
            console.log(err);
        }else{
            //send mail to check.email => that userObject.default user has added you as his friend;
           console.log(doc);
            response.json({Status: "S",msg: "Added succesfully",doc: doc});
        }
    })
}

}


module.exports = userOperation;