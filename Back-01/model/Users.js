var jwt = require('jsonwebtoken');
var db=require("../routes/fileUtil")
function generateToken(users){
    var token=jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: users
      }, 'helpme');
      return token;    
    }
  const infos = db.loadUser();
  infos.forEach(info => {
    info.token=generateToken(infos)
  });
  const users=infos;

    module.exports={
        users:users
    }