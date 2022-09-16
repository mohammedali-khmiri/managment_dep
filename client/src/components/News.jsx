import styled from "styled-components";
import { popularNews } from "../data";
import New from "./New";

const Container = styled.div`
	padding: 0 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const News = () => {
	return (
		<Container>
			{popularNews.map((item) => (
				<New item={item} key={item.id} />
			))}
		</Container>
	);
};

export default News;
