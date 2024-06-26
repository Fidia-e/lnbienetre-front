import React, {
	FunctionComponent,
	useState,
	useEffect,
	useRef,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from "react";
import PropTypes from "prop-types";
import * as emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { useForm } from "react-hook-form";

import Logo from "components/SVG/Logo";
import Facebook from "components/SVG/Facebook";
import Phone from "components/SVG/Phone";
import Instagram from "components/SVG/Instagram";
import Email from "components/SVG/Email";
import Gift from "components/SVG/Gift";
import Chevron from "components/SVG/Chevron";
import Google from "assets/images/WEBP/google-pink.webp";
import PostOp from "assets/images/WEBP/post-op.webp";
import Renata from "assets/images/WEBP/renata.webp";
import Madero from "assets/images/WEBP/madero.webp";
import Ice from "assets/images/WEBP/ice.webp";
import Galber from "assets/images/WEBP/galber.webp";
import BienEtre from "assets/images/WEBP/bien-etre.webp";
import Helene from "assets/images/WEBP/helene.webp";

import ResultsGallery from "components/ResultsGallery";
import ReviewsCarousel from "components/ReviewsCarousel";
import ReservationButton from "components/ReservationButton";

interface AnimatedInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

init(process.env.REACT_APP_API_KEY_LOCAL || "");

const Home: FunctionComponent = () => {
	const form = useRef<HTMLFormElement>(null);
	const inputChild = useRef(null);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const locationURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1741859797926!2d2.7077966!3d48.835816099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61ba215a66fa1%3A0xa0a3b87d196a9fb0!2sLN%20Bien-Etre%20-%20Maderotherapie%2C%20drainage%20post-operatoire%20et%20Renata%2C%20ice%20madero!5e0!3m2!1sfr!2sfr!4v1709049186502!5m2!1sfr!2sfr";

	const allReviews =
    "https://www.google.com/search?sca_esv=626799e4d97bcf6a&sca_upv=1&hl=fr-FR&gl=fr&uds=AMwkrPszWx7LxVTfrqzi4Qx4Jvnh9dKRhi0PS7qxYcfF-XliAvtYCVgJhIzDSOPlOg1Qvhg6HTjdvl-TPZQyzkEUtE2lUGDiJgcpMR3eiv8gJF2-YwBEBYI9O4SzhVs95XonD59GVwpeYwCVH8V28h3zKE_wmb8t0ayGyIRi2Q_XpbbQxfmSlPG5M8gkqLwRmkosbXvgcB71phcE_18RMqEbpOgDjXJOmXfi78lrvMaasKi-tJk7zbBt8cYXCP12Ce2s0zx5WnksnpXpI7QTOV2qtJ220nyhiUvvFLSxq7b-F9vWPoI7_F6fH7HiDuzHXhCQwGv55z12&si=AKbGX_oXOTjHK3vNPxrwAU4tsC2W_rsdJDrrSHpqUAOdbOh1qw2dPap6Nx7aYdvRhNXI5Wxvu0rFSOSn6giHk9ZHmo4GNgUsW66cO30lBI418mdhrwl1faBImpYWkLxgXmUuUnLH4x6Immnk_awnEu_dFwEGo_7T9VJHDyylkmFyaPEtQ8QFb-G2r0MxP8fg74OzT3J7qisZSGVmXeEZQxEvel8jWnvJ9fUDp0BwNJ3dAn1ZlcHm4Bo%3D&q=H%C3%A9l%C3%A8ne+Bien-Etre+-+Maderotherapie,+drainage+post-operatoire+et+Renata,+ice+madero+Avis&sa=X&ved=2ahUKEwjF-6m29L-FAxX5RqQEHegaB04Q_4MLegQIPBAL&cshid=1713036043317578&biw=1728&bih=959&dpr=2";

	const firstname = "prénom";
	const email = "email";

	//^ ------------------------------------------------- ANIMATED TEXTAREA ------------------------------------------------- ^//

	const AnimatedInput: ForwardRefExoticComponent<AnimatedInputProps & RefAttributes<HTMLTextAreaElement>> = forwardRef(
		(props, ref) => {
			const { placeholder: passedPlaceholder = "", ...rest } = props;
			const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
			const [placeholderIndex, setPlaceholderIndex] = useState(0);

			useEffect(() => {
				const typingText = setInterval(() => {
					setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
					if (placeholderIndex + 1 > passedPlaceholder.length) {
						setPlaceholderIndex(0);
					} else {
						setPlaceholderIndex(placeholderIndex + 1);
					}
				}, 300);
				return () => {
					clearInterval(typingText);
				};
			}, [placeholderIndex]);

			return (
				<textarea {...rest} className="textarea" id="message" name="message" placeholder={placeholder} ref={ref} />
			);
		}
	);

	AnimatedInput.propTypes = {
		placeholder: PropTypes.string,
	};

	AnimatedInput.displayName = "AnimatedInput";

	//^ -------------------------------------------------------------------------------------------------------------------- ^//
	//^ -------------------------------------------------- FORM HANDLING -------------------------------------------------- ^//

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sendEmail = (formData: any, e: any) => {
		e.preventDefault();

		const serviceId = process.env.REACT_APP_SERVICE_LOCAL || "";
		const templateId = process.env.REACT_APP_TPL_LOCAL || "";
		const formRef = form.current || "";
		const apiKey = process.env.REACT_APP_API_KEY_LOCAL || "";

		emailjs.sendForm(serviceId, templateId, formRef, apiKey).then(
			() => {
				setIsSubmitted(true);
			},
			() => {
				setIsSubmitted(false);
			}
		);

		reset();
	};

	//^ -------------------------------------------------------------------------------------------------------------------- ^//

	const handleReviewAreaClick = () => {
		if (isModalOpen) {
			setIsModalOpen(false);
		}
	};

	const handleScrollViewHeight = () => {
		const screenHeight = window.innerHeight;

		window.scrollTo({
			top: screenHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		document.title = "Hélène Bien-Être - Maderothérapie, Drainage post-opératoire et Renata, Ice Madero - Accueil";

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="homeContainer" onClick={handleReviewAreaClick}>
			{/* //& ---------------------------- ACCUEIL --------------------------- &// */}
			<section className="hero" id="accueil">
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
						<a href="mailto:lnbienetre77@gmail.com">
							<Email className="icon email" width={40} height={40} />
						</a>
					</div>
					<div className="logo-container">
						<Logo className="logo" color="#faf2e9" width={120} height={120} />
					</div>
					<div className="google-container">
						<a href={allReviews} target="_blank" rel="noreferrer">
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

				<ReservationButton text="Prendre rendez-vous" />

				<Chevron className="chevron" width={25} height={25} onClick={handleScrollViewHeight} />
			</section>

			{/* //& --------------------------- SERVICES --------------------------- &// */}
			<section className="services" id="tarifs-et-prestations">
				<h2 className="title">
          Nos soins <br /> sur-mesure
				</h2>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">
              Drainage <br /> post-opératoire
						</h3>
						<p className="service-text">
              Avant et après une opération de chirurgie esthétique, le drainage lymphatique est indispensable pour
              accélérer le processus de récupération et éviter l&apos;apparition de certains problèmes comme la fibrose.
              Un bon suivi post-opératoire détermine à 50% le résultat final de l&apos;intervention.
						</p>
						<span className="service-price">Tarif : à partir de 82 € (en cure ou à l’unité)</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={PostOp} alt="Drainage post-opératoire" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Drainage Renata</h3>
						<p className="service-text">
              Ce massage nettoie l’organisme et contribue à atténuer les problèmes de circulation sanguine et
              lymphatique. Idéal également pour les personnes qui souffrent de problèmes de transit, de cellulite
              aqueuse ou encore pour les sportifs en récupération musculaire. Un diagnostic personnalisé sera offert
              lors de votre 1ère séance pour aborder ensemble vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 62 € (en cure ou à l’unité)</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={Renata} alt="Drainage renata" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Madérothérapie</h3>
						<p className="service-text">
              Cette technique traditionnelle venue de Colombie consiste, à l’aide d’outils en bois et de mouvements bien
              spécifiques, à venir casser les amas graisseux, affiner le grain de peau et redessiner votre silhouette.
              Un diagnostic personnalisé sera offert lors de votre 1ère séance pour aborder ensemble vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 53 € (en cure ou à l’unité)</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={Madero} alt="Madéréthérapie" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Ice Madéro</h3>
						<p className="service-text">
              L&apos;alliance de la madérothérapie et du froid pour des résultats spectaculaires ! Alliée à l’efficacité
              de sa crème “intelligente” aux principes actifs anti-cellulite et raffermissants, cette innovation permet
              des résultats plus durables et visibles plus rapidement. Un diagnostic personnalisé sera offert lors de
              votre 1ère séance pour aborder ensemble vos objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 74 € (en cure ou à l’unité)</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={Ice} alt="Ice madéro" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">
              Soin signature <br /> &quot;Drainer & Galber&quot;
						</h3>
						<p className="service-text">
              Vous hésitez entre la madérothérapie et le drainage lymphatique ? Découvrez notre soin signature “Drainer
              & Galber” combinant à la perfection les deux techniques. Ce protocole vous permettra d&apos;alléger les
              sensations de jambes lourdes et également sculpter les amas graisseux tout en redessinant votre silhouette
              en douceur. Un diagnostic personnalisé sera offert lors de votre 1ère séance pour aborder ensemble vos
              objectifs.
						</p>
						<span className="service-price">Tarif : à partir de 67 € (en cure ou à l’unité)</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={Galber} alt="Drainer & Galber" width={280} height="auto" />
				</div>

				<div className="service">
					<div className="service-description">
						<h3 className="service-title">Massages bien-être</h3>
						<p className="service-text">
              Nous proposons également le massage Suédois, le massage relaxant et le Deep Tissue qui vont vous permettre
              de libérer les tensions de votre corps et de votre esprit. Le massage bien-être permet de s&apos;accorder
              du temps pour soi, se ressourcer et ainsi se détendre.
						</p>
						<span className="service-price">Tarif : à partir de 80 €</span>
						<ReservationButton text="Je prends rendez-vous" />
					</div>
					<img className="service-image" src={BienEtre} alt="Drainer & Galber" width={280} height="auto" />
				</div>
			</section>

			{/* //& --------------------------- A PROPOS --------------------------- &// */}
			<section className="about" id="à-propos">
				<h2 className="title">À propos</h2>
				<div className="about-content">
					<p className="about-text">
            &quot;Toujours fascinée par les métiers du bien-être, j&apos;ai longtemps cru que je n&apos;avais rien à
            apporter aux femmes, jusqu&apos;au moment où j&apos;ai voulu me faire accompagner pour me sentir mieux dans
            ma peau et que j&apos;ai malheureusement vécu une mauvaise expérience. <br /> Ce jour-là, j&apos;ai compris
            à quel point il était fondamental d&apos;accompagner les femmes avec compassion, souvent en recherche
            d&apos;amour de soi. <br /> Grâce à mon approche holistique, je vous accompagne vers l&apos;atteinte de vos
            objectifs minceur et esthétique dans la bienveillance et l&apos;écoute&quot;
						<span className="span">Hélène - Fondatrice Hélène Bien-Être</span>
					</p>
					<img className="about-image" src={Helene} alt="Hélène" width={280} height="auto" />
				</div>
			</section>

			{/* //& ------------------------------ FAQ ----------------------------- &// */}
			<section className="faq" id="faq">
				<h2 className="title">Questions fréquentes</h2>
				<div className="faq-content">
					<details className="question-container">
						<summary className="question">
							<p>Est-ce que la madérothérapie fait mal ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                À première vue, on peut avoir l’impression que ces objets vont vous faire passer un mauvais quart
                d’heure ! Et je comprends, car nombreuses sont les clientes que nous rencontrons et nous font part de
                leurs mésaventures passées. Il y a plusieurs facteurs : la qualité du matériel utilisé, le type de
                cellulite ainsi que votre sensibilité. En revanche, dans certains cas, l’apparition d’hématomes peut
                arriver mais de manière superficielle, puisqu’ils disparaitront les jours suivants la séance. ATTENTION
                : il est important de choisir une praticienne expérimentée et qualifiée qui saura ajuster la pression en
                fonction des ressentis de la cliente.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Quelle est la différence entre la madérothérapie et la Ice Madero ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                À l’inverse de la madérothérapie, la Ice Madero (ou appelée aussi métallothérapie) va utiliser les
                pouvoirs de thermogénèse. Grâce à son protocole innovant et sa crème dite “intelligente”, cette
                technique vous promet des résultats visibles et efficaces plus rapidement que la madérothérapie
                classique. L’essayer c’est l’adopter !
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Pourquoi avoir recours au drainage lymphatique après une opération de chirurgie esthétique ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Après le passage au bloc opératoire, il est important de prendre soin de son corps pour optimiser les
                résultats ; grâce au drainage post-opératoire vous optimiser de 50% les résultats définitifs de votre
                opération ; la douleur devient moins intense et la récupération est donc plus facile ; la cicatrisation
                et la réduction des hématomes sont plus rapides ; les résidus de l’anesthésie, sérums et autres
                médicaments injectés sont éliminés plus rapidement et enfin l’aspect “cartonné” dû à l’apparition de
                fibrose cicatricielle disparaît.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Est-ce que le drainage lymphatique méthode Renata fait maigrir ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                NON, désolée de vous décevoir et de briser vos espoirs ! Avant d’être fortement médiatisé, le drainage
                était principalement recommandé pour les personnes souffrant de problèmes de rétention d’eau, lourdeur
                dans les jambes, de cellulite dite “aqueuse” ou encore de problèmes de transit (ballonnements,
                constipation). Selon les morphologies, on observe cependant un effet quasi immédiat de dégonflement et
                un soulagement instantané qui peut durer plusieurs jours voire plusieurs semaines.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Combien de séances pour obtenir un résultat efficace ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Lorsqu’on se rencontre lors de votre séance découverte, nous déterminons ensemble le nombre de séances
                appropriées et le type de soin adapté, en fonction du bilan personnalisée effectué. L’efficacité de la
                Ice Madero va permettre de faire moins de séance en comparaison avec avec la madero classique.
                Concernant le drainage post-opératoire, votre chirurgien vous recommandera un certain nombre de séance à
                effectuer directement après votre opération afin d’assurer de meilleurs résultats.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>En quoi consiste la séance découverte ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Vous ne savez pas quelle technique choisir ou encore quel est votre type de cellulite ? l’enjeu de cette
                séance est justement de répondre à toutes vos questions et préoccupations : nous établissons ensemble
                votre bilan personnalisé afin de déterminer la technique qui convient le mieux à vos attentes avant de
                profiter du soin. Nous adaptons le soin au moment du rendez-vous si jamais il ne vous conviendrai pas,
                c’est-à-dire que nous pouvons passer d’une séance de madero à une séance de drainage si c’est
                nécessaire.
							</p>
						</div>
					</details>

					<details className="question-container">
						<summary className="question">
							<p>Est-ce que je peux régler en plusieurs ma cure ?</p>
							<Chevron className="question-icon" width={20} height={20} color="#000" />
						</summary>
						<div className="answer-container">
							<p className="answer">
                Evidemment ! Nous proposons systématiquement à nos clientes la possibilité d’échelonner les paiements
                sur toute la durée de la cure, de 1 à 3 fois sans frais.
							</p>
						</div>
					</details>
				</div>
			</section>

			{/* //& ------------------------- CARTE CADEAU ------------------------- &// */}
			<section className="gift">
				<div className="gift-content">
					<div className="gift-text">
						<h3 className="title">Envie d&apos;offrir un instant bien-être ?</h3>

						<p className="description">
              Pensez à la e-carte cadeau, entièrement personnalisable et valable 6 mois après la date d’achat. <br />{" "}
              Vous pouvez aussi passer directement au cabinet pour disposer d&apos;une carte cadeau personnalisée.
						</p>
					</div>
					<Gift className="gift-icon" width={120} height={120} color="#fff" />
				</div>
				<a href="https://giftcard.sumup.io/order/GHEAFS1/helene-bien-etre" target="_blank" rel="noreferrer">
					<button className="button">Offrir une carte cadeau</button>
				</a>
			</section>

			{/* //& ----------------------------- AVIS ----------------------------- &// */}
			<section className="reviews" id="avis">
				<h3 className="title">Ce qu&apos;on dit de nous</h3>

				<ReviewsCarousel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

				<a href={allReviews} target="_blank" rel="noreferrer">
					<button className="all-reviews-button">Voir tous les avis</button>
				</a>
			</section>

			{/* //& ------------------------ AVANT / APRES ------------------------- &// */}
			<section className="results" id="avant-après">
				<h3 className="title">Avant / Après</h3>
				<ResultsGallery />
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

			{/* //& --------------------------- CONTACT ---------------------------- &// */}
			<section className="contact" id="contact">
				<div className="contact-content">
					{isSubmitted ? (
						<>
							<div className="confirmation-message">
								<p>Votre message à bien été envoyé !</p>
								<p>Merci beaucoup de nous avoir contacté !</p>
								<p>Nous reviendrons vers vous très prochainement. </p>
							</div>
						</>
					) : (
						<>
							<h3 className="title">Nous contacter</h3>
							<form className="form" ref={form} action="submit" onSubmit={handleSubmit(sendEmail)}>
								<div className="input-container">
									<input
										className="input"
										type="text"
										placeholder="Votre prénom"
										id="firstname"
										{...register("firstname", { required: true })}
										name="firstname"
									/>
									{errors.firstname && <p className="error-message">Merci de renseigner votre {firstname}</p>}
								</div>

								<div className="input-container">
									<input
										className="input"
										type="email"
										placeholder="Votre email"
										id="email"
										{...register("email", { required: true })}
										name="email"
									/>
									{errors.email && <p className="error-message">Merci de renseigner votre {email}</p>}
								</div>

								<div className="textarea-content">
									<AnimatedInput placeholder="Bonjour, ..." ref={inputChild} />
								</div>
								<button className="button">Envoyer</button>
							</form>
						</>
					)}
				</div>
				<div className="map-container">
					<iframe
						className="map"
						title="Carte du cabinet"
						allowFullScreen
						src={locationURL}
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
