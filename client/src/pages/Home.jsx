import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import News from "../components/News";
import Slider from "../components/Slider";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	&:hover {
		background-color: #dfe2e6;
	}
`;
const Title = styled.h3`
	border-bottom: 3px solid #dfe2e6;
	color: #00529f;
	font-size: 28px;
	line-height: 45px;
`;
const Desc = styled.p`
	color: #024884;
	font-family: Oregon;
	letter-spacing: 0.04em;
`;

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<InfoContainer>
				<Title>Actualités</Title>
				<Link to="/news">
					<Desc>TOUTE L'ACTUALITÉ</Desc>
				</Link>
			</InfoContainer>
			<News />
			{/* <Newsletter/> */}
			<Footer />
		</div>
	);
};

export default Home;
