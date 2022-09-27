import Container from "react-bootstrap/Container";
import AboutMe from "./AboutMe";
import ProjectsContainer from "../projects/ProjectsContainer";
import TechBanner from "./TechBanner";
import OtherStuff from "./OtherStuff";
import Navbar from "./Navbar";
import Experience from "./Experience";

export default function Home() {
	return (
		<Container fluid>
			<Navbar />
			<AboutMe />
			<TechBanner />
			<Experience />
			<ProjectsContainer />
			<OtherStuff />
		</Container>
	);
}
