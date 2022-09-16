import styled from "styled-components";
import { mobile } from "../responsive";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

const Container = styled.div`
	height: 60px;
	background-color: teal;
	color: white;
	font-weight: 500;
`;
const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Logo = styled.div`
	flex: 2;
	font-size: 12px;
	display: flex;
`;

const InfoContainer = styled.div`
	flex: 4;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	text-align: left;
`;

const Center = styled.div`
	flex: 1;
	text-align: left;
`;
const Right = styled.div`
	flex: 1;
	text-align: left;
`;

const Title = styled.h1`
	font-size: 16px;
`;
const Info = styled.p`
	margin-top: 5px;
`;

const Announcement = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<img
						src="data:image/jpeg;base64,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"
						style={{ width: 50, marginRight: 10 }}
					/>
					République Tunisienne
					<br />
					Ministère de l’Enseignement Supérieur et de la Recherche Scientifique
					<br />
					Direction Générale des Etudes Technologiques
				</Logo>
				<InfoContainer>
					<LocationOnOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Left>
						<Title>Our Office</Title>
						<Info>Campus universitaire 8189 Jendouba du nord</Info>
					</Left>

					<MailOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Center>
						<Title>Email Us</Title>
						<Info>isetj@isetj.rnu.tn</Info>
					</Center>

					<LocalPhoneOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Right>
						<Title>Call Us</Title>
						<Info>+216 78 610 104</Info>
					</Right>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Announcement;
