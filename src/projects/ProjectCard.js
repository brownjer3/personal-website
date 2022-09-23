import { Component } from "react";
import { Col, Image } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class ProjectCard extends Component {
	render() {
		return (
			<Col className="project-card">
				<div className="overlayContainer">
					{this.props.production && (
						<div className="production-badge text-primary">
							<FontAwesomeIcon icon={faCheckCircle} />
							<span className="badge-text">Live</span>
						</div>
					)}
					<Image
						src={this.props.image}
						fluid
						rounded
						className="border project-img"
					/>
					<div class="overlay border border-success rounded">
						<ProjectDetails {...this.props} />
					</div>
				</div>
			</Col>
		);
	}
}
