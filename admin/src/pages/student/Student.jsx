import { Link, useHistory, useLocation } from "react-router-dom";
import "./student.css";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateStudent } from "../../redux/apiCalls";

export default function Student() {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const studentId = location.pathname.split("/")[2];

	const student = useSelector((state) =>
		state.student.students.find((student) => student._id === studentId)
	);

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		const fileName = new Date().getTime() + file.name;
		const storage = getStorage(app);
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
				}
			},
			(error) => {
				// Handle unsuccessful uploads
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					const student = { ...inputs, img: downloadURL };
					const id = studentId;
					updateStudent(id, student, dispatch);
					history.goBack();
				});
			}
		);
	};
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Student</h1>
				<Link to="/newstudent">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<img src={student.img} alt="" className="productInfoImg" />
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<span className="productName">
							{student.firstName} {student.lastName}
						</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">{student._id}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">N°Inscription:</span>
							<span className="productInfoValue">{student.nInscription}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">N°CIN:</span>
							<span className="productInfoValue">{student.nCin}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">email:</span>
							<span className="productInfoValue">{student.email}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">adress:</span>
							<span className="productInfoValue">{student.address}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">tel:</span>
							<span className="productInfoValue">{student.phone}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<input
							name="id"
							type="text"
							onChange={handleChange}
							value={student._id}
							hidden
						/>
						<label>Nom d'Etudiant</label>
						<input
							name="firstName"
							type="text"
							placeholder={student.firstName}
							onChange={handleChange}
						/>
						<label>Prenom d'Etudiant</label>
						<input
							name="lastName"
							type="text"
							placeholder={student.lastName}
							onChange={handleChange}
						/>
						<label>Email</label>
						<input
							name="email"
							type="text"
							placeholder={student.email}
							onChange={handleChange}
						/>
						<label>Address</label>
						<input
							name="address"
							type="text"
							placeholder={student.address}
							onChange={handleChange}
						/>
						<label>Telephone</label>
						<input
							name="phone"
							type="number"
							placeholder={student.phone}
							onChange={handleChange}
						/>
						<label>Classe</label>
						<select name="class" id="class" onChange={handleChange}>
							<option value="" disabled selected>
								{student.class}
							</option>
							<option value="dsi">DSI</option>
							<option value="rsi">RSI</option>
							<option value="sem">SEM</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img src={student.img} alt="" className="productUploadImg" />
							<label for="file">
								<Publish style={{ cursor: "pointer" }} />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: "none" }}
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</div>
						<button onClick={handleClick} className="productButton">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
