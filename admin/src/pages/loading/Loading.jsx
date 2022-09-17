import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NotFound from "../notfound/NotFound";

const Loading = () => {
	const currUser = useSelector((state) => state.user.currentUser);
	const history = useHistory();

	if (!currUser) {
		history.push("/notfound");
	} else {
		history.push("/");
	}

	return (
		<div className="loading">
			<h1>Loading</h1>
		</div>
	);
};

export default Loading;
