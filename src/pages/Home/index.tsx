import React, { FunctionComponent } from "react";

import Logo from "components/SVG/Logo";
import Facebook from "components/SVG/Facebook";
import Phone from "components/SVG/Phone";
import Instagram from "components/SVG/Instagram";
import Gift from "components/SVG/Gift";
import Chevron from "components/SVG/Chevron";
import Email from "components/SVG/Email";
import Google from "assets/images/google-hero.webp";
import PostOp from "assets/images/post-op.webp";
import Renata from "assets/images/renata.webp";
import Madero from "assets/images/madero.webp";
import Ice from "assets/images/ice.webp";
import Galber from "assets/images/galber.webp";
import Helene from "assets/images/Helene.webp";

const Home: FunctionComponent = () => {
	return (
		<div className="homeContainer">
			<section className="hero">
				<div className="header">
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
					<Logo className="logo-mobile" color="#faf2e9" width={90} height={90} />
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

			<section className="services">
				<h2 className="title">Nos services sur-mesure</h2>
				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Drainage post-opératoire</h3>
						<p className="service-text">
              Avant et après une opération de chirurgie esthétique, le drainage lymphatique est indispensable pour pour
              accélérer le processus de récupération et éviter l&apos;apparition de certains problèmes comme la fibrose.
              Un bon post-opératoire détermine à 50% le résultat final de l&apos;intervention.
						</p>
						<span className="service-price">Tarif : à partir de 82 € (en cure ou à l’unité)</span>
					</div>
					<img className="service-image" src={PostOp} alt="Drainage post-opératoire" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Drainage Renata</h3>
						<p className="service-text">
              Ce massage nettoie l’organisme et contribue à atténuer les problèmes de circulation sanguine et
              lymphatique. Idéal également pour les personnes qui souffrent de problème de transit, de cellulite aqueuse
              ou pour les sportifs en récupération musculaire. Un diagnostic personnalisé sera offert lors de votre 1ère
              séance pour aborder ensemble vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 62 € (en cure ou à l’unité)</span>
					</div>
					<img className="service-image" src={Renata} alt="Drainage renata" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Madérothérapie</h3>
						<p className="service-text">
              Cette technique traditionnelle traditionnelle venue de Colombie consiste, à l’aide d’outils en bois et de
              mouvements bien spécifiques, à venir casser les amas graisseux, affiner le grain de peau et redessiné
              votre silhouette. Un diagnostic personnalisé sera offert lors de votre 1ère séance pour aborder ensemble
              vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 53 € (en cure ou à l’unité)</span>
					</div>
					<img className="service-image" src={Madero} alt="Madéréthérapie" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Ice Madéro</h3>
						<p className="service-text">
              L&apos;alliance de la madérothérapie et du froid pour des résultats spectaculaires ! Alliée à l’efficacité
              de sa crème “intelligente” aux principes actifs actif anti-cellulite et raffermissants, cette innovation
              permet des résultats plus durables et visibles plus rapidement. Un diagnostic personnalisé sera offert
              lors de votre 1ère séance pour aborder ensemble vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 74 € (en cure ou à l’unité)</span>
					</div>
					<img className="service-image" src={Ice} alt="Ice madéro" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Soin signature &quot;Drainer & Galber&quot;</h3>
						<p className="service-text">
              Vous hésitez entre la madérothérapie et le drainage lymphatique ? découvrez notre soin signature “Drainer
              & Galber” combinant à la perfection les 2 techniques. Ce protocole vous permettra d&apos;alléger les
              sensations de jambes lourdes et également sculpter les amas graisseux tout en redessinant votre silhouette
              en douceur. Un diagnostic personnalisé sera offert lors de votre 1ère séance pour aborder ensemble vos
              objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 67 € (en cure ou à l’unité)</span>
					</div>
					<img className="service-image" src={Galber} alt="Drainer & Galber" width={280} height="auto" />
				</div>

				<button className="button">Je prends rendez-vous</button>
			</section>

			<section className="about">
				<h2 className="title">À propos</h2>
				<div className="about-content">
					<p className="about-text">
            Toujours fascinée par les métiers du bien- être, j&apos;ai longtemps cru que je n&apos;avais rien à apporter
            aux femmes, jusqu&apos;au jour où j&apos;ai vécue une mauvaise expérience lors d&apos;une séance de
            madérothérapie. Ce jour-là, j&apos;ai compris à quel point il était fondamental d&apos;accompagner les
            femmes avec bienveillance et compassion qui sont souvent en recherche d&apos;amour de soi. Grâce à mon
            approche holistique, je vous accompagne vers l&apos;atteinte de vos objectifs minceur et esthétique dans la
            bienveillance et l&apos;écoute.
					</p>
					<img className="about-image" src={Helene} alt="Hélène" width={280} height="auto" />
				</div>
			</section>

			<section className="faq">
				<h2 className="title">Questions fréquentes</h2>
				<div className="faq-content">
					<details className="question-container">
						<summary className="question">
							<p>Question 1</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores architecto reprehenderit, ullam esse
                repudiandae explicabo saepe non numquam tempora ea omnis fugit obcaecati assumenda sunt laudantium,
                aperiam inventore optio praesentium.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Question 2</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores architecto reprehenderit, ullam esse
                repudiandae explicabo saepe non numquam tempora ea omnis fugit obcaecati assumenda sunt laudantium,
                aperiam inventore optio praesentium.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Question 3</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores architecto reprehenderit, ullam esse
                repudiandae explicabo saepe non numquam tempora ea omnis fugit obcaecati assumenda sunt laudantium,
                aperiam inventore optio praesentium.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Question 4</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores architecto reprehenderit, ullam esse
                repudiandae explicabo saepe non numquam tempora ea omnis fugit obcaecati assumenda sunt laudantium,
                aperiam inventore optio praesentium.
							</p>
						</div>
					</details>
				</div>
			</section>

			<section className="gift">
				<div className="gift-content">
					<h3 className="title">Envie d&apos;offrir un instant bien-être ?</h3>
					<p className="description">
            Pensez à la e-carte cadeau, entièrement personnalisable et valable 6 mois après la date d’achat.
					</p>
					<button className="button">Offrir une carte cadeau</button>
				</div>
				<Gift className="paquet cadeau" width={120} height={120} color="#faf2e9" />
			</section>

			<section className="reviews">
				<iframe src="https://widgets.sociablekit.com/google-reviews/iframe/25372211" width="100%" height="450"></iframe>
				<button className="button">Ajouter un avis</button>
			</section>

			<section className="results">
				<h3 className="title">Avant / Après</h3>
				<div className="more-results">
					<p>Pour voir plus de résultats →</p>
					<div>
						<a href="https://www.facebook.com/lnbienetre" target="_blank" rel="noreferrer">
							<Facebook className="icon facebook" width={40} height={40} />
						</a>
						<a href="https://www.instagram.com/helene_bienetre/" target="_blank" rel="noreferrer">
							<Instagram className="icon instagram" width={40} height={40} />
						</a>
					</div>
				</div>
			</section>

			<section className="contact">
				<div className="contact-content">
					<h3 className="title">Nous contacter</h3>
					<form className="form" action="submit">
						<input className="input" type="text" placeholder="Votre prénom" />
						<input className="input" type="email" placeholder="Votre email" />
						<textarea className="textarea" name="" id="" placeholder="Votre message"></textarea>
						<button className="button">Envoyer</button>
					</form>
				</div>
				<div className="map-container">
					<iframe
						className="map"
						title="Carte du cabinet"
						allowFullScreen
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1741859797926!2d2.7077966!3d48.835816099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61ba215a66fa1%3A0xa0a3b87d196a9fb0!2sLN%20Bien-Etre%20-%20Maderotherapie%2C%20drainage%20post-operatoire%20et%20Renata%2C%20ice%20madero!5e0!3m2!1sfr!2sfr!4v1709049186502!5m2!1sfr!2sfr"
						width="100%"
						height="400"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
		</div>
	);
};

export default Home;
