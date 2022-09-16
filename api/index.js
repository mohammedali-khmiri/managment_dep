const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const newRoute = require("./routes/news");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const noteRoute = require("./routes/notes");
const cors = require("cors");

dotenv.config();

//mongoDB connect
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB connection Successful"))
	.catch((err) => {
		console.log(err);
	});

//middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);
app.use("/api/notes", noteRoute);
app.use("/api/news", newRoute);

const port = process.env.PORT || 4500;
app.listen(port, () => {
	console.log(`Backend server is running ${port}!`);
});
