import type React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "../../content/home";

gsap.registerPlugin(ScrollTrigger);

const QA: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const sectionRef = useRef<HTMLElement>(null);
	const answerRefs = useRef<Array<HTMLDivElement | null>>([]);
	const previousOpenIndex = useRef<number | null>(null);

	useEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const heading = section.querySelector<HTMLElement>("[data-faq-heading]");
		const rows = gsap.utils.toArray<HTMLElement>("[data-faq-row]", section);
		const revealTargets = [heading, ...rows].filter(
			(element): element is HTMLElement => Boolean(element),
		);
		const media = gsap.matchMedia();
		const context = gsap.context(() => {
			media.add("(prefers-reduced-motion: reduce)", () => {
				gsap.set(revealTargets, { autoAlpha: 1, y: 0 });
			});

			media.add("(prefers-reduced-motion: no-preference)", () => {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: section,
							start: "top 82%",
							once: true,
						},
					})
					.from(heading, {
						autoAlpha: 0,
						duration: 0.6,
						ease: "power2.out",
						y: 18,
					})
					.from(
						rows,
						{
							autoAlpha: 0,
							duration: 0.5,
							ease: "power2.out",
							stagger: 0.06,
							y: 16,
						},
						"<0.12",
					);
			});
		}, section);

		return () => {
			context.revert();
			media.revert();
		};
	}, []);

	useEffect(() => {
		const answers = answerRefs.current.filter(
			(answer): answer is HTMLDivElement => Boolean(answer),
		);
		const previousIndex = previousOpenIndex.current;
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		let timeline: gsap.core.Timeline | undefined;

		if (prefersReducedMotion) {
			answers.forEach((answer, index) => {
				const isOpen = index === openIndex;

				gsap.set(answer, {
					height: isOpen ? "auto" : 0,
					opacity: isOpen ? 1 : 0,
					paddingBottom: isOpen ? "1.5rem" : 0,
					visibility: isOpen ? "visible" : "hidden",
				});
			});
		} else {
			timeline = gsap.timeline({
				defaults: { duration: 0.28, ease: "power2.out" },
			});

			if (previousIndex !== null && previousIndex !== openIndex) {
				const previousAnswer = answerRefs.current[previousIndex];

				if (previousAnswer) {
					timeline.to(previousAnswer, {
						height: 0,
						opacity: 0,
						paddingBottom: 0,
						visibility: "hidden",
					});
				}
			}

			if (openIndex !== null && openIndex !== previousIndex) {
				const answer = answerRefs.current[openIndex];

				if (answer) {
					timeline.fromTo(
						answer,
						{
							height: 0,
							opacity: 0,
							paddingBottom: 0,
							visibility: "hidden",
						},
						{
							height: "auto",
							opacity: 1,
							paddingBottom: "1.5rem",
							visibility: "visible",
						},
						previousIndex !== null ? "<0.04" : undefined,
					);
				}
			}
		}

		previousOpenIndex.current = openIndex;

		return () => {
			timeline?.kill();
		};
	}, [openIndex]);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section ref={sectionRef} id="faq" className="relative bg-[#F4F4F4] py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					{/* Section Title */}
					<h2
						data-faq-heading
						className="font-['DM_Serif_Display',serif] text-4xl lg:text-5xl text-[#54BCAC] mb-12 uppercase"
					>
						ANCRAR FAQ
					</h2>

					{/* FAQ Items */}
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={faq.id}
								data-faq-row
								className="bg-white border-b-2 border-gray-300 rounded-lg overflow-hidden"
							>
								{/* Question Button */}
								<button
									type="button"
									onClick={() => toggleFAQ(index)}
									aria-expanded={openIndex === index}
									aria-controls={`faq-answer-${faq.id}`}
									className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
								>
									<span className="text-[#142C3C] font-['Lato',sans-serif] text-lg lg:text-xl font-medium pr-4">
										{faq.question}
									</span>
									<span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#AC7CDC] text-white rounded-lg transition-transform">
										{openIndex === index ? (
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5 12H19"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										) : (
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 5V19M5 12H19"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										)}
									</span>
								</button>

								{/* Answer */}
								<div
									id={`faq-answer-${faq.id}`}
									ref={(element) => {
										answerRefs.current[index] = element;
									}}
									aria-hidden={openIndex !== index}
									className="overflow-hidden px-6"
									style={{
										height: 0,
										opacity: 0,
										paddingBottom: 0,
										visibility: "hidden",
									}}
								>
									<p className="text-[#142C3C] font-['Lato',sans-serif] text-base lg:text-lg leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default QA;
