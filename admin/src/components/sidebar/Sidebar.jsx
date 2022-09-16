import "./sidebar.css";
import {
	LineStyle,
	Timeline,
	PermIdentity,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
	AssignmentOutlined,
	AssignmentIndOutlined,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/students" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Students
							</li>
						</Link>
						<Link to="/teachers" className="link">
							<li className="sidebarListItem">
								<AssignmentIndOutlined className="sidebarIcon" />
								Teachers
							</li>
						</Link>
						<Link to="/notes" className="link">
							<li className="sidebarListItem">
								<AssignmentOutlined className="sidebarIcon" />
								Notes
							</li>
						</Link>
						<li className="sidebarListItem">
							<BarChart className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutline className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeed className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<WorkOutline className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<Report className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
