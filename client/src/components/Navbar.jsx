import { Search } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 90px;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: rgba(255, 255, 255, 0.8);
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	height: 80%;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	flex: 1;
	text-align: center;
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 5px;
	cursor: pointer;
	:hover {
		background-color: rgba(255, 255, 255, 0.5);
		color: rgba(0, 0, 0, 0.8);
	}
`;
const ImgPro = styled.span`
	text-align: center;
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	margin-left: 10px;
`;

const Image = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-right: 20px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	outline: none;
	background-color: rgba(255, 255, 255, 0.5);
	${mobile({ width: "50px" })};
`;

const Center = styled.div`
	flex: 3;
	display: flex;
	align-items: center;

	${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
	:hover {
		color: rgba(0, 0, 0, 0.8);
	}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-weight: 600;
	font-size: 14px;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;
	margin-left: 30px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
	:hover {
		background-color: rgba(0, 0, 0, 0.1);
		color: rgba(0, 0, 0, 0.8);
	}
`;

const Navbar = () => {
	const userS = useSelector((state) => state.student.currentUser);
	const userT = useSelector((state) => state.teacher.currentUser);
	if (userS) {
		var currUser = userS;
	} else {
		var currUser = userT;
	}

	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<Container>
			<Wrapper>
				<Left>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						<Logo>ISET_J.</Logo>
					</Link>
				</Left>
				<Center>
					<MenuItem>ACCUEIL</MenuItem>
					<MenuItem>PRÉSENTATION</MenuItem>
					<MenuItem>FORMATIONS</MenuItem>
					<MenuItem>ETUDIANTS</MenuItem>
					<MenuItem>PARTENARIATS</MenuItem>
					<Link
						to="/teachers"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						<MenuItem>ENSEIGNANTS</MenuItem>
					</Link>
					{userT && (
						<Link
							style={{
								textDecoration: "none",
								color: "black",
							}}
						>
							<MenuItem>Add new</MenuItem>
						</Link>
					)}

					<MenuItem>STAGES ET EMPLOIS</MenuItem>
				</Center>
				<Right>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
					<Link
						to="/profile"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						{currUser && (
							<ProfileContainer>
								<Image
									src={
										currUser.img ||
										"https://cdn.icon-icons.com/icons2/3066/PNG/512/user_person_profile_avatar_icon_190943.png"
									}
									alt="img"
									className="topbarImg"
								/>
								<ImgPro>{currUser.firstName}</ImgPro>
							</ProfileContainer>
						)}
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
