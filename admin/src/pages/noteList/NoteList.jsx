import "./noteList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getNotes } from "../../redux/apiCalls";

export default function NoteList() {
	const dispatch = useDispatch();
	const notes = useSelector((state) => state.note.notes);
	

	useEffect(() => {
		getNotes(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteNote(id, dispatch);
		
	};

	const columns = [
		{
			field: "num",
			headerName: "N°",
			width: 60,
		},
		{
			field: "student",
			headerName: "Nom Etudiant",
			width: 160,
			renderCell: (params) => {
				return (
					<div className="noteListItem">
						{params.row.fnameStud} {params.row.lnameStud}
					</div>
				);
			},
		},

		{
			field: "dateSou",
			headerName: "Date Soutenance",
			width: 180,
		},
		{ field: "typeStage", headerName: "Type de Stage", width: 160 },
		{ field: "note", headerName: "Note", width: 120 },
		{ field: "examiner", headerName: "Rapporteur", width: 150 },
		{ field: "President", headerName: "President", width: 150 },
		{ field: "Supervisor", headerName: "Encadrant", width: 150 },

		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/note/" + params.row._id}>
							<button className="noteListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="noteListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="noteList">
			<DataGrid
				rows={notes}
				disableSelectionOnClick
				columns={columns}
				getRowId={(row) => row._id}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
