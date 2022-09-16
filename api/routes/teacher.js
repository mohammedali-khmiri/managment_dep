const router = require("express").Router();
const Teacher = require("../models/Teacher");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE TEACHER
router.post("/addTeacher", verifyTokenAndAdmin, async (req, res) => {
	const newTeacher = new Teacher(req.body);
	try {
		const savedTeacher = await newTeacher.save();
		res.status(200).json(savedTeacher);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE Teacher
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedTeacher = await Teacher.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedTeacher);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//delete Teacher
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Teacher.findByIdAndDelete(req.params.id);
		res.status(200).json("Teacher has been deleted");
	} catch (err) {
		return res.status(500).json(err);
	}
});

//get one Teacher
router.get("/:id", async (req, res) => {
	try {
		const teacher = await Teacher.findById(req.params.id);
		// const { nCin, updatedAt, ...others } = student._doc;
		res.status(200).json(teacher);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get all Teacher
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qGrade = req.query.grade;
	try {
		let teachers;
		if (qNew) {
			teachers = await Teacher.find().sort({ createdAt: -1 }).limit(5);
		} else if (qGrade) {
			teachers = await Teacher.find({
				grade: {
					$in: [qGrade],
				},
			});
		} else {
			teachers = await Teacher.find();
		}
		res.status(200).json(teachers);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
