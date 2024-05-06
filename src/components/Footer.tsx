import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Facebook from "./SVG/Facebook";
import Instagram from "./SVG/Instagram";
import Phone from "./SVG/Phone";
import Email from "./SVG/Email";
import Logo from "./SVG/Logo";
import ReservationButton from "./ReservationButton";

const Footer: FunctionComponent = () => {
	const year = new Date();

	return (
		<div className="footer-container">
			<div className="footer-content">
				<div className="content">
					<div>
						<div className="contentCtn">
							<ReservationButton text="Réserver dès maintenant" />
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
								<a href="mailto:lnbienetre77@gmail.com">
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
						<p className="bold">
              9, Bd Pierre Mendès France
							<br />
              77600 Bussy-Saint-Georges
						</p>
						<p className="block">à 2 min à pied du RER A</p>
						<br />
						<a className="bold" href="mailto:lnbienetre77@gmail.com">
              lnbienetre77@gmail.com
						</a>{" "}
						<br />
						<a className="bold" href="tel:+33749813989">
              +33 7 49 81 39 89
						</a>{" "}
						<br />
						<p className="bold">Lundi au Dimanche de 9h à 18h</p>
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
			</div>
			<div className="credit">
				<p>
          Fait avec ❤️ par{" "}
					<a href="https://fidia.dev/" target="_blank" rel="noreferrer">
						<span className="fidia">Fidia</span>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
