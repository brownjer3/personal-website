import { Component } from "react";
import { projects } from "../data/ProjectData";

export default class Projects extends Component {
	makeProjects = () => {
		return projects.map((project) => {
			return <Project project={project} />;
		});
	};

	render() {
		return (
			<section id="projects">
				<h2 className="section-header">
					<span className="section-number">03. </span>Projects
				</h2>
				{this.makeProjects()}
			</section>
		);
	}
}

const Project = (props) => {
	const { name, desc, image, tech, production, links } = props.project;

	const makeTechList = (list) => {
		return list.map((item) => {
			return <li className="horizontal-item">{item}</li>;
		});
	};

	const makeLinkList = (links) => {
		return Object.keys(links).map((link) => {
			return (
				<li className="horizontal-item">
					<a href={links[link]}>{link}</a>
				</li>
			);
		});
	};

	return (
		<div className="projects-container">
			<img src={image} className="project-image" />
			<div className="project-content">
				<h4>{name}</h4>
				<p className="content-text">{desc}</p>
				<ul className="content-text horizontal-list">{makeTechList(tech)}</ul>
				<ul className="content-text horizontal-list">{makeLinkList(links)}</ul>
			</div>
		</div>
	);
};
