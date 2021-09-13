const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const PORT = 3030;

app.use("/todo", todoRoutes)

app.listen(PORT, () => {
	console.log("The server is listening on port " + PORT)
})