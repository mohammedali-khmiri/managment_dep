import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";
import NewTeacher from "./pages/newTeacher/NewTeacher";
import Login from "./pages/login/Login";
import StudentList from "./pages/studentList/StudentList";
import Student from "./pages/student/Student";
import NewStudent from "./pages/newStudent/NewStudent";
import NoteList from "./pages/noteList/NoteList";
import Note from "./pages/note/Note";
import NewNote from "./pages/newNote/NewNote";
import NotFound from "./pages/notfound/NotFound";
import { useSelector } from "react-redux";

function App() {
	const admin = useSelector((state) => state.user.currentUser);

	return (
		<Router>
			<Switch>
				<Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>

				{admin ? (
					<>
						<Topbar />
						<div className="container">
							<Sidebar />
							<Route exact path="/">
								<Home />
							</Route>

							<Route path="/users">
								<UserList />
							</Route>
							<Route path="/user/:userId">
								<User />
							</Route>
							<Route path="/newUser">
								<NewUser />
							</Route>
							<Route path="/teachers">
								<TeacherList />
							</Route>
							<Route path="/teacher/:teacherId">
								<Teacher />
							</Route>
							<Route path="/newteacher">
								<NewTeacher />
							</Route>
							<Route path="/students">
								<StudentList />
							</Route>
							<Route path="/student/:studentId">
								<Student />
							</Route>

							<Route path="/newstudent">
								<NewStudent />
							</Route>
							<Route path="/notes">
								<NoteList />
							</Route>
							<Route path="/note/:noteId">
								<Note />
							</Route>
							<Route path="/newnote">
								<NewNote />
							</Route>
						</div>
					</>
				) : (
					<>
						<Redirect to="/notfound" />
						<Route path="/notfound">
							<NotFound />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
