const router = require("express").Router();
const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE STUDENT
router.post("/addStudent", verifyTokenAndAdmin, async (req, res) => {
	const newStudent = new Student(req.body);
	try {
		const savedStudent = await newStudent.save();
		res.status(200).json(savedStudent);
	} catch (err) {
		res.status(500).json(err);
	}
});



//UPDATE STUDENT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedStudent = await Student.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedStudent);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//delete student
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Student.findByIdAndDelete(req.params.id);
		res.status(200).json("Student has been deleted");
	} catch (err) {
		return res.status(500).json(err);
	}
});

//get one student
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const student = await Student.findById(req.params.id);
		// const { nCin, updatedAt, ...others } = student._doc;
		res.status(200).json(student);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get all student
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qClass = req.query.class;
	try {
		let students;
		if (qNew) {
			students = await Student.find().sort({ createdAt: -1 }).limit(5);
		} else if (qClass) {
			students = await Student.find({
				class: {
					$in: [qClass],
				},
			});
		} else {
			students = await Student.find();
		}
		res.status(200).json(students);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
