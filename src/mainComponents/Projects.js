import { Component } from "react";
import { projects } from "../data/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default class Projects extends Component {
	makeProjects = () => {
		return projects.slice(0, 4).map((project, idx) => {
			return <Project project={project} idx={idx} />;
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
	const even = props.idx % 2 === 0;

	const makeTechList = (list, pos) => {
		return list.map((item) => {
			return (
				<li
					className={
						pos === "left" ? "horizontal-item-left" : "horizontal-item-right"
					}
				>
					{item}
				</li>
			);
		});
	};

	const makeLinkList = (links, pos) => {
		return Object.keys(links).map((link) => {
			return (
				<li
					className={
						pos === "left" ? "horizontal-item-left" : "horizontal-item-right"
					}
				>
					<LinkIcon type={link} link={links[link]} />
				</li>
			);
		});
	};

	if (!even) {
		return (
			<div className="projects-container">
				<div className="project-content text-left">
					<h4 className="project-name">{name}</h4>
					<p className="content-text">{desc}</p>
					<ul className="project-tech-list-left">
						{makeTechList(tech, "left")}
					</ul>
					<ul className="project-tech-list-left">
						{makeLinkList(links, "left")}
					</ul>
				</div>
				<img src={image} className="project-image" />
			</div>
		);
	} else {
		return (
			<div className="projects-container reverse-direction">
				<div className="project-content">
					<h4 className="project-name">{name}</h4>
					<p className="content-text">{desc}</p>
					<ul className="project-tech-list-right">
						{makeTechList(tech, "right")}
					</ul>
					<ul className="project-tech-list-right">
						{makeLinkList(links, "right")}
					</ul>
				</div>
				<img src={image} className="project-image" />
			</div>
		);
	}
};

const LinkIcon = (props) => {
	const { type, link } = props;

	const icons = {
		website: faExternalLinkAlt,
		github: faGithub,
		demo: faYoutube,
		blog: faFileAlt,
	};

	return (
		<a href={link} target="_blank">
			<FontAwesomeIcon icon={icons[type]} />
		</a>
	);
};
