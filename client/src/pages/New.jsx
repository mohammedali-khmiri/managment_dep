import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { mobile } from "../responsive";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 50vh;
	object-fit: cover;
	${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Date = styled.span`
	font-weight: 400;
	font-size: 20px;
	display: flex;
	align-items: center;
`;

const New = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</Desc>

					<Date>
						<DateRangeOutlinedIcon style={{ marginRight: "10px" }} />
						Date création:07/04/2020
					</Date>
					{/* <FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer> */}
					{/* <AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer> */}
				</InfoContainer>
			</Wrapper>
			{/* <Newsletter /> */}
			<Footer />
		</Container>
	);
};

export default New;
