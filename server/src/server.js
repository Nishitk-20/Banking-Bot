// src/server.js
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const { ValidationError } = require("express-validation")
const passport = require("passport")

// local imports
// const {
// } = require("./routes")

// const { jwtAuth } = require("./middleware/passport")


const app = express()

// set up cors to allow us to accept requests from our client
app.use(cors())
// parsing middleware, extended false does not allow nested payloads.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// log the http requests to the console
app.use(require("morgan")("dev"))
// setup helmet for http endpoints security
app.use(helmet())

// initialize passport
app.use(passport.initialize())

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("/", (req, res) =>
	res.status(200).send({
		message: "Welcome to banking bot server.",
	})
)

// app.use("/sample", sampleRoutes)

// record validation errors
// app.use((error, req, res, next) => {
// 	console.error(error)
// 	if (error instanceof ValidationError) {
// 		return res.status(error.statusCode).json({
// 			success: false,
// 			message: error.message,
// 			data: error.details.body,
// 		})
// 	}
// 	return res.status(500).json({
// 		success: false,
// 		message: error.message,
// 		data: error,
// 	})
// })

module.exports = app
