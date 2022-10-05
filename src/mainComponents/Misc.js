import { miscData } from "../data/MiscData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Misc = () => {
	const createItems = (items) => {
		const courses = [];
		return items.map((item) => {
			if (item.organization === "Courses") {
				return (
					<div className="misc-item">
						<p className="content-text misc-header">
							<span>
								<FontAwesomeIcon icon={item.icon} className="misc-icon" />
								{item.organization}
							</span>
						</p>
						<ul className="course-list">
							{item.courses.map((course) => {
								return (
									<li className="content-text">
										<span className="course-details">
											{course.organization}:{" "}
										</span>
										<span className="course-title">{course.title}</span>
									</li>
								);
							})}
						</ul>
					</div>
				);
			} else {
				return (
					<div className="misc-item">
						<p className="content-text misc-header">
							<span className="misc-org">
								<FontAwesomeIcon icon={item.icon} className="misc-icon" />
								{item.organization}
							</span>
							<span>{item.year}</span>
						</p>
						<span className="misc-title">{item.title}</span>
						<p className="content-text">{item.desc}</p>
					</div>
				);
			}
		});
	};

	return (
		<section id="misc">
			<h2 className="section-header">
				<span className="section-number">04.</span>Misc
			</h2>
			<div className="misc-container">{createItems(miscData)}</div>
		</section>
	);
};

export default Misc;
