var express = require('express');
var itemModel=require("../model/Items").itemModel;
var router = express.Router();
var {isAuthenticated}=require('../routes/authentication');

router.get("/items",  async function(req,res,next){
  var items = await itemModel.find().sort({updatedAt:'desc'});
  res.send(items);
});

router.post("/items",  function(req,res,next){
  var item=new itemModel(req.body);
  item.save().then(()=>{
    res.send({message:'Saved Successfully'}).status(200)
  }).catch((e)=>{
    res.status(500).send({Error:e});
  })
});


router.put("/items",   function(req,res,next){
  req.body.updatedAt=Date.now();
 itemModel.updateOne({_id:req.body._id}, {...req.body},(err,response)=>{
   if(!err){
    res.send({message:'Updated Successfully'}).status(200);
   }else{
     res.status(500).send(err);
   }
 })
});

router.delete("/items", function(req,res,next){
  itemModel.deleteOne({_id:req.body.id}, (err,response)=>{
    if(!err){
      res.send({message:response});
    } else {
      res.status(500).send(err);
    }
  });
});

router.post("/items/search", async function(req,res,next){
  var items = await itemModel.find({$text:{$search:req.body.term}}).sort({updatedAt:'desc'});
  res.send(items);
});

module.exports = router;
