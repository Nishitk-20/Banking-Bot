const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.post('/login', function(req, res) {
    var name = req.body.username;
    var account = req.body.AccountNumber;
    if (name && account) {
        db.User.findOne({where : {username:name, AccountNumber : account}})
        .then(response => {
            // db.User.update({auth:true},{where : {id}})
            // res.send(response.id);
            response.update({auth:true}).then(result => {res.send(result)});
        })
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

module.exports = router;