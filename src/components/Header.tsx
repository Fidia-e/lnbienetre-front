import React, { FunctionComponent, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import TinyLogo from "assets/images/WEBP/tiny-logo.webp";
import Facebook from "components/SVG/Facebook";
import Phone from "components/SVG/Phone";
import Instagram from "components/SVG/Instagram";
import Email from "components/SVG/Email";
import Logo from "components/SVG/Logo";

const Header: FunctionComponent = () => {
	const [fixed, setFixed] = useState<boolean>(false);
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const { pathname } = useLocation();

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const toggleVisible = () => {
		const scrollPosition = window.scrollY;
		const isScrolledPastTheScreen = scrollPosition > screenHeight;
		setFixed(isScrolledPastTheScreen);
	};

	//^ --------------------------------- SCROLL TO SECTIONS --------------------------------- ^//

	const scrollWithOffsetTo30 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -30;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const scrollWithOffsetTo50 = (e: HTMLElement) => {
		const yCoordinate = e.getBoundingClientRect().top + window.scrollY;
		const yOffset = -50;
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
	// pour l'animation du burger
	const handleNavigationVisibility = () => {
		setIsMenuVisible(false);
		setIsChecked(false);
	};

	// bloquer et réactiver le scroll à l'ouverture et fermeture du menu mobile
	useEffect(() => {
		if (document) {
			document.body.style.overflow = isMenuVisible ? "hidden" : "auto";
		}
	}, [isMenuVisible]);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);

		return () => {
			window.removeEventListener("scroll", toggleVisible);
		};
	}, []);

	return screenWidth <= 1199 ? (
		<header
			className={
				fixed
					? "header-container header-container-fixed"
					: pathname !== "/"
						? "header-container header-container-fixed"
						: "header-container"
			}
		>
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
						<a href="mailto:lnbienetre77@gmail.com">
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
						to="/#tarifs-et-prestations"
						onClick={() => {
							setIsMenuVisible(false);
							handleNavigationVisibility();
						}}
					>
            Tarifs & Prestations
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
						scroll={el => scrollWithOffsetTo30(el)}
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
		<header
			className={
				fixed
					? "header-desktop-container header-displayed"
					: pathname !== "/"
						? "header-desktop-container header-displayed"
						: "header-desktop-container header-hidden"
			}
		>
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
				<a href="mailto:lnbienetre77@gmail.com">
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
							to="/#tarifs-et-prestations"
							onClick={() => {
								setIsMenuVisible(false);
								handleNavigationVisibility();
							}}
						>
              Tarifs & Prestations
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
							scroll={el => scrollWithOffsetTo100(el)}
						>
              Avis
						</HashLink>
					</li>

					<li className="nav-item">
						<HashLink
							smooth
							to="/#avant-après"
							onClick={() => handleNavigationVisibility()}
							scroll={el => scrollWithOffsetTo150(el)}
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
