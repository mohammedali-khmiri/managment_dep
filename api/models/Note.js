const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
	{
		num: {
			type: String,
		},
		fnameStud: {
			type: String,
			required: true,
		},
		lnameStud: {
			type: String,
			required: true,
		},
		dateSou: {
			type: Date,
			required: true,
		},
		typeStage: {
			type: String,
			required: true,
		},
		note: {
			type: String,
			required: true,
		},
		examiner: {
			type: String,
		},
		President: {
			type: String,
		},
		Supervisor: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
