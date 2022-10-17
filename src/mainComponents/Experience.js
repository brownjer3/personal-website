import { useState } from "react";
import { jobData } from "../data/JobData";

const Experience = () => {
	const [job, setJob] = useState("stickK");

	const createCompanyList = (jobs) => {
		return Object.keys(jobs).map((company) => {
			return (
				<li
					className={job === company ? "job selected-job" : "job"}
					onClick={() => setJob(company)}
				>
					{company}
				</li>
			);
		});
	};

	return (
		<section id="experience">
			<h2 className="section-header">
				<span className="section-number">02. </span>Experience
			</h2>
			<div className="experience-container">
				<ul className="company-list">{createCompanyList(jobData)}</ul>
				<div className="company-content">
					<JobDetails job={job} />
				</div>
			</div>
		</section>
	);
};

const JobDetails = (props) => {
	const makeBullets = (bullets) => {
		return bullets.map((bullet) => {
			return <li>{bullet}</li>;
		});
	};
	const makeJobDetails = () => {
		const jobs = jobData[props.job];
		return jobs.map((position) => {
			return (
				<div className="job-content">
					<h4 className="position-title">
						{position.title} @{" "}
						<a href={position.link} target="_blank">
							{props.job}
						</a>
					</h4>
					<p className="job-range">{position.years}</p>
					<ul className="content-text">{makeBullets(position.bullets)}</ul>
				</div>
			);
		});
	};
	const { title, years, bullets } = jobData[props.job];

	return makeJobDetails();
};

export default Experience;
