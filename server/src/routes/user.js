const express  = require("express");
const router = express.Router();
const db = require("./../../../models");

router.get("/allUser",(req,res)=>{
    db.User.findAll().then(users=>{res.send(users)});
});

router.post("/newUser",(req,res)=>{
    db.User.create({
        username : req.body.username,
        AccountNumber  :req.body.AccountNumber
    }).then(response => res.send(response))
}); 

module.exports = router;