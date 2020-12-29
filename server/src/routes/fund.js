const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/:transId",(req,res)=>{
    db.FundTransfer.findOne({
        where: {
          id: req.params.transId
        }
      }).then(response => {
        res.send(response)
      });
})

router.post("/create/:userId",(req,res) =>{
    console.log(req.body)
    db.FundTransfer.create(
    { 
        benName: req.body.benName ,
        balance: req.body.balance - req.body.amount,
        amount: req.body.amount,
        type: req.body.type
    } 
    ).then(response => {
        console.log(response)
        db.MiniStatement.create({
            userId : req.params.userId,
            timestamp : Date.now(),
            recTrans : response.id    
        }).then(result => res.send(result))
    });
})

module.exports = router;