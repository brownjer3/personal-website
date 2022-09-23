import { Row, Button, Container } from "react-bootstrap";

export default function ProjectDetails({ ...props }) {
	const buttonLabels = {
		website: "Visit website",
		blog: "Read blog post",
		github: "View source code",
		demo: "Watch demo",
	};

	const makeButtons = (links) => {
		return Object.keys(links).map((link) => {
			return (
				<Button variant="success" href={links[link]} target="_blank" size="sm">
					{buttonLabels[link]}
				</Button>
			);
		});
	};

	return (
		<Container
			fluid
			className="project-details d-flex flex-column justify-content-around"
		>
			<h3 className="text-responsive">{props.name}</h3>
			<p className="text-responsive">{props.desc}</p>
			<Row className="d-flex justify-content-around">
				{makeButtons(props.links)}
			</Row>
		</Container>
	);
}
