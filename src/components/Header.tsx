import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import TinyLogo from "assets/images/tiny-logo.webp";
import Facebook from "components/SVG/Facebook";
import Phone from "components/SVG/Phone";
import Instagram from "components/SVG/Instagram";
import Email from "components/SVG/Email";
import Google from "assets/images/google-black-1.webp";
import Logo from "components/SVG/Logo";

const Header = () => {
	const [fixed, setFixed] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const reviewsUrl =
    "https://www.google.com/search?sca_esv=72ff9969706166be&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCupz22t2q970qFkC0TyWMZNbWfb9xzDtJD1k5k2KyB7DpOSXrMNLvXfJW3TlysoxKz1djDKW5lAuzBD_MIRNUgZ-Z-uOZxA7FnXd88m1kJCzv8n5JJ&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9Sf2X-1Wvr63GIerjMoMTeh9Vjiq75ndlkYsn94Ediln06ahfeA%3D&q=LN+Bien-Etre+-+Maderotherapie,+drainage+post-operatoire+et+Renata,+ice+madero+Avis&sa=X&ved=2ahUKEwiN0tH8gcWEAxWjVaQEHflzDyQQ3PALegQIShAF&biw=1920&bih=959&dpr=1";

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const toggleVisible = () => {
		const scrollPosition = window.scrollY;
		const isScrolledPastTheScreen = scrollPosition > screenHeight;
		setFixed(isScrolledPastTheScreen);
	};

	//^ --------------------------------- SCROLL TO SECTION --------------------------------- ^//

	const scrollWithOffsetTo50 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -50;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const scrollWithOffsetTo70 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -70;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const scrollWithOffsetTo100 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -100;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const scrollWithOffsetTo120 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -120;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const scrollWithOffsetTo150 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -150;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	//^ ------------------------------------------------------------------------------------- ^//

	// revenir en haut de page et fermer le menu
	const toggleHomeLink = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setIsMenuVisible(false);
	};

	// fermer le menu et passer isChecked à false
	const handleNavigationVisibility = () => {
		setIsMenuVisible(false);
		setIsChecked(false);
	};

	// bloquer et réactiver le scroll à l'ouverture et fermeture du menu mobile
	if (isMenuVisible) {
		document.body.style.overflowY = "hidden";
	} else {
		document.body.style.overflowY = "unset";
	}

	window.addEventListener("scroll", toggleVisible);

	return screenWidth <= 1199 ? (
		<header className={fixed ? "header-container header-container-fixed" : "header-container"}>
			<div className="navigation">
				<NavLink to="/" className="logo-container" onClick={() => toggleHomeLink()}>
					<div className="logo-imageCtn">
						<img src={TinyLogo} alt="Logo du site Hélène Bien-Être" width={40} height={40} />
					</div>
				</NavLink>

				<div className="icons-google-container">
					<div className="icons-container">
						<a href="https://www.facebook.com/lnbienetre" target="_blank" rel="noreferrer">
							<Facebook className="icon facebook" width={30} height={30} />
						</a>
						<a href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
							<Instagram className="icon instagram" width={30} height={30} />
						</a>
						<a href="tel:+33749813989">
							<Phone className="icon phone" width={30} height={30} />
						</a>
						<a href="mailto:bonjour@lnbienetre.com">
							<Email className="icon email" width={30} height={30} />
						</a>
					</div>
				</div>

				<input type="checkbox" id="idCheckbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} />

				<label id="burger" htmlFor="idCheckbox" onClick={() => setIsMenuVisible(!isMenuVisible)}>
					<div className="burger top" />
					<div className="burger middle" />
					<div className="burger bottom" />
				</label>
			</div>

			<ul className={isMenuVisible ? "nav-list-active" : "nav-list"}>
				<a href={reviewsUrl} target="_blank" rel="noreferrer">
					<img className="google" src={Google} alt="Note Google" width={150} height="auto" />
				</a>
				<li className="nav-item">
					<HashLink
						smooth
						to="/"
						onClick={() => {
							toggleHomeLink();
							handleNavigationVisibility();
						}}
					>
            Accueil
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#tarifs-et-préstations"
						onClick={() => {
							setIsMenuVisible(false);
							handleNavigationVisibility();
						}}
					>
            Tarifs & Préstations
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#à-propos"
						onClick={() => handleNavigationVisibility()}
						scroll={el => scrollWithOffsetTo50(el)}
					>
            À propos
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#faq"
						onClick={() => handleNavigationVisibility()}
						scroll={el => scrollWithOffsetTo50(el)}
					>
            FAQ
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#avis"
						onClick={() => handleNavigationVisibility()}
						scroll={el => scrollWithOffsetTo70(el)}
					>
            Avis
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#avant-après"
						onClick={() => handleNavigationVisibility()}
						scroll={el => scrollWithOffsetTo50(el)}
					>
            Avant / Après
					</HashLink>
				</li>

				<li className="nav-item">
					<HashLink
						smooth
						to="/#contact"
						onClick={() => handleNavigationVisibility()}
						scroll={el => scrollWithOffsetTo50(el)}
					>
            Contact
					</HashLink>
				</li>

				<li className="nav-item blog-link">
					<NavLink to="/blog" onClick={() => handleNavigationVisibility()}>
            Blog
					</NavLink>
				</li>
			</ul>
		</header>
	) : (
		<header className={fixed ? "header-desktop-container header-displayed" : "header-desktop-container header-hidden"}>
			<div className="icons-container">
				<a href="https://www.facebook.com/lnbienetre" target="_blank" rel="noreferrer">
					<Facebook className="icon facebook" width={40} height={40} />
				</a>
				<a href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
					<Instagram className="icon instagram" width={40} height={40} />
				</a>
				<a href="tel:+33749813989">
					<Phone className="icon phone" width={40} height={40} />
				</a>
				<a href="mailto:bonjour@lnbienetre.com">
					<Email className="icon email" width={40} height={40} />
				</a>
			</div>

			<div className="navigation">
				<ul className="nav-list-desktop left">
					<li className="nav-item">
						<HashLink
							smooth
							to="/"
							onClick={() => {
								toggleHomeLink();
								handleNavigationVisibility();
							}}
						>
              Accueil
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#tarifs-et-préstations"
							onClick={() => {
								setIsMenuVisible(false);
								handleNavigationVisibility();
							}}
						>
              Tarifs & Préstations
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#à-propos"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo120(el)}
						>
              À propos
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#faq"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo100(el)}
						>
              FAQ
						</HashLink>
					</li>
				</ul>

				<NavLink to="/" className="logo-container" onClick={() => toggleHomeLink()}>
					<div className="logo-imageCtn">
						<Logo className="logo" color="#c07750" width={100} height={100} />
					</div>
				</NavLink>

				<ul className="nav-list-desktop right">
					<li className="nav-item">
						<HashLink
							smooth
							to="/#avis"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo150(el)}
						>
              Avis
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#avant-après"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo100(el)}
						>
              Avant / Après
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#contact"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo150(el)}
						>
              Contact
						</HashLink>
					</li>

					<li className="nav-item blog-link">
						<NavLink to="/blog" onClick={() => handleNavigationVisibility()}>
              Blog
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="button-container">
				<a href="" target="_blank" rel="noreferrer">
					<button className="button">Réserver</button>
				</a>
			</div>
		</header>
	);
};

export default Header;
