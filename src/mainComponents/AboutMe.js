import { Image, Jumbotron } from "react-bootstrap";
import headshot from "../images/headshot.png";

export default function AboutMe() {
	return (
		<Jumbotron className="bg-transparent pb-0">
			<h1>Hi there! My name's Jerry.</h1>
			<div class="headshotContainer">
				<a
					href="https://www.linkedin.com/in/jerry-brown-/"
					target="_blank"
					rel="noreferrer"
				>
					<Image src={headshot} fluid className="border headshot" />
				</a>
			</div>
			<p>
				I'm a Software Engineer currently based in Southern California. I like
				building user-friendly web applications with modern tools like React.js
				and Bootstrap, and I'm always looking to learn something new. Over the
				last 8 years, I've solved technical problems as a Product Manager for{" "}
				<a href="https://www.stickk.com/" target="_blank" rel="noreferrer">
					stickK
				</a>{" "}
				and a Technical Support Specialist for{" "}
				<a href="https://meetup.com/" target="_blank" rel="noreferrer">
					Meetup
				</a>
				.
			</p>
		</Jumbotron>
	);
}
