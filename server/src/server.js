const express = require("express");
const db =require("../models");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(cors())

// Routes
const userRoutes = require("./routes/user");
const BalanceRoutes  = require("./routes/balance");
const benRoutes = require("./routes/beneficiary");
const fundRoutes = require("./routes/fund");
const statementRoutes = require("./routes/miniStatement");
const loginRoutes = require("./routes/login");

app.use("/api",loginRoutes);
app.use("/api/user",userRoutes);
app.use("/api/ben",benRoutes);	
app.use("/api/balance",BalanceRoutes);
app.use("/api/fund/",fundRoutes);
app.use("/api/statement/",statementRoutes);

db.sequelize.sync().then(()=>{
	app.listen(PORT,()=>{
		console.log(`Listening on Port ${PORT}`);
	})
})


