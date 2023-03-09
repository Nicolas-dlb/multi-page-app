import passionate from "../../assets/home/illustration-passionate.svg"
import resourceful from "../../assets/home/illustration-resourceful.svg";
import friendly from "../../assets/home/illustration-friendly.svg";
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