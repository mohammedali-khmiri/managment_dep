import { useEffect, useState } from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

export default function WidgetLg() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const getNotes = async () => {
			try {
				const res = await userRequest.get("notes");
				setNotes(res.data);
			} catch {}
		};
		getNotes();
	}, []);

	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>;
	};
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest Notes</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Etudiant</th>
					<th className="widgetLgTh">Date Soutenance</th>
					<th className="widgetLgTh">Note</th>
					<th className="widgetLgTh">Type stage</th>
				</tr>
				{notes.map((note) => (
					<tr className="widgetLgTr" key={note._id}>
						<td className="widgetLgUser">
							<span className="widgetLgName">
								{note.fnameStud} {note.lnameStud}
							</span>
						</td>
						<td className="widgetLgDate">{format(note.dateSou)}</td>
						<td className="widgetLgAmount">{note.note}</td>
						<td className="widgetLgStatus">
							<Button type={note.typeStage} />
						</td>
					</tr>
				))}
			</table>
		</div>
	);
}
