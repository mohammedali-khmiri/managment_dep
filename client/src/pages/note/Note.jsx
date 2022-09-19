import styled from "styled-components";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import { mobile } from "../../responsive";
import { useState } from "react";
import Table from "../../components/table/Table";
import { useEffect } from "react";
import axios from "axios";
import { publicRequest, userRequest } from "../../requestMethods";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Filter = styled.div`
	display: flex;
	justify-content: left;
	margin: 20px;
	${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;

const Input = styled.input`
	margin: 20px 10px 0px 0px;
	padding: 10px;
	margin-right: 20px;
	flex: 1;
	max-width: 20%;
`;

const Select = styled.select`
	padding: 10px;
	flex: 1;
	max-width: 20%;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Button = styled.button`
	padding: 10px;
	background-color: teal;
	color: white;
	margin-left: 20px;
`;

const Note = () => {
	const [notes, setNotes] = useState([]);
	const [query, setQuery] = useState("");

	
		const getNotes = async () => {
			try {
				const res = await userRequest.get(`notes?cinStud=${query}`);
				setNotes(res.data);
			} catch {}
		};
	

	const handleClick = (e) => {
		e.preventDefault();
		getNotes();
	};

	console.log(notes);

	return (
		<Container>
			<Navbar />

			<Title>CHERCHER Mon Note</Title>
			<FilterContainer>
				<FilterText>Filtrer votre recherche</FilterText>
				<Filter>
					<Input
						name="nCin"
						type="number"
						placeholder="N° Carte d'identité"
						onChange={(e) => setQuery(e.target.value)}
					/>
					{/* <Select
						name="typeStage"
						// onChange={(e) => setQuery(e.target.value)}
					>
						<Option disabled selected>
							Type de Stage
						</Option>
						<Option value="initiation">initiation </Option>
						<Option value="perfection">perfection</Option>
						<Option value="pfe">pfe</Option>
					</Select> */}
				</Filter>
			</FilterContainer>
			<Button onClick={handleClick}>Lancer la recherche</Button>
			<hr
				style={{
					height: 1,
					width: "90%",
					margin: "20px auto",

					color: "lightgray",
				}}
			/>
			<Table data={notes} />
			<Footer />
		</Container>
	);
};

export default Note;
