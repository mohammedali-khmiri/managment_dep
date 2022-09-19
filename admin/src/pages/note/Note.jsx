import { Link, useHistory, useLocation } from "react-router-dom";
import "./note.css";
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
import { updateNote } from "../../redux/apiCalls";

export default function Note() {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const noteId = location.pathname.split("/")[2];

	const note = useSelector((state) =>
		state.note.notes.find((note) => note._id === noteId)
	);

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		const note = { ...inputs };
		const id = noteId;
		updateNote(id, note, dispatch);
		history.goBack();
	};

	return (
		<div className="note">
			<div className="noteTitleContainer">
				<h1 className="noteTitle">Note</h1>
				<Link to="/newnote">
					<button className="noteAddButton">Create</button>
				</Link>
			</div>
			<div className="noteTop">
				{/* <div className="noteTopLeft">
					<img src={note.img} alt="" className="noteInfoImg" />
				</div> */}
				<div className="noteTopRight">
					<div className="noteInfoTop">
						<span className="noteName">
							{note.fnameStud} {note.lnameStud}
						</span>
					</div>
					<div className="noteInfoBottom">
						<div className="noteInfoItem">
							<span className="noteInfoKey">id:</span>
							<span className="noteInfoValue">{note._id}</span>
						</div>
						<div className="noteInfoItem">
							<span className="noteInfoKey">N°:</span>
							<span className="noteInfoValue">{note.num}</span>
						</div>
						<div className="noteInfoItem">
							<span className="noteInfoKey">Date de Soutenace :</span>
							<span className="noteInfoValue">{note.dateSou}</span>
						</div>
						<div className="noteInfoItem">
							<span className="noteInfoKey">Type de Stage:</span>
							<span className="noteInfoValue">{note.typeStage}</span>
						</div>
						<div className="noteInfoItem">
							<span className="noteInfoKey">Note:</span>
							<span className="noteInfoValue">{note.note}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="noteBottom">
				<form className="noteForm">
					<div className="noteFormLeft">
						<input
							name="id"
							type="text"
							onChange={handleChange}
							value={note._id}
							hidden
						/>
						<label>Nom d'Etudiant</label>
						<input
							name="firstName"
							type="text"
							placeholder={note.fnameStud}
							onChange={handleChange}
						/>
						<label>Prenom d'Etudiant</label>
						<input
							name="lastName"
							type="text"
							placeholder={note.lnameStud}
							onChange={handleChange}
						/>
						
						<label>Date de Sotenance</label>
						<input
							name="dateSou"
							type="text"
							placeholder={note.dateSou}
							onChange={handleChange}
						/>
						<label>Type de Stage</label>
						<select name="typeStage" id="typeStage" onChange={handleChange}>
							<option value="" disabled selected>
								{note.typeStage}
							</option>
							<option value="initiation">Initiation</option>
							<option value="perfectionnement">Perfectionnement</option>
							<option value="pfe">Pfe</option>
						</select>
						<label>Note</label>
						<input
							name="note"
							type="number"
							placeholder={note.note}
							onChange={handleChange}
						/>
						<label>Rapporteur</label>
						<input
							name="examiner"
							type="text"
							placeholder={note.examiner}
							onChange={handleChange}
						/>
						<label>President</label>
						<input
							name="President"
							type="text"
							placeholder={note.President}
							onChange={handleChange}
						/>
						<label>Encadrant</label>
						<input
							name="Supervisor"
							type="text"
							placeholder={note.Supervisor}
							onChange={handleChange}
						/>
					</div>
					<div className="noteFormRight">
						<div className="noteUpload">
							{/* <img src={note.img} alt="" className="noteUploadImg" />
							<label for="file">
								<Publish style={{ cursor: "pointer" }} />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: "none" }}
								onChange={(e) => setFile(e.target.files[0])}
							/> */}
						</div>
						<button
							onClick={handleClick}
							style={{ padding: 10 }}
							className="noteButton"
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
