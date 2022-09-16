import styled from "styled-components";
import Teacher from "./Teacher";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
	padding: 0 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Teachers = ({ filters }) => {
	const [teachers, setTeachers] = useState([]);
	const [filteredTeachers, setFilteredTeachers] = useState([]);

	useEffect(() => {
		const getTeachers = async () => {
			try {
				const res = await axios.get("http://localhost:4000/api/teachers");
				setTeachers(res.data);
			} catch (err) {}
		};
		getTeachers();
	}, []);

	useEffect(() => {
		setFilteredTeachers(
			teachers.filter((item) =>
				Object.entries(filters).every(([key, value]) =>
					item[key].includes(value)
				)
			)
		);
	}, [teachers, filters]);

	return (
		<Container>
			{filteredTeachers.map((item) => (
				<Teacher item={item} key={item._id} />
			))}
		</Container>
	);
};

export default Teachers;
