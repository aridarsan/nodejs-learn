const mongoose = require("mongoose");

const TodoShcema = new mongoose.Schema({
	title : String,
	completed: Boolean
});

module.exports = mongoose.model("todos", TodoShcema)