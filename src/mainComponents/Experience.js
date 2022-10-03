import { useState } from "react";
import { jobData } from "../data/JobData";

const Experience = () => {
	const [job, setJob] = useState("stickK");

	return (
		<section id="experience">
			<h2 className="section-header">
				<span className="blue-text">02. </span>Experience
			</h2>
			<div className="experience-container">
				<div className="company-list">
					<li
						className={job === "stickK" ? "job blue-text" : "job"}
						onClick={() => setJob("stickK")}
					>
						stickK
					</li>
					<li
						className={job === "Meetup" ? "job blue-text" : "job"}
						onClick={() => setJob("Meetup")}
					>
						Meetup
					</li>
				</div>
				<div>
					<JobDetails job={job} />
				</div>
			</div>
		</section>
	);
};

const JobDetails = (props) => {
	const makeJobDetails = () => {
		const jobs = jobData[props.job];
		return jobs.map((position) => {
			return (
				<div className="job-content">
					<h4>{position.title}</h4>
					<p className="content-text">{position.years}</p>
					<ul className="content-text">
						<li>{position.bullets[0]}</li>
						<li>{position.bullets[1]}</li>
						<li>{position.bullets[2]}</li>
					</ul>
				</div>
			);
		});
	};
	const { title, years, bullets } = jobData[props.job];

	return makeJobDetails();
};

export default Experience;
