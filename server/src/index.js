// require("dotenv").config()s

const http = require("http")
// const mongoose = require("mongoose")

const app = require("./server")

const port = process.env.PORT || 4000
app.set("port", port)

const server = http.createServer(app)

// start a server
server.listen(port, () => {
	try {
		console.log(`🚀 Server ready at http://localhost:${port}`)
	} catch (error) {
		console.error(`${error} Error starting server`)
	}
})
