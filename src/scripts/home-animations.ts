import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initHomeAnimations = () => {
	const media = gsap.matchMedia();

	media.add("(prefers-reduced-motion: no-preference)", () => {
		const context = gsap.context(() => {
			const heroIntro = Array.from(
				document.querySelectorAll<HTMLElement>(
					'[data-gsap="hero-eyebrow"], [data-gsap="hero-headline"], [data-gsap="hero-description"], [data-gsap="hero-cta"]',
				),
			);
			const heroVisual = document.querySelector<HTMLElement>(
				'[data-gsap="hero-visual"]',
			);

			if (heroIntro.length > 0 || heroVisual) {
				const heroTimeline = gsap.timeline({
					defaults: { ease: "power2.out" },
				});

				if (heroIntro.length > 0) {
					heroTimeline.from(heroIntro, {
						autoAlpha: 0,
						duration: 0.65,
						stagger: 0.08,
						y: 18,
					});
				}

				if (heroVisual) {
					heroTimeline
						.from(
							heroVisual,
							{
								autoAlpha: 0,
								duration: 0.8,
								scale: 0.98,
								y: 20,
							},
							"<0.1",
						)
						.to(
							heroVisual,
							{
								duration: 4.5,
								ease: "sine.inOut",
								repeat: -1,
								y: -6,
							},
							"+=0.15",
						);
				}
			}

			document
				.querySelectorAll<HTMLElement>('[data-gsap="reveal-heading"]')
				.forEach((heading) => {
					gsap.from(heading, {
						autoAlpha: 0,
						duration: 0.7,
						ease: "power2.out",
						y: 22,
						scrollTrigger: {
							trigger: heading,
							start: "top 86%",
							once: true,
						},
					});
				});

			document
				.querySelectorAll<HTMLElement>('[data-gsap="reveal-cards"]')
				.forEach((group) => {
					const cards = Array.from(group.children);

					if (cards.length === 0) return;

					gsap.from(cards, {
						autoAlpha: 0,
						duration: 0.65,
						ease: "power2.out",
						stagger: 0.08,
						y: 24,
						scrollTrigger: {
							trigger: group,
							start: "top 88%",
							once: true,
						},
					});
				});
		});

		return () => context.revert();
	});
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initHomeAnimations, {
		once: true,
	});
} else {
	initHomeAnimations();
}
