const router = require("express").Router();
const Note = require("../models/Note");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");

//GET NOTE STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		const data = await Note.aggregate([
			{ $match: { dateSou: { $gte: lastYear } } },
			{
				$project: {
					month: { $month: "$dateSou" },
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//CREATE NOTE by admin only
router.post("/addNote", verifyTokenAndAdmin, async (req, res) => {
	const newNote = new Note(req.body);
	try {
		const savedNote = await newNote.save();
		res.status(200).json(savedNote);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE Note
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedNote = await Note.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedNote);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//delete Note
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Note.findByIdAndDelete(req.params.id);
		res.status(200).json("Note has been deleted");
	} catch (err) {
		return res.status(500).json(err);
	}
});

//get one Note
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
	try {
		const note = await Note.find({ userId: req.params.userId });
		// const { nCin, updatedAt, ...others } = student._doc;
		res.status(200).json(note);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get all note / order by newest,dateSou, typeStage
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qDateSou = req.query.dateSou;
	const qTypeStage = req.query.typeStage;
	try {
		let notes;
		if (qNew) {
			notes = await Note.find().sort({ createdAt: -1 }).limit(5);
		} else if (qTypeStage) {
			notes = await Note.find({
				typeStage: qTypeStage,
			});
		} else if (qDateSou) {
			notes = await Note.find({
				dateSou: qDateSou,
			});
		} else {
			notes = await Note.find();
		}
		res.status(200).json(notes);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
