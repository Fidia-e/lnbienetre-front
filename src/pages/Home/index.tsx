import React, { FunctionComponent } from "react";

import Logo from "components/SVG/logo";
import Facebook from "components/SVG/facebook";
import Phone from "components/SVG/phone";
import Instagram from "components/SVG/instagram";
import Chevron from "components/SVG/chevron";
import Email from "components/SVG/email";
import Google from "assets/images/google-hero.webp";

const Home: FunctionComponent = () => {
	return (
		<div className="homeContainer">
			<section className="hero">
				<div className="header">
					<div className="icons-container">
						<a className="icon" href="https://www.facebook.com" target="_blank" rel="noreferrer">
							<Facebook className="facebook" color="#faf2e9" width={40} height={40} />
						</a>
						<a className="icon" href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
							<Instagram className="instagram" color="#faf2e9" width={40} height={40} />
						</a>
						<a className="icon" href="tel:+33640382640">
							<Phone className="phone" color="#faf2e9" width={40} height={40} />
						</a>
					</div>
					<div className="logo-container">
						<Logo className="logo" color="#faf2e9" width={120} height={120} />
					</div>
					<div className="google-container">
						<img src={Google} alt="Note Google" width={200} height="auto" />
					</div>
				</div>

				<h1 className="title">
					<span>Drainage</span>
					<span>Post-opératoire & Renata</span>
					<span>Madérothérapie</span>
					<span>Ice Madéro</span>
				</h1>

				<button className="button">Prendre rendez-vous</button>

				<Chevron className="chevron" color="#faf2e9" width={30} height={30} />
			</section>
		</div>
	);
};

export default Home;
