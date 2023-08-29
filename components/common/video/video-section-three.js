/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function TradingSection() {
	return (
		<div className="section bg-warning-100 fugu-section-padding overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-trading-card">
							<div className="fugu-trading-card-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay="0s"
									src="/images/all-img/v2/card1.png"
									alt=""
								/>
								<div className="fugu-trading-card-thumb2">
									<img
										className="wow fadeInLeft"
										data-wow-delay="0.20s"
										src="/images/all-img/v2/card2.png"
										alt=""
									/>
								</div>
								<div className="fugu-shape6">
									<img src="/images/shape/shape5.png" alt="" />
								</div>
								<div className="fugu-shape7">
									<img src="/images/shape/shape6.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content z-index">
							<h2>Ai Market Maker Advantages</h2>
							
							<div className="fugu-icon-list fugu-icon-list3">
								<ul>
									<li>
										<img src="/images/svg/check2.svg" alclasst="" />
										Dashboard
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										60+ Connected Exchanges
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										24/7 Support
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Education + Personal Trader
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Positive ratings Coinmarketcap & Coingecko
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Best Price
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
