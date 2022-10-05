import Resume from "../data/JB_Temp_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const handleMenuClick = (e) => {
		console.log(e.target.classList);
		const target = e.target.closest(".top-nav");
		if (target.classList.contains("responsive")) {
			target.classList.remove("responsive");
		} else {
			target.classList.add("responsive");
		}
	};

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
			<FontAwesomeIcon
				icon={faBars}
				size="2x"
				className="menu-icon"
				onClick={(e) => handleMenuClick(e)}
			/>
		</div>
	);
};

export default Navbar;
