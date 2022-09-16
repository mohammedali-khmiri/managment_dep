const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema(
	{
	
		title: {
			type: String,
		},
		desc: {
			type: String,
			max: 500,
		},
		img: {
			type: String,
		},
		likes: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("New", NewSchema);
