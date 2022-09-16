import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import News from "../components/News";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const NewsList = () => {
	// const location = useLocation();
	// const cat = location.pathname.split("/")[2];

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Nos actualités</Title>
			{/* <FilterContainer>
        <Filter>
          <FilterText>Filter :</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
			<News />
			{/* <Newsletter /> */}
			<Footer />
		</Container>
	);
};

export default NewsList;
