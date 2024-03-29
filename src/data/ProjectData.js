import nftImage from "../images/nft-cal-thumbnail.png";
import cadenceImage from "../images/cadence-thumbnail.png";
import projectImage from "../images/projectMode-thumbnail.png";
import driveImage from "../images/drive-thumbnail.png";
import dfvImage from "../images/dfv-thumbnail.png";
import stickkPlaiground from "../images/stickK-plAIground.png";

export const projects = [
	{
		name: "stickK plAIground",
		desc: "A menu of prototypes built for stickK using the OpenAI Assistant’s API",
		tech: ["React", "TypeScript", "OpenAI API"],
		image: stickkPlaiground,
		production: true,
		links: {
			website: "https://stickk-plaiground.vercel.app/",
		},
	},
	{
		name: "Deep Fungible Value",
		desc: "A web application for collectors to browse and analyze the rarity of NFT’s on GameStop's NFT Marketplace",
		tech: ["React", "Redux", "Postgres", "Netlify"],
		image: dfvImage,
		production: true,
		links: {
			website: "http://deepfungiblevalue.io/",
		},
	},
	{
		name: "NFT Drop Caldendar",
		desc: "A crowdsourced calendar to track upcoming Non-Fungible Token releases",
		tech: ["React", "Redux", "Ruby on Rails"],
		image: nftImage,
		production: false,
		links: {
			github: "https://github.com/brownjer3/nft-drop-calendar",
			blog: "https://brownjer3.medium.com/gettin-nifty-with-react-js-80cb8615bc0",
			demo: "https://youtu.be/uMNPCzoiIww",
		},
	},
	{
		name: "Cadence Tunes",
		desc: "A playlist builder for runners that uses the Spotify API to recommend songs with tempos that match a target running cadence and preferred music genres",
		tech: ["JavaScript", "Ruby on Rails", "Spotify API"],
		image: cadenceImage,
		production: false,
		links: {
			github: "http://github.com/brownjer3/cadence-tunes-v2",
			blog: "https://medium.com/nerd-for-tech/running-playlist-builder-ft-dj-spotify-recs-cc96fd920d75",
			demo: "http://youtu.be/wRhMecMOHQw",
		},
	},
	{
		name: "Flatiron Project Mode",
		desc: "A social platform for Flatiron School students to share, discover, and engage with projects and their creators",
		tech: ["Ruby", "Rails"],
		image: projectImage,
		production: false,
		links: {
			github: "http://github.com/brownjer3/ProjectMode",
			blog: "https://brownjer3.medium.com/projectception-4e3001668d3a",
			demo: "http://youtu.be/JRpuGSE3o1U",
		},
	},
	{
		name: "Drive My Car",
		desc: "A platform to connect people who need their car relocated across a long distance with drivers willing to help",
		tech: ["Ruby", "Sinatra"],
		image: driveImage,
		production: false,
		links: {
			github: "https://github.com/brownjer3/drive-my-car",
			blog: "https://brownjer3.medium.com/location-location-location-b6ed31ede71e",
			demo: "https://www.youtube.com/watch?v=biFK6HEu2kg",
		},
	},
];
