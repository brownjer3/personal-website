import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

export const miscData = [
	{
		organization: "Courses",
		icon: faGraduationCap,
		courses: [
			{
				title: "Ethereum and Solidity: The Complete Developer's Guide",
				organization: "Udemy",
				year: "2022",
				icon: "",
			},
			{
				title: "JavaScript Algorithms and Data Structures Masterclass",
				organization: "Udemy",
				year: "2022",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				icon: "",
			},
			{
				title: "Blockchain Essentials: An Introduction to Blockchain",
				organization: "ConsenSys Academy",
				year: "2021",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				icon: "",
			},
		],
	},
	{
		title: "Ironman Madison Finisher",
		organization: "Ironman Foundation",
		year: "2021",
		desc: "Raised $3,500 for the Ironman Foundation and completed the course with a time of 14:14:14",
		icon: faRunning,
	},
	{
		title: "Full-Stack Engineering Bootcamp",
		organization: "Flatiron School",
		year: "2021",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon: faCode,
	},
	{
		title: "Men's Soccer Captain",
		organization: "Grinnell College",
		year: "2014",
		desc: "My Senior year, I was elected team captain by my teammates.",
		icon: faFutbol,
	},
	{
		title: "Men's Soccer Academic All-Conference Player",
		organization: "Grinnell College",
		year: "2014",
		desc: "My Senior year, I was elected team captain by my teammates.",
		icon: faAward,
	},
	{
		title: "Men's Swimming Record Holder",
		organization: "Grinnell College",
		year: "2013",
		desc: "My Junior year, I was the first leg of the 400 yard freestyle relay that set a new school record with a time of 3:06.74.",
		icon: faSwimmer,
	},
	{
		title: "Eagle Scout",
		organization: "Boy Scouts of America",
		year: "2008",
		desc: "Over the course of 10 years, I rose through the Boy Scout ranks to acheive Eagle Scout.",
		icon: faCampground,
	},
];
