const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
const PORT = 3030;

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}

app.use(express.json());
app.use(cors)

mongoose.connect("mongodb://localhost/todolist", connectionOptions )
	.then(()=> console.log("Connected succesfully"))
	.catch((err)=> console.log(err))

app.use("/todo", todoRoutes)

app.listen(PORT, () => {
	console.log("The server is listening on port " + PORT)
})