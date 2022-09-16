import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 350px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Rectangle = styled.div`
	width: 90%;
	height: 100px;
	background-color: white;
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	padding: 10px;
`;

const Title = styled.h2`
	margin: 10px;
`;

const Date = styled.h4``;

const Image = styled.img`
	height: 75%;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
`;

const New = ({ item }) => {
	return (
		<Container>
			<Rectangle>
				<Title>{item.title}</Title>
				{/* <Desc>{item.desc}</Desc> */}
				<Date>{item.date}</Date>
			</Rectangle>
			<Image src={item.img} />
			<Info>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default New;
