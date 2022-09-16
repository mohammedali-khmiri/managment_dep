import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	margin: 0 20px;
`;

const Image = styled.img`
	width: 100%;
	height: 40vh;
	object-fit: cover;
	${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
	flex: 2;

	${mobile({ padding: "10px" })}
`;

const Title = styled.h3`
	text-transform: uppercase !important;
	margin: 0 0 5px;
	color: #333333 !important;
	font: 700 20px/26px "Montserrat", sans-serif !important;
	letter-spacing: 1px !important;
`;

const Grade = styled.span`
	font-size: 13px;
	color: #aaa;
	text-transform: uppercase;
	display: block;
`;
const Desc = styled.p`
	font: Normal 14px/26px "Open Sans", sans-serif;
	letter-spacing: 1px;
	text-transform: none;
	color: #555555 !important;
	margin-top: 5px;
`;

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	border-top: 1px solid #eee;
`;

const Contact = styled.h5`
	font: 700 16px/22px "Montserrat", sans-serif !important;
	letter-spacing: 1px !important;
	text-transform: capitalize !important;
	color: #333333 !important;
	margin: 10px 0 0;
`;

const Teacher = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [teacher, setTeacher] = useState({});

	useEffect(() => {
		const getTeacher = async () => {
			try {
				const res = await publicRequest.get("/teachers/" + id);
				setTeacher(res.data);
			} catch {}
		};
		getTeacher();
	}, [id]);
	console.log(teacher);
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src={teacher.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>
						{teacher.firstName} {teacher.lastName}
					</Title>
					<Grade>{teacher.grade}</Grade>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</Desc>
					<ContactContainer>
						<Contact>Informations de contact</Contact>
						<Desc>
							{teacher.firstName} {teacher.lastName}
							<br />
							Institut Supérieur des Etudes Technologiques de Jendouba
							<br />
							Campus universitaire 8189 Jendouba du nord <br />
							<b>Tél:</b> {teacher.phone}
							<br />
							<b>Fax:</b> {teacher.phone} <br />
							<b>E-mail:</b> {teacher.email}
						</Desc>
					</ContactContainer>
				</InfoContainer>
			</Wrapper>

			<Footer />
		</Container>
	);
};

export default Teacher;
