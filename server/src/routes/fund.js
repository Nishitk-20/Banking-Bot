const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.post("/create",(req,res) =>{
    db.FundTransfer.create(
    { 
        benName: req.body.benName ,
        balance: req.body.balance - req.body.amount,
        amount: req.body.amount,
        type: req.body.type
    } 
    ).then(response => {res.send(response)});
})

module.exports = router;