import "./studentList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudents } from "../../redux/apiCalls";

export default function StudentList() {
	const dispatch = useDispatch();
	const students = useSelector((state) => state.student.students);

	useEffect(() => {
		getStudents(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteStudent(id, dispatch);
	};

	const columns = [
		{
			field: "nInscription",
			headerName: "N°Inscription",
			width: 160,
		},
		{ field: "nCin", headerName: "N°CIN", width: 120 },
		{
			field: "student",
			headerName: "Student",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="studentListItem">
						<img className="studentListImg" src={params.row.img} alt="" />
						{params.row.firstName} {params.row.lastName}
					</div>
				);
			},
		},
		{
			field: "class",
			headerName: "Class",
			width: 120,
		},
		{ field: "email", headerName: "Email", width: 160 },

		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/student/" + params.row._id}>
							<button className="studentListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="studentListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="studentList">
			<DataGrid
				rows={students}
				disableSelectionOnClick
				columns={columns}
				getRowId={(row) => row._id}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
