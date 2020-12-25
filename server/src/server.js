const express = require("express");
const db =require("./../../models");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

db.sequelize.sync().then(()=>{
	app.listen(PORT,()=>{
		console.log(`Listening on Port ${PORT}`);
	})
})


