const router = require("express").Router();
const User = require("../models/User");
const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

//REGISTER
router.post("/register", async (req, res) => {
	try {
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});
		//save user and respond
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN Student
router.post("/studentLogin", async (req, res) => {
	try {
		//verify if user exist
		const student = await Student.findOne({ email: req.body.email });
		!student && res.status(404).json("student not found");

		//verify if pass correct
		const validPassword = await bcrypt.compare(
			req.body.password,
			student.password
		);
		!validPassword && res.status(400).json("wrong password");

		const accessToken = jwt.sign(
			{
				id: student._id,
				isAdmin: student.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		const { password, ...others } = student._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

//REGISTER Student
router.post("/studentRegister", async (req, res) => {
	try {
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user
		const newStudent = await new Student({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			nCin: req.body.nCin,
			nInscription: req.body.nInscription,
			phone: req.body.phone,
			address: req.body.address,
			class: req.body.class,
			email: req.body.email,
			password: hashedPassword,
		});
		//save user and respond
		const student = await newStudent.save();
		res.status(200).json(student);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN Teacher
router.post("/teacherLogin", async (req, res) => {
	try {
		//verify if user exist
		const teacher = await Teacher.findOne({ email: req.body.email });
		!teacher && res.status(404).json("teacher not found");

		//verify if pass correct
		const validPassword = await bcrypt.compare(
			req.body.password,
			teacher.password
		);
		!validPassword && res.status(400).json("wrong password");

		const accessToken = jwt.sign(
			{
				id: teacher._id,
				isAdmin: teacher.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		const { password, ...others } = teacher._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

//REGISTER Teacher
router.post("/teacherRegister", async (req, res) => {
	try {
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user
		const newTeacher = await new Teacher({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			phone: req.body.phone,
			address: req.body.address,
			codeEns: req.body.codeEns,
			grade: req.body.grade,
			specialty: req.body.specialty,
			password: hashedPassword,
		});
		//save user and respond
		const teacher = await newTeacher.save();
		res.status(200).json(teacher);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	try {
		//verify if user exist
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(404).json("user not found");

		//verify if pass correct
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		!validPassword && res.status(400).json("wrong password");

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		const { password, ...others } = user._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

module.exports = router;
