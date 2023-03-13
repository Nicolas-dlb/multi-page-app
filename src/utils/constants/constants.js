import passionate from "../../assets/home/illustration-passionate.svg"
import resourceful from "../../assets/home/illustration-resourceful.svg";
import friendly from "../../assets/home/illustration-friendly.svg";
import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { ReactComponent as facebook } from "../../assets/shared/desktop/icon-facebook.svg"
import { ReactComponent as youtube } from "../../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as pinterest } from "../../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as instagram } from "../../assets/shared/desktop/icon-instagram.svg";

export const navLinks = [
	{
		name: "our company",
		path: "/about",
	},
	{
		name: "locations",
		path: "/locations",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

export const values = [
	{
		name: "Passionate",
		img: passionate,
		description:
			"Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
	},
	{
		name: "Resourceful",
		img: resourceful,
		description:
			"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
	},
	{
		name: "Friendly",
		img: friendly,
		description:
			"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
	},
];

export const countries = [{
	name: "Canada",
	illustration: canada
},{
	name: "Australia",
	illustration: australia
},{
	name: "United Kingdom",
	illustration: unitedKingdom
}]

export const about = {
	worldClassTalent: {
		title: "World-class talent",
		firstParagraph:
			"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
		secondParagraph:
			"Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.",
	},
	theRealDeal: {
		title: "The real deal",
		firstParagraph:
			"As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
		secondParagraph:
			"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
	},
};

export const locations = [
	{
		country: "Canada",
		symbol: "Central",
		street: "3886 Wellington Street",
		city: "Toronto, Ontario M9C 3J5",
		phone: "+1 25-863-8967",
		mail: "contact@designo.co",
	},
	{
		country: "Australia",
		symbol: "AU",
		street: "19 Balonne Street",
		city: "New South Wales 2443",
		phone: "(02) 6720 9092",
		mail: "contact@designo.au",
	}
	,
	{
		country: "United Kingdom",
		symbol: "UK",
		street: "13 Colorado Way",
		city: "Rhyd-y-fro SA8 9GA",
		phone: "078 3115 1400",
		mail: "contact@designo.uk",
	},
];

export const projects = {
	web: [
		{
			name: "Express",
			description: "A multi-carrier shipping website for ecommerce businesses",
		},
		{
			name: "Transfer",
			description:
				"Site for low-cost money transfers and sending money within seconds",
		},
		{
			name: "Photon",
			description:
				"A state-of-the-art music player with high-resolution audio and DSP effects",
		},
		{
			name: "Builder",
			description:
				"Connects users with local contractors based on their location",
		},
		{
			name: "Blogr",
			description:
				"Blogr is a platform for creating an online blog or publication",
		},
		{
			name: "Camp",
			description:
				"Get expert training in coding, data, design, and digital marketing",
		},
	],
	app: [
		{
			name: "Airfilter",
			description:
				"Solving the problem of poor indoor air quality by filtering the air",
		},
		{
			name: "Eyecam",
			description:
				"Product that lets you edit your favorite photos and videos at any time",
		},
		{
			name: "Faceit",
			description:
				"Get to meet your favorite internet superstar with the faceit app",
		},
		{
			name: "Todo",
			description:
				"A todo app that features cloud sync with light and dark mode",
		},
		{
			name: "Loopstudios",
			description: "A VR experience app made for Loopstudios",
		},
	],
	graphic: [
		{
			name: "Tim brown",
			description:
				"Solving the problem of poor indoor air quality by filtering the air",
		},
		{
			name: "Boxed water",
			description: "A simple packaging concept made for Boxed Water",
		},
		{
			name: "Science!",
			description:
				"A poster made in collaboration with the Federal Art Project",
		},
	],
};

export const categories = [
	{ name: "Web Design", description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences." },
	{ name: "App Design", description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."},
	{ name: "Graphic Design", description: "We deliver eye-catching branding materials that are tailored to meet your business objectives." },
];

export const socialMedia = [
	{
		name: "Facebook",
		icon: facebook,
	},
	{
		name: "Youtube",
		icon: youtube,
	},
	{
		name: "Twitter",
		icon: twitter,
	},
	{
		name: "Pinterest",
		icon: pinterest,
	},
	{
		name: "instagram",
		icon: instagram,
	},
];