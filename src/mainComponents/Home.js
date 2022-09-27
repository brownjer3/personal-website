import Container from "react-bootstrap/Container";
import AboutMe from "./AboutMe";
import ProjectsContainer from "../projects/ProjectsContainer";
import TechBanner from "./TechBanner";

export default function Home() {
	return (
		<Container fluid>
			<AboutMe />
			<TechBanner />
			<ProjectsContainer />
		</Container>
	);
}

// other things i've done
// eagle scout
// Ironman
// flatiron school
// udemy solidity course certificate
// grinnell soccer
// grinnell swim
