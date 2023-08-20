import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HomeTwoHeroSection() {
	return (
		<div className="fugu-hero-section2">
			<div className="container">
				<div className="fugu-hero-content fugu-hero-content2">
					<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Ai Market Maker For Your Cryptocurrency Market

					</h1>
					<p className="wow fadeInUpX" data-wow-delay="0.25s">
					Use our liquidity and proprietary software to generate organic trading volumes, control the volatility and keep the low spreads for your tokens.
					</p>
					<div className="fugu-hero-btn-wrap wow fadeInUpX" data-wow-delay="0.40s">
						<Link href="contact" legacyBehavior>
							<a className="fugu-btn fugu-round-btn active">Get Started</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="fugu-shape4">
				<img src="/images/shape/shape3.png" alt="" />
			</div>
			<div className="fugu-shape5">
				<img src="/images/shape/shape4.png" alt="" />
			</div>
		</div>
	);
}
