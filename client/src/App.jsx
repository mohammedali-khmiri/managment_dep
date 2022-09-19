import New from "./pages/New";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import StudentRegister from "./pages/StudentRegister";
import StudentLogin from "./pages/StudentLogin";
import TeacherList from "./pages/TeacherList";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Teacher from "./pages/Teacher";
import { useSelector } from "react-redux";
import TeacherRegister from "./pages/TeacherRegister";
import TeacherLogin from "./pages/TeacherLogin";
import Profile from "./pages/profile/Profile";
import Note from "./pages/note/Note";

const App = () => {
	const userS = useSelector((state) => state.student.currentUser);
	const userT = useSelector((state) => state.teacher.currentUser);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/news">
					<NewsList />
				</Route>
				<Route path="/new/:id">
					<New />
				</Route>
				<Route path="/teachers">
					<TeacherList />
				</Route>
				<Route path="/teacher/:id">
					<Teacher />
				</Route>
				<Route path="/note">
					<Note />
				</Route>
				<Route path="/studentLogin">
					{userS || userT ? <Redirect to="/" /> : <StudentLogin />}
				</Route>
				<Route path="/studentRegister">
					{userS || userT ? <Redirect to="/" /> : <StudentRegister />}
				</Route>
				<Route path="/teacherLogin">
					{userT || userS ? <Redirect to="/" /> : <TeacherLogin />}
				</Route>
				<Route path="/teacherRegister">
					{userT || userS ? <Redirect to="/" /> : <TeacherRegister />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
