const express = require("express");
const db =require("../models");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Routes
const userRoutes = require("./routes/user");
const BalanceRoutes  = require("./routes/balance");
const benRoutes = require("./routes/beneficiary");
const fundRoutes = require("./routes/fund")
app.use("/api/user",userRoutes);
app.use("/api/ben",benRoutes);	
app.use("/api/balance",BalanceRoutes);
app.use("/api/fund/",fundRoutes);

db.sequelize.sync().then(()=>{
	app.listen(PORT,()=>{
		console.log(`Listening on Port ${PORT}`);
	})
})


