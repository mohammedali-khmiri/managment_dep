const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,

			max: 50,
		},
		password: {
			type: String,
			max: 50,
		},
		address: {
			type: String,
		},
		phone: {
			type: Number,
		},
		nCin: {
			type: Number,
		},
		nInscription: {
			type: Number,
		},
		class: {
			type: Array,
		},
		img: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
