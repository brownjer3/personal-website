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
				<a href="#work" className="navbar-text">
					Work
				</a>
			</div>
			<div className="navbar-link">
				<span className="navbar-number">04.</span>{" "}
				<a href="#misc" className="navbar-text">
					Misc
				</a>
			</div>
			<div className="resume-box">Resume</div>
		</div>
	);
};

export default Navbar;
