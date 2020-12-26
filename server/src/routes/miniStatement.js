const express  = require("express");
const router = express.Router();
const db = require("./../../models");


router.get("/:userId",(req,res)=>{
    db.MiniStatement.findAll({
        where: {
          userId: req.params.userId
        }
      }).then(response => {res.send(response)});
})

module.exports = router;