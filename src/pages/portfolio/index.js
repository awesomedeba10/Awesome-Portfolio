import Link from "next/link";
import { useEffect } from "react";

// import { userData } from "../../utils/pageData";
import UnderDevelopment from "../../components/UnderDevelopmentBlock";

// import initAboutImports from "../../utils/imports/aboutInit";

// import EducationAreaBlock from "../../components/EducationAreaBlock";
// import ExperienceAboutPageBlock from "../../components/ExperienceAboutPageBlock";
// import SocialProfileList from "../../components/SocialProfileList";

export default function Home() {
	useEffect(() => {
		// initAboutImports();
	}, []);

	return (
        <UnderDevelopment></UnderDevelopment>
	);
}

Home.pageProps = {
	title: "Portfolio",
	redirectBackTo: "Home",
	redirectBackHref: "/",
};

