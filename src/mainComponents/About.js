import Image from "react-bootstrap/Image";
import headshot from "../images/headshot.png";

export default function About() {
	return (
		<section id="about">
			<h2 className="primary-text section-header">
				<span className="blue-text section-number">01.</span> About
			</h2>
			<div className="about">
				<div className="about-left">
					<div>
						<p className="content-text">
							I'm a Software Engineer currently based in Southern California.
							Over the last 8 years, I've solved technical problems as a Product
							Manager for{" "}
							<a
								href="https://www.stickk.com/"
								target="_blank"
								rel="noreferrer"
							>
								stickK
							</a>{" "}
							and a Technical Support Specialist for{" "}
							<a href="https://meetup.com/" target="_blank" rel="noreferrer">
								Meetup.
							</a>
						</p>
						<p className="content-text">
							Throughout my time at Meetup at stickK, I learned that I loved
							diving into how our products functioned technically. I pushed
							myself to become more technically-fluent by taking web development
							courses and taking on more technical work. After teaching myself
							HTML, CSS, and JavaScript, I started building projects in my free
							time and was hooked on coding. At the end of 2020, I decided to
							pursue Software Engineering Full-Time and enrolled in Flatiron's
							Full-Stack Engineering Bootcamp where I honed my HTML, CSS and
							JavaScript knowledge, and added React, Ruby, and Ruby on Rails to
							my arsenal.
						</p>
						<p className="content-text">
							Since graduating from Flatiron, I've been engrained in the Web3
							space as a builder and NFT collector. I recently launched{" "}
							<a
								href="https://deepfungiblevalue.io"
								target="_blank"
								rel="noreferrer"
							>
								Deep Fungible Value
							</a>
							, a free rarity tool for the GameStop NFT community. I'm currently
							spearheading frontend development for a custom NFT merchandise
							Ecommerce storefront and an upcoming NFT collection website.
						</p>
						<p className="content-text">
							In my free time, I am learning Solidity with the aim of authoring
							smart contracts in the near future. I also enjoy playing chess,
							pickleball, and swimming.
						</p>
						<p className="content-text">
							Here are a few technologies I've been working with recently:
						</p>
						<div className="tech-lists-container">
							<ul className="about-tech-list">
								<li>React</li>
								<li>JavaScript (ES6+)</li>
								<li>HTML5</li>
							</ul>
							<ul className="about-tech-list">
								<li>CSS3</li>
								<li>Ruby</li>
								<li>Solidity</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="headshot-container">
					<a
						href="https://www.linkedin.com/in/jerry-brown-/"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={headshot} fluid className="border headshot" />
					</a>
				</div>
			</div>
		</section>
	);
}
