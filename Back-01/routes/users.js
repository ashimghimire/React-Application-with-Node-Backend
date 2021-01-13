var express = require('express');
fs = require('fs');
var md5=require('md5');
var router = express.Router();
var user=require('../model/Users').users;
var db=require("./fileUtil");
var {isAuthenticated}=require("../routes/authentication");
router.post('/login', function(req, res, next) {
  user.forEach(u => {   
    console.log(u);
    if(req.body.email===u.email && u.password===req.body.password){
      res.status(200).send({email:u.email, 
                            token:u.token, 
                            cuisine:u.cuisinePreference});
    }
  });
  res.status(401).send();
});

router.post('/register', function(req, res, next) {  
  const message=db.addUser(req.body.values);
  res.status(200).send({message});
});

router.get("/cuisine", isAuthenticated, function(req,res,next){
  const cuisine=db.loadCuisine(); 
  res.send(cuisine);
});

module.exports = router;
