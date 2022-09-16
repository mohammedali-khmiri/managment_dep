import React from "react";

const NotFound = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1>You are not allowed to do that!</h1>
			<img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=826&t=st=1663227918~exp=1663228518~hmac=3dfc63d9f481d7c38957b5d80e61fc8c973751de906283b4b38b58af61a40212" />
		</div>
	);
};

export default NotFound;
