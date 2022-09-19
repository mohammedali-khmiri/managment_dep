import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useSelector } from "react-redux";

export default function Profile() {
	const userS = useSelector((state) => state.student.currentUser);
	const userT = useSelector((state) => state.teacher.currentUser);
	if (userS) {
		var currUser = userS;
	} else {
		var currUser = userT;
	}

	return (
		<>
			<Topbar />
			<div className="profile">
				{/* <Sidebar /> */}
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="https://img.freepik.com/free-photo/grey-marble-column-details-building_1359-886.jpg?size=626&ext=jpg"
								alt=""
							/>
							<img
								className="profileUserImg"
								src={
									currUser.img ||
									"https://cdn.icon-icons.com/icons2/3066/PNG/512/user_person_profile_avatar_icon_190943.png"
								}
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">
								{currUser.firstName} {currUser.lastName}
							</h4>
							<span className="profileInfoDesc"></span>
						</div>
					</div>
					<div className="profileRightBottom">
						{/* <Feed /> */}
						<Rightbar />
					</div>
				</div>
			</div>
		</>
	);
}
