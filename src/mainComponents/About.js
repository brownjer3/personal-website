import Image from "react-bootstrap/Image";
import headshot from "../images/headshot.png";

export default function About() {
	return (
		<section id="about">
			<h2 className="primary-text section-header">
				<span className="section-number">01.</span> About
			</h2>
			<div className="about">
				<div class="headshot-container">
					<a
						href="https://www.linkedin.com/in/jerry-brown-/"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={headshot} fluid className="border headshot" />
					</a>
				</div>
				<div className="about-left">
					<div>
						<p className="content-text">
							I'm a Software Engineer currently based in Chicago, IL. With over
							10 years in the tech industry, my journey has been diverse and
							enriching. Initially, I tackled challenges as a Product Manager at{" "}
							<a
								href="https://www.stickk.com/"
								target="_blank"
								rel="noreferrer"
							>
								stickK
							</a>{" "}
							and a Technical Support Specialist at{" "}
							<a href="https://meetup.com/" target="_blank" rel="noreferrer">
								Meetup.
							</a>{" "}
							My curiosity about how products function technically led me down a
							path of continuous learning and growth.
						</p>
						<p className="content-text">
							During my tenure at Meetup and stickK, my fascination with the
							technical aspects of our products grew. I committed to enhancing
							my technical skills, pursuing web development courses and engaging
							in more technically demanding projects. This self-driven education
							in HTML, CSS, and JavaScript led to a passion for building
							projects in my spare time. Motivated by this newfound passion, I
							transitioned to Software Engineering full-time at the end of 2020,
							enrolling in Flatiron's Full-Stack Engineering Bootcamp. There, I
							deepened my understanding of HTML, CSS, and JavaScript, and
							expanded my skill set to include React, Ruby, and Ruby on Rails.
						</p>
						<p className="content-text">
							Post-graduation, I immersed myself in the Web3 space, contributing
							as a builder and participating as an NFT collector. I launched{" "}
							<a
								href="https://deepfungiblevalue.io"
								target="_blank"
								rel="noreferrer"
							>
								Deep Fungible Value
							</a>
							, a free rarity tool for the GameStop NFT community. I've also
							been at the forefront of frontend development for a bespoke NFT
							merchandise E-commerce storefront and an upcoming NFT collection
							website.
						</p>
						<p className="content-text">
							In the past year, I rejoined stickK as a Software Engineer,
							leveraging my expanded skill set to contribute to more complex and
							impactful projects. This role has allowed me to blend my technical
							expertise with my deep understanding of the product, enhancing
							both the user experience and the technical robustness of our
							solutions.
						</p>
						<p className="content-text">
							In my personal time, I'm furthering my blockchain expertise by
							learning Solidity, with the goal of authoring smart contracts.
							Beyond the world of coding, I enjoy playing chess, pickleball, and
							swimming.
						</p>
						<p className="content-text">
							Here are a few technologies I've been working with recently:
						</p>
						<div className="tech-lists-container">
							<ul className="about-tech-list">
								<li>JavaScript</li>
								<li>React.js</li>
								<li>Typescript.js</li>
							</ul>
							<ul className="about-tech-list">
								<li>Next.js</li>
								<li>PHP</li>
								<li>Node.js</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
