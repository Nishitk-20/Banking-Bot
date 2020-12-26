const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/allBen/:userId",(req,res)=>{
    const uid = req.params.userId;
    db.Beneficiary.findAll({where : {userId : uid }}).then(ben=>{res.send(ben)});
});

router.get("/getben",(req,res)=>{
    db.Beneficiary.findOne({where : {name : req.body.name}}).then(ben=>{res.send(ben)});
});

router.post("/newBen/:userId",(req,res)=>{
    const uid = req.params.userId;
    // const uid = req.user;
    db.Beneficiary.create({
        name : req.body.name,
        AccountNumber  :req.body.AccountNumber,
        type : req.body.type,
        Ifsc : req.body.Ifsc,
        userId : uid
    }).then(response => res.send(response));
}); 

module.exports = router;