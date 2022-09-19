import styled from "styled-components";
import { useState } from "react";
import { loginTeacher } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.3)
		),
		url("https://img.freepik.com/free-photo/group-students-happy-be-back-university_23-2148586613.jpg?size=626&ext=jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const Nav = styled.div`
	height: 60px;
	width: 90vw;
	z-index: 2;
	position: absolute;
	top: 20px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0.5);
	display: flex;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.6);
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Error = styled.span`
	color: red;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
		color: green;
		cursor: not-allowed;
	}
`;

// const Link = styled.a`
// 	margin: 5px 0px;
// 	font-size: 12px;
// 	text-decoration: underline;
// 	cursor: pointer;
// `;

const MenuItem = styled.div`
	font-weight: 600;
	font-size: 17px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const TeacherLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	const { isFetching, error } = useSelector((state) => state.teacher);

	const handleClick = (e) => {
		e.preventDefault();
		loginTeacher(dispatch, { email, password }).then(() => history.push("/"));
	};

	return (
		<Container>
			<Nav>
				<MenuItem>Espace Enseignant</MenuItem>
				<Link
					to="/"
					style={{
						margin: "5 0",
						fontSize: 12,
						textDecoration: "none",
						cursor: "pointer",
						color: "black",
					}}
				>
					<MenuItem>Accueil</MenuItem>
				</Link>
				<Link
					to="/contact"
					style={{
						margin: "5 0",
						fontSize: 12,
						textDecoration: "none",
						cursor: "pointer",
						color: "black",
					}}
				>
					<MenuItem>Contact</MenuItem>
				</Link>
			</Nav>
			<Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						placeholder="password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick} disabled={isFetching}>
						LOGIN
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link
						to=""
						style={{
							margin: "5 0",
							fontSize: 15,
							textDecoration: "underline",
							cursor: "pointer",
							color: "black",
						}}
					>
						DO NOT YOU REMEMBER THE PASSWORD?
					</Link>
					<Link
						to="/teacherRegister"
						style={{
							margin: "5 0",
							fontSize: 15,
							textDecoration: "underline",
							cursor: "pointer",
							color: "black",
						}}
					>
						CREATE A NEW ACCOUNT
					</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default TeacherLogin;
