import type React from "react";

const Quotes: React.FC = () => {
	const statements = [
		{
			id: 1,
			text: "ANCRAR is an app designed to help users understand and memorize Spanish verb conjugations through a card-game-style system.",
			label: "What ANCRAR is",
		},
		{
			id: 2,
			text: "Its approach simplifies one of the most challenging aspects of the language, making learning more natural and effective.",
			label: "Why it works",
		},
		{
			id: 3,
			text: "ANCRAR is the ideal complement to classes, self-study, or immersion experiences, helping you build confidence throughout the process.",
			label: "Built to complement learning",
		},
	];

	return (
		<section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto px-5 sm:px-8">
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
					<div data-gsap="reveal-heading">
						<p className="mb-3 font-['Lato',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#54BCAC]">
							The idea behind the app
						</p>
						<h2 className="max-w-md font-['DM_Serif_Display',serif] text-5xl leading-[0.98] text-[#142C3C] sm:text-6xl">
							What is ANCRAR?
						</h2>
					</div>

					<div data-gsap="reveal-cards" className="grid gap-4 sm:grid-cols-2">
						{statements.map((statement, index) => (
							<article
								key={statement.id}
								className={`rounded-3xl p-6 sm:p-7 ${index === 0 ? "bg-[#142C3C] text-white sm:col-span-2" : "bg-[#F4F4F4] text-[#142C3C]"}`}
							>
								<p className="font-['Lato',sans-serif] text-base leading-7 opacity-90 sm:text-lg">
									{statement.text}
								</p>
								<p className="mt-7 font-['DM_Serif_Display',serif] text-xl">
									{statement.label}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quotes;
