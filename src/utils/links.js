import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaArrowsAltH } from "react-icons/fa";
import {FaWallet } from "react-icons/fa";
import {FaWeightHanging } from "react-icons/fa";
import {FaUniversity } from "react-icons/fa";
import {FaRegFilePowerpoint } from "react-icons/fa";
import {FaChartBar } from "react-icons/fa";

export const social = [
	{ id: 1, icon: <FaTwitter /> },
	{ id: 2, icon: <FaTelegramPlane /> },
	{ id: 3, icon: <FaDiscord /> },
	{ id: 4, icon: <FaMediumM /> },
	{ id: 5, icon: <FaGithub /> },
];

export const links = [
	{ id: 1, text: "Trade", path: "/trade", icon:<FaArrowsAltH/>  },
	{ id: 2, text: "assets", path: "my-positions", icon: <FaWallet/> },
	{ id: 3, text: "Farm", path: "swap", icon:<FaWeightHanging/> },
	{ id: 4, text: "Govern", path: "lend", icon:<FaUniversity/> },
	{ id: 5, text: "Portfolio", path: "mint", icon:<FaRegFilePowerpoint/> },
	{ id: 6, text: "Stats", path: "auctions" , icon:<FaChartBar/>},
	
];
