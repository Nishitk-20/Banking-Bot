const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/allUser",(req,res)=>{
    db.User.findAll().then(users=>{res.send(users)});
});

// router.get("/allBen/:userId",(req,res)=>{
//     const uid = req.params.userId;
//     db.Beneficiary.findAll({where : {userId : uid }}).then(ben=>{res.send(ben)});
// });

router.post("/newUser",(req,res)=>{
    db.User.create({
        username : req.body.username,
        AccountNumber  :req.body.AccountNumber
    }).then(user => {
        console.log(user.id)
        db.Balance.create({
            curBal : 5000,
            userId : user.id,
            timestamp : Date.now()
        }).then(balance => res.send(balance))
    })
}); 

module.exports = router;