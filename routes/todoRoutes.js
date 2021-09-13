const router = require("express").Router();
const Todo = require("../models/Todo")


//route get
router.get("/", (req, res)=> {
	Todo.find((err, result)=>{
		if (err) throw new Error(err);
		res.json(result)
	})
})

//route post
router.post("/", (req, res) => {
	Todo.create(req.body, (err, result) => {
		if(err) throw new Error(err);
		res.json(result)
	})
})

//route put
router.put(":id", (req, res)=>{
	Todo.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true}, (err, result)=>{
		if (err) throw new Error(err);
		res.json(result)
	})
})

//route delete
router.delete("/:id", (req, res)=> {
	Todo.findOneAndRemove({ _id : req.params.id}, (err, result)=>{
		if(err) throw new Error(err);
		res.end()
	})
})

module.exports = router