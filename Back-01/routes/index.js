var express = require('express');
var itemModel=require("../model/Items").itemModel;
var router = express.Router();



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
