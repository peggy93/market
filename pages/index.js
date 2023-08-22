import Head from "next/head";
import TextSliderOne from "../components/common/sliders/text/text-slider-one";
import VideoSectionThree from "../components/common/video/video-section-three";
import FeatureSectionTwo from "../components/home-two/feature-section-two";
import HeroThumbSection from "../components/home-two/hero-thumb-section";
import HomeTwoHeroSection from "../components/home-two/home-two-hero-section";
import TradingSection from "../components/home-two/trading-section";
import TradingSectionTwo from "../components/home-two/trading-section-two";

export default function IndexTwo() {
	return (
		<>
			<Head>
				<title>AiMM</title>
			</Head>
			<HomeTwoHeroSection />
			<HeroThumbSection />
			<TextSliderOne />
			<VideoSectionThree />
			<TradingSection />
			<FeatureSectionTwo />
			<TradingSectionTwo />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "two", footer: "two" } };
}
