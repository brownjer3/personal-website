import { useState } from "react";

const Experience = () => {
	const [company, setCompany] = useState("stickK");

	return (
		<section id="experience">
			<h2 className="section-header">
				<span className="blue-text">02. </span>Where I've Worked
			</h2>
			<div className="experience-container">
				<div className="company-list">
					<li>stickK</li>
					<li>Meetup</li>
				</div>
				<div className="job-content">
					<h4>Product Manager @ stickK</h4>
					<p className="content-text">2017 - present</p>
					<ul className="content-text">
						<li>bullet point #1</li>
						<li>bullet point #2</li>
						<li>bullet point #3</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experience;
