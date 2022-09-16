import { useState } from "react";
import "./newTeacher.css";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addTeacher } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewTeacher() {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const dispatch = useDispatch();
	const history = useHistory();

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
					addTeacher(teacher, dispatch);
					history.goBack();
				});
			}
		);
	};

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Teacher</h1>
			<form className="addProductForm">
				<div className="addProductItem">
					<label>Image</label>
					<input
						type="file"
						id="file"
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<div className="addProductItem">
					<label>Nom</label>
					<input
						name="firstName"
						type="text"
						placeholder="Nom Enseignant..."
						onChange={handleChange}
					/>
					<label>Prenom</label>
					<input
						name="lastName"
						type="text"
						placeholder="Prenom Enseignant..."
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Email</label>
					<input
						name="email"
						type="email"
						placeholder="email"
						onChange={handleChange}
					/>
					<label>Address</label>
					<input
						name="address"
						type="text"
						placeholder="address"
						onChange={handleChange}
					/>
					<label>Telephone</label>
					<input
						name="phone"
						type="number"
						placeholder="telephone"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Grade</label>
					<select name="grade" id="grade" onChange={handleChange}>
						<option value="chef departement">Chef Departement</option>
						<option value="professeur">Professeur</option>
						<option value="assistant">Assistant</option>
						<option value="maitre assistant"> Maitre Assistant</option>
					</select>
				</div>
				<div className="addProductItem">
					<label>Specialité</label>
					<select name="specialty" id="specialty" onChange={handleChange}>
						<option value="big data">Big Data</option>
						<option value="soap">Soap</option>
						<option value="reseau">Réseau</option>
						<option value="developpement">Développement</option>
						<option value="mobile">Mobile</option>
					</select>
				</div>
				<button onClick={handleClick} className="addProductButton">
					Create
				</button>
			</form>
		</div>
	);
}
