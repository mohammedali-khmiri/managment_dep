import { Link, useHistory, useLocation } from "react-router-dom";
import "./teacher.css";
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
import { updateTeacher } from "../../redux/apiCalls";

export default function Teacher() {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const teacherId = location.pathname.split("/")[2];

	const teacher = useSelector((state) =>
		state.teacher.teachers.find((teacher) => teacher._id === teacherId)
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
					const teacher = { ...inputs, img: downloadURL };
					const id = teacherId;
					updateTeacher(id, teacher, dispatch);
					history.goBack();
				});
			}
		);
	};
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Teacher</h1>
				<Link to="/newteacher">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<img src={teacher.img} alt="" className="productInfoImg" />
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<span className="productName">
							{teacher.firstName} {teacher.lastName}
						</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">{teacher._id}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">specialité:</span>
							<span className="productInfoValue">{teacher.specialty}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">grade:</span>
							<span className="productInfoValue">{teacher.grade}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">email:</span>
							<span className="productInfoValue">{teacher.email}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">adress:</span>
							<span className="productInfoValue">{teacher.address}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">tel:</span>
							<span className="productInfoValue">{teacher.phone}</span>
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
							value={teacher._id}
							hidden
						/>
						<label>Nom d'Enseignant</label>
						<input
							name="firstName"
							type="text"
							placeholder={teacher.firstName}
							onChange={handleChange}
						/>
						<label>Prenom d'Enseignant</label>
						<input
							name="lastName"
							type="text"
							placeholder={teacher.lastName}
							onChange={handleChange}
						/>
						<label>Email</label>
						<input
							name="email"
							type="text"
							placeholder={teacher.email}
							onChange={handleChange}
						/>
						<label>Address</label>
						<input
							name="address"
							type="text"
							placeholder={teacher.address}
							onChange={handleChange}
						/>
						<label>Telephone</label>
						<input
							name="phone"
							type="number"
							placeholder={teacher.phone}
							onChange={handleChange}
						/>
						<label>Specialité</label>
						<select name="specialty" id="specialty" onChange={handleChange}>
							<option value="" disabled selected>
								{teacher.specialty}
							</option>
							<option value="big data">Big Data</option>
							<option value="soap">Soap</option>
							<option value="reseau">Réseau</option>
							<option value="developpement">Développement</option>
							<option value="mobile">Mobile</option>
						</select>
						<label>Grade</label>
						<select name="grade" id="grade" onChange={handleChange}>
							<option value="" disabled selected>
								{teacher.grade}
							</option>
							<option value="chef departement">Chef Departement</option>
							<option value="professeur">Professeur</option>
							<option value="assistant">Assistant</option>
							<option value="maitre assistant"> Maitre Assistant</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img src={teacher.img} alt="" className="productUploadImg" />
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
