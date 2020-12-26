const express  = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/:userId",(req,res)=>{
    db.Balance.findAll({
        where: {
          userId: req.params.userId
        }
      }).then(response => res.send(response));
});

router.put("/update/:userId",(req,res) =>{
    db.Balance.update({ curBal: req.body.bal,
                        timestamp: Date.now() }, {
        where: {
          userId: req.params.userId
        }
      }).then(response => res.send(response));

})

module.exports = router;