import styled from "styled-components";
import { mobile } from "../responsive";
import { registerTeacher } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://img.freepik.com/free-photo/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus_1418-627.jpg?size=626&ext=jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Select = styled.select`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

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
	justify-content: space-between;
`;

const NavItem = styled.div`
	display: flex;
	align-items: center;
`;

const NavLogin = styled.button`
	display: flex;
	align-items: center;

	border: none;
	border-radius: 10px;
	padding: 10px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-right: 30px;
`;

const MenuItem = styled.div`
	font-weight: 600;
	font-size: 17px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const TeacherRegister = () => {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();

		const teacher = { ...inputs };
		registerTeacher(teacher, dispatch).then(() =>
			history.push("/teacherLogin")
		);
	};

	return (
		<Container>
			<Nav>
				<NavItem>
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
				</NavItem>
				<Link
					to="/teacherLogin"
					style={{
						margin: "5 0",
						textDecoration: "none",
						cursor: "pointer",
					}}
				>
					<NavLogin>
						<ExitToAppIcon
							style={{
								marginRight: 10,
							}}
						/>
						Connecter
					</NavLogin>
				</Link>
			</Nav>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input
						name="firstName"
						type="text"
						placeholder="Nom Enseignant..."
						onChange={handleChange}
					/>
					<Input
						name="lastName"
						type="text"
						placeholder="Prenom Enseignant..."
						onChange={handleChange}
					/>
					<Input
						name="email"
						type="email"
						placeholder="email"
						onChange={handleChange}
					/>
					<Input
						name="address"
						type="text"
						placeholder="address"
						onChange={handleChange}
					/>
					<Input
						name="phone"
						type="number"
						placeholder="telephone"
						onChange={handleChange}
					/>
					<Input
						name="codeEns"
						type="number"
						placeholder="Matriculle "
						onChange={handleChange}
					/>
					<Select name="grade" onChange={handleChange}>
						<Option value="chef departement">Chef Departement</Option>
						<Option value="professeur">Professeur</Option>
						<Option value="assistant">Assistant</Option>
						<Option value="maitre assistant">Maitre Assistant</Option>
					</Select>

					<Select name="specialty" onChange={handleChange}>
						<Option value="big data">Big Data</Option>
						<Option value="soap">Soap</Option>
						<Option value="reseau">Réseau</Option>
						<Option value="developpement">Développement</Option>
						<Option value="mobile">Mobile</Option>
					</Select>
					<Input
						name="password"
						placeholder="password"
						onChange={handleChange}
					/>
					<Input placeholder="confirm password" onChange={handleChange} />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button onClick={handleClick}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default TeacherRegister;
