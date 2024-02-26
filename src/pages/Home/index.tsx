import React, { FunctionComponent } from "react";

import Logo from "assets/images/SVG/logo";
import Facebook from "assets/images/SVG/facebook";
import Phone from "assets/images/SVG/phone";
import Instagram from "assets/images/SVG/instagram";
import Chevron from "assets/images/SVG/chevron";
// import Email from "components/SVG/email";
import Google from "assets/images/google-hero.webp";

const Home: FunctionComponent = () => {
	return (
		<div className="homeContainer">
			<section className="hero">
				<div className="header">
					<div className="icons-container">
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
							<Facebook className="icon facebook" width={40} height={40} />
						</a>
						<a href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
							<Instagram className="icon instagram" width={40} height={40} />
						</a>
						<a href="tel:+33749813989">
							<Phone className="icon phone" width={40} height={40} />
						</a>
					</div>
					<div className="logo-container">
						<Logo className="logo" color="#faf2e9" width={120} height={120} />
					</div>
					<div className="google-container">
						<a
							href="https://www.google.com/search?sca_esv=72ff9969706166be&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCupz22t2q970qFkC0TyWMZNbWfb9xzDtJD1k5k2KyB7DpOSXrMNLvXfJW3TlysoxKz1djDKW5lAuzBD_MIRNUgZ-Z-uOZxA7FnXd88m1kJCzv8n5JJ&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9Sf2X-1Wvr63GIerjMoMTeh9Vjiq75ndlkYsn94Ediln06ahfeA%3D&q=LN+Bien-Etre+-+Maderotherapie,+drainage+post-operatoire+et+Renata,+ice+madero+Avis&sa=X&ved=2ahUKEwiN0tH8gcWEAxWjVaQEHflzDyQQ3PALegQIShAF&biw=1920&bih=959&dpr=1"
							target="_blank"
							rel="noreferrer"
						>
							<img className="google" src={Google} alt="Note Google" width={200} height="auto" />
						</a>
					</div>
				</div>

				<div className="logo-container-mobile">
					<Logo className="logo" color="#faf2e9" width={120} height={120} />
				</div>

				<h1 className="title">
					<span>Drainage</span>
					<span>Post-opératoire & Renata</span>
					<span>Madérothérapie</span>
					<span>Ice Madéro</span>
				</h1>

				<button className="button">Prendre rendez-vous</button>

				<Chevron color="#faf2e9" width={25} height={25} />
			</section>
		</div>
	);
};

export default Home;
