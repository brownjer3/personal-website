import Resume from "../data/JB_Temp_Resume.pdf";

const Navbar = () => {
	return (
		<div className="top-nav">
			<div className="logo">🍎</div>
			<div className="navbar-link">
				<span className="navbar-number">01.</span>{" "}
				<a href="#about" className="navbar-text">
					About
				</a>
			</div>
			<div className="navbar-link">
				<span className="navbar-number">02.</span>{" "}
				<a href="#experience" className="navbar-text">
					Experience
				</a>
			</div>
			<div className="navbar-link">
				<span className="navbar-number">03.</span>{" "}
				<a href="#projects" className="navbar-text">
					Projects
				</a>
			</div>
			<div className="navbar-link">
				<span className="navbar-number">04.</span>{" "}
				<a href="#misc" className="navbar-text">
					Misc
				</a>
			</div>
			<a
				className="resume-box link-text"
				href={Resume}
				target="_blank"
				rel="noopener noreferrer"
				download="Jerry Safter Brown Resume.pdf"
			>
				Resume
			</a>
		</div>
	);
};

export default Navbar;

// <a
// 	className="link-text"
// 	href="path_to_file"
// 	download="proposed_file_name"
// >
// 	Resume
// </a>;

// <div className="resume-box">Resume</div>;
