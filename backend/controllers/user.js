const User = require('../models/index');
const {encrypt} = require('../utils/index');
function controller () {
  this.register = async (req, res) => {
     let {username, password} = req.body;
      if(!!username && !!password){
         try{
            password = encrypt(password);
            let result = await User.create({username, password});
            res.status(200).json({
                status : true,
                message : 'User is registered'
            })             
         }
         catch(err){
            res.json({
                status : false,
                message : err.message      
            })
         }
      }
      else{
        res.json({
            status : false,
            message : "Input Error!"
        })
      }
  }
  this.login = async (req, res) => {
    let {username, password} = req.body;
    if(!!username && !!password){
       try{
          let encode = encrypt(password);
          let result = await User.findOne({username, password : encode});
          if(!!result){
            res.status(200).json({
                status : true,
                message : `${result.username} is logged in`,
            })
          }
          else{
            res.json({
                status : false,
                message : `wrong creditenials`
            })
          }
          
       }
       catch(err){
          res.status(400).json({
              status : false,
              message : err.message      
          })
       }
    }
    else{
     res.json({
         status : false,
         message : "Input Error!"
     })
    }
  }
}

module.exports = new controller();