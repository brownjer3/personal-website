import Image from "react-bootstrap/Image";
import headshot from "../images/headshot.png";

export default function AboutMe() {
	return (
		<section id="about" className="about">
			<div className="about-left">
				<h2 className="primary-text">
					<span className="blue-text">01. </span>About
				</h2>
				<div>
					<p className="content-text">
						I'm a Software Engineer currently based in Southern California. I
						like building React applications that prioritize speed and user
						experience, and I'm always looking to learn something new. Over the
						last 8 years, I've solved technical problems as a Product Manager
						for{" "}
						<a href="https://www.stickk.com/" target="_blank" rel="noreferrer">
							stickK
						</a>{" "}
						and a Technical Support Specialist for{" "}
						<a href="https://meetup.com/" target="_blank" rel="noreferrer">
							Meetup
						</a>
					</p>
					<p className="content-text">
						For the past year, I've been engrained in the web3 space as a
						builder and NFT collector. I recently launched{" "}
						<a
							href="https://deepfungiblevalue.io"
							target="_blank"
							rel="noreferrer"
						>
							Deep Fungible Value
						</a>
						, a free tool rarity tool for the GameStop NFT community. I'm
						currently spearheading frontend development for a custom NFT
						merchandise Ecommerce storefront and an upcoming NFT collection
						website.
					</p>
					<p className="content-text">
						In my free time, I am learning Solidity with the aim of authoring
						smart contracts in the near future. I also enjoy playing chess,
						pickleball, and swimming.
					</p>
					<p className="content-text">
						Here are a few technologies I've been working with recently:
					</p>
					<ul className="content-text tech-list">
						<li>JavaScript (ES6+)</li>
						<li>React</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Ruby</li>
						<li>Solidity</li>
					</ul>
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
		</section>
	);
}
