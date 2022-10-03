import { Component } from "react";
import { projects } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default class Projects extends Component {
	// makeProjects = () => {
	// 	return projects.map((project) => {
	// 		return <ProjectCard {...project} />;
	// 	});
	// };

	render() {
		return (
			<section id="projects">
				<h2 className="section-header">
					<span className="blue-text">03. </span>Projects
				</h2>
				<div className="projects-container">
					<img src={projects[0].image} className="project-image" />
					<div className="project-content">
						<h4>Deep Fungible Value</h4>
						<p className="content-text">{projects[0].desc}</p>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">React</li>
							<li className="horizontal-item">Redux</li>
							<li className="horizontal-item">Bootstrap</li>
							<li className="horizontal-item">Netlify</li>
						</ul>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">Link 1</li>
							<li className="horizontal-item">Link 2</li>
						</ul>
					</div>
				</div>
				<div className="projects-container">
					<div className="project-content text-left">
						<h4>NFT Drop Calendar</h4>
						<p className="content-text">{projects[1].desc}</p>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">React</li>
							<li className="horizontal-item">Redux</li>
							<li className="horizontal-item">Bootstrap</li>
						</ul>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">Link 1</li>
							<li className="horizontal-item">Link 2</li>
						</ul>
					</div>
					<img src={projects[1].image} className="project-image" />
				</div>
				<div className="projects-container">
					<img src={projects[2].image} className="project-image" />
					<div className="project-content">
						<h4>Cadence Tunes</h4>
						<p className="content-text">{projects[2].desc}</p>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">Javascript</li>
							<li className="horizontal-item">Spotify API</li>
						</ul>
						<ul className="content-text horizontal-list">
							<li className="horizontal-item">Link 1</li>
							<li className="horizontal-item">Link 2</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

// <section id="experience" className="border">
// 	<h2 className="section-header">
// 		<span className="blue-text">02. </span>Where I've Worked
// 	</h2>
// 	<div className="experience-container">
// 		<div className="company-list">
// 			<li>stickK</li>
// 			<li>Meetup</li>
// 		</div>
// 		<div className="job-content">
// 			<h4>Product Manager @ stickK</h4>
// 			<p className="content-text">2017 - present</p>
// 			<ul className="content-text">
// 				<li>bullet point #1</li>
// 				<li>bullet point #2</li>
// 				<li>bullet point #3</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>;

// <Row className="projects" xs={1} lg={2} noGutters>
// 	{this.makeProjects()}
// </Row>;
