import Container from "react-bootstrap/Container";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Misc from "./Misc";
import Experience from "./Experience";

export default function Home() {
	return (
		<Container fluid>
			<Navbar />
			<Intro />
			<About />
			<Experience />
			<Projects />
			<Misc />
		</Container>
	);
}
