const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			require: true,
			unique: true,
		},
		lastName: {
			type: String,
			require: true,
			unique: true,
		},
		img: {
			type: String,
		},
		email: {
			type: String,
			require: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		address: {
			type: String,
			require: true,
		},
		phone: {
			type: Number,
			require: true,
		},
		codeEns: {
			type: Number,
			require: true,
		},
		grade: {
			type: Array,
			require: true,
		},
		specialty: {
			type: Array,
			require: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
