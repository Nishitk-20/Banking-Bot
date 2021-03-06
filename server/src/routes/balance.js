const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/:userId",(req,res)=>{
    db.Balance.findOne({
        where: {
          userId: req.params.userId
        }
      }).then(response => {
        res.send(response)
      });
});

router.post("/update/:userId",(req,res) =>{
    console.log(req.body)
    db.Balance.update({ curBal: req.body.bal }, {
        where: {
          userId: req.params.userId
        }
      }).then(response => res.send(response));

})

module.exports = router;