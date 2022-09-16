import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
	cursor: pointer;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Description</Logo>
				<Desc>
					​L'ISET de Jendouba est un maillon parmi plusieurs, constituants un
					réseau appelé souvent réseaux des ISETs, assurant une formation à
					vocation technologique et permettant à ses diplômés une meilleur
					intégration à la vie professionelle grâce à des compétences et des
					mécanismes d’ouvertures sur l'environnement et de renforcement des
					capacités
				</Desc>
			</Left>
			<Center>
				<Title>Lien utiles</Title>
				<List>
					<ListItem>Présentation</ListItem>
					<ListItem>Centre de carrière</ListItem>
					<ListItem>Observatoire</ListItem>
					<ListItem>Plan du site</ListItem>
					<ListItem>Nos actualités</ListItem>
					<ListItem>Nos événements</ListItem>
					<ListItem>Gallerie</ListItem>
					<ListItem>Nos partenaires</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> Campus universitaire 8189
					Jendouba du nord
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +216 78 610 104
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> isetj@isetj.rnu.tn
				</ContactItem>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Right>
		</Container>
	);
};

export default Footer;
