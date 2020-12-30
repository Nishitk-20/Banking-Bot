const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.post('/login', async(req, res) => {
    try{ 
        var name = req.body.username;
        var account = req.body.AccountNumber;
        if (name && account) {
            const user = await db.User.findOne({where : {username:name, AccountNumber : account}})
            if(user){
                res.send(user)
            }else{
                res.json({text : "invalid Credentials"});
            }
        }
    }catch(err){
        console.log(err)
    }
  
});

module.exports = router;