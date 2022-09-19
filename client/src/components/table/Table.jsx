import "./table.css";

const Table = ({ data }) => {
	const Button = ({ type }) => {
		return (
			<button
				className={"widgetLgButton " + type}
				style={{ border: "none", padding: 10, borderRadius: 10 }}
			>
				{type}
			</button>
		);
	};
	return (
		<table>
			<tbody>
				<tr>
					<th>Etudiant</th>
					<th>Date Soutenance</th>
					<th>Type stage</th>
					<th>Note</th>
					<th>Rapporteur</th>
					<th>President</th>
					<th>Encadrant</th>
				</tr>
				{data.map((note) => (
					<tr key={note._id}>
						<td>
							{note.fnameStud} {note.lnameStud}
						</td>
						<td>{note.dateSou}</td>
						<td>
							<Button type={note.typeStage} />
						</td>
						<td>{note.note}</td>
						<td>{note.examiner}</td>
						<td>{note.President}</td>
						<td>{note.Supervisor}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
