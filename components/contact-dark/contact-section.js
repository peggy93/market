/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function ContactSection() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="fugu--contact-section">
			<div className="row">
				<div className="col-lg-5">
					<div className="fugu--contact-info">
						<h4>Reach out to us at:</h4>
						<ul>
							<li>
								<Link href={"#"}>
									<span>
										<img src="/images/svg2/phone2.svg" alt="" />
									</span>
									+008-245-5667
								</Link>
							</li>
							<li>
								<Link href={"#"}>
									<span>
										<img src="/images/svg2/mail2.svg" alt="" />
									</span>
									aimarketmakerio@gmail.com
								</Link>
							</li>
							<li>
								<Link href={"#"}>
									<span>
										<img src="/images/svg2/map2.svg" alt="" />
									</span>
									389 Ranchview, California 62639
								</Link>
							</li>
						</ul>
					</div>
					<div className="fugu--contact-info fugu--contact-info2">
						<h4>Opening hours:</h4>
						<ul>
							<li>
								<Link href={"#"}>
									<span>
										<img src="/images/svg2/clock.svg" alt="" />
									</span>
									Monday to Thursday: 7:00 – 15:00 Friday to Saturday: 7:00 – 15:00 Sunday: CLOSED
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="fugu--contact-form wow fadeInUpX" data-wow-delay="0.15s">
						<h3>YOUR CONTACTS</h3>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="fugu--comment-field">
								<input
									type="email"
									placeholder="Email*"
									{...register("name", { required: true })}
									aria-invalid={errors.name ? "true" : "false"}
								/>
								{errors.name?.type === "required" && (
									<p role="alert" className="error">
										Email Not Valid
									</p>
								)}
								</div>
									<div className="fugu--comment-field">
								<input
									type="telegram"
									placeholder="Telegram Id*"
									{...register("name", { required: true })}
									aria-invalid={errors.name ? "true" : "false"}
								/>
								{errors.name?.type === "required" && (
									<p role="alert" className="error">
										@ is required
									</p>
								)}
							</div>
							<div className="fugu--comment-field">
								<input
									type="website"
									placeholder="Website*"
									{...register("email", { required: true })}
									aria-invalid={errors.email ? "true" : "false"}
								/>
								{errors.email?.type === "required" && (
									<p role="alert" className="error">
										Email is required
									</p>
								)}
						
							</div>
							<button id="fugu--form-submit-btn" type="submit">
								Sent
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
