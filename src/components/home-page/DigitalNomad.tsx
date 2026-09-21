import type React from "react";

const DigitalNomad: React.FC = () => {
	return (
		<section className="bg-[#EAF7F4] py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto px-5 sm:px-8">
				<div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<div data-gsap="reveal-heading">
						<p className="mb-3 font-['Lato',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#AC7CDC]">
							A flexible rhythm
						</p>
						<h2 className="font-['DM_Serif_Display',serif] text-4xl leading-tight text-[#142C3C] sm:text-5xl">
							How it fits your learning
						</h2>
					</div>

					<div data-gsap="reveal-cards" className="grid gap-4 sm:grid-cols-3">
						{["5 minutes", "10 minutes", "15 minutes"].map((duration, index) => (
							<div
								key={duration}
								className={`rounded-3xl border-2 border-[#142C3C] p-5 ${index === 1 ? "bg-[#AC7CDC]" : "bg-white"}`}
							>
								<p className="font-['DM_Serif_Display',serif] text-3xl text-[#142C3C] sm:text-4xl">
									{duration.split(" ")[0]}
								</p>
								<p className="mt-1 font-['Lato',sans-serif] text-sm font-bold uppercase tracking-[0.1em] text-[#142C3C]/70">
									minutes
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 grid gap-4 border-t-2 border-[#142C3C]/15 pt-8 sm:grid-cols-2 sm:gap-8">
					<p className="font-['DM_Serif_Display',serif] text-2xl leading-tight text-[#142C3C]">
						Practice the most relevant Spanish tenses. Choose your focus and set the duration of each session: 5, 10, or 15 minutes.
					</p>
					<p className="font-['Lato',sans-serif] text-base leading-7 text-[#142C3C]/75">
						Use it alongside classes, self-study, or immersion experiences.
					</p>
				</div>
			</div>
		</section>
	);
};

export default DigitalNomad;
