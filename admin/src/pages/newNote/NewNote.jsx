import { useState } from "react";
import "./newNote.css";
import { addNote } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewNote() {
	const [inputs, setInputs] = useState({});

	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		const note = { ...inputs };
		addNote(note, dispatch);
		history.push("/notes");
	};

	return (
		<div className="newNote">
			<h1 className="addNoteTitle">New Note</h1>
			<form className="addNoteForm">
				<div className="addNoteItem">
					<label>Nom d'Etudiant</label>
					<input
						name="fnameStud"
						type="text"
						placeholder="Nom Etudiant..."
						onChange={handleChange}
					/>
					<label>Prenom d'Etudiant</label>
					<input
						name="lnameStud"
						type="text"
						placeholder="Prenom Etudiant..."
						onChange={handleChange}
					/>
					<label>N° de carte d'identité</label>
					<input
						name="cinStud"
						type="number"
						placeholder="N° CIN "
						onChange={handleChange}
					/>
				</div>
				<div className="addNoteItem">
					<label>Date de Sotenance</label>
					<input
						name="dateSou"
						type="date"
						placeholder="YYYY-MM-DD"
						onChange={handleChange}
					/>
				</div>
				<div className="addNoteItem">
					<label>Type de Stage</label>
					<select name="typeStage" id="typeStage" onChange={handleChange}>
						<option value="initiation">Initiation</option>
						<option value="perfectionnement">Perfectionnement</option>
						<option value="pfe">Pfe</option>
					</select>
				</div>
				<div className="addNoteItem">
					<label>Note</label>
					<input
						name="note"
						type="number"
						placeholder=""
						onChange={handleChange}
					/>
					<label>Rapporteur</label>
					<input
						name="examiner"
						type="text"
						placeholder="Mr, Mdme"
						onChange={handleChange}
					/>
					<label>President</label>
					<input
						name="President"
						type="text"
						placeholder="Mr, Mdme"
						onChange={handleChange}
					/>
					<label>Encadrant</label>
					<input
						name="Supervisor"
						type="text"
						placeholder="Mr, Mdme"
						onChange={handleChange}
					/>
				</div>
				<button onClick={handleClick} className="addNoteButton">
					Create
				</button>
			</form>
		</div>
	);
}
