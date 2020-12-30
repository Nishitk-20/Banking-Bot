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

router.post("/create/:userId",async(req,res) =>{
    console.log(req.body)
    try{
      let MiniStatement = {};
      const fund  = await db.FundTransfer.create(
        { 
            benName: req.body.benName ,
            balance: req.body.balance - req.body.amount,
            amount: req.body.amount,
            type: req.body.type
        } 
        )
        if(fund) {
         MiniStatement =await  db.MiniStatement.create({
            userId : req.params.userId,
            timestamp : Date.now(),
            recTrans : fund.id    
        })
        res.send(MiniStatement)
        } 
    }catch(err){
      res.json({text : "Benficiary Not Found"});
    }
})

module.exports = router;