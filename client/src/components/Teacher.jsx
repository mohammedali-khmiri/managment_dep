import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
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
	min-width: 30%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const InfoContainer = styled.div`
	flex: 2;
	margin: 20px;
	padding: 10px;
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	width: 100%;
`;

// const InfoContainer = styled.div`
// 	width: 90%;
// 	height: 100px;
// 	background-color: white;
// 	position: absolute;
// 	bottom: 0;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	overflow: hidden;
// 	padding: 10px;
// `;

const Title = styled.h2`
	display: flex;
	justify-content: space-between;
`;

const Desc = styled.p``;

const Image = styled.img`
	height: 100%;
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
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Teacher = ({ item }) => {
	return (
		<Container>
			<ImgContainer>
				<Image src={item.img} />
			</ImgContainer>
			<InfoContainer>
				<Title>
					{item.firstName} {item.lastName}
				</Title>

				<Desc>{item.grade}</Desc>
			</InfoContainer>

			<Info>
				<Icon>
					<Link to={`/teacher/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Teacher;
