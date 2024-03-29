import React from "react";
import { Link } from "react-router-dom";

import Facebook from "./SVG/Facebook";
import Instagram from "./SVG/Instagram";
import Phone from "./SVG/Phone";
import Email from "./SVG/Email";
import Logo from "./SVG/Logo";

const Footer = () => {
	const year = new Date();

	return (
		<div className="footer-container">
			<div className="footer-content">
				<div className="content">
					<div>
						<div className="contentCtn">
							<button className="button">Réserver dès maintenant</button>
							<div className="footer-icons">
								<a href="https://www.facebook.com/lnbienetre" target="_blank" rel="noreferrer">
									<Facebook className="icon facebook" color="#e6726a" width={40} height={40} />
								</a>
								<a href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
									<Instagram className="icon instagram" color="#e6726a" width={40} height={40} />
								</a>
								<a href="tel:+33749813989">
									<Phone className="icon phone" color="#e6726a" width={40} height={40} />
								</a>
								<a href="mailto:bonjour@lnbienetre.com">
									<Email className="icon email" color="#e6726a" width={40} height={40} />
								</a>
							</div>
							<div className="footer-mentions">
								<Link className="legales-link" to="/mentions-légales">
									<p className="legales-text">Mentions légales</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="contact">
					<div className="footer-infos">
						<p>
              9, Bd Pierre Mendès France <br /> 77600 Bussy-Saint-Georges
						</p>{" "}
						<br />
						<a href="mailto:bonjour@lnbienetre.com">bonjour@lnbienetre.com</a> <br />
						<a href="tel:+33749813989">+33 7 49 81 39 89</a> <br />
						<p>Lundi au Dimanche de 9h à 18h</p>
					</div>
				</div>
				<div className="logo-copyright">
					<div>
						<div className="logo-container">
							<Logo className="logo" color="#e6726a" width={170} height={170} />
							<p className="copyright">© {year.getFullYear()} - Tous droits réservés.</p>
						</div>
					</div>
				</div>
				{/* <img className="legs" src={Legs} alt="Jambes de femmes" width={400} height={250} /> */}
			</div>
			<div className="credit">
				<p>
          Fait avec ❤️ par{" "}
					<a href="https://fidia.dev/">
						<span className="fidia">Fidia</span>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
