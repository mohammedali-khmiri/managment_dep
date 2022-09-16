import styled from "styled-components";
import { useState } from "react";
import { loginStudent } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.3)
		),
		url("https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?size=626&ext=jpg")
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

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const MenuItem = styled.div`
	font-weight: 600;
	font-size: 17px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	const { isFetching, error } = useSelector((state) => state.student);

	const handleClick = (e) => {
		e.preventDefault();
		loginStudent(dispatch, { email, password }).then(() => history.push("/"));
	};

	return (
		<Container>
			<Nav>
				<MenuItem>Espace Etudiant</MenuItem>
				<MenuItem>Accueil</MenuItem>
				<MenuItem>Contact</MenuItem>
			</Nav>
			<Wrapper>
				<Title>Sign In</Title>
				<Form onSubmit={handleClick}>
					<Input
						type="email"
						placeholder="Email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						placeholder="password"
						required
						type="password"
						minLength="6"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" disabled={isFetching}>
						Log In
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link to="/studentRegister">DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link to="/studentRegister">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
