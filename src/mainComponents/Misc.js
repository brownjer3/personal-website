import { miscData } from "../data/MiscData";

const Misc = () => {
	const createItems = (items) => {
		return items.map((item) => {
			return (
				<div className="misc-item">
					<p className="content-text misc-header">
						<span>{item.organization}</span>
						<span>{item.year}</span>
					</p>
					<span>{item.title}</span>
					<p className="content-text">{item.desc}</p>
				</div>
			);
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
