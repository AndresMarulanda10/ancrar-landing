import type React from "react";
import { features } from "../../content/home";

const Features: React.FC = () => {
	return (
		<section id="features" className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto px-5 sm:px-8">
				<div className="mb-10 max-w-2xl sm:mb-14">
					<p className="mb-3 font-['Lato',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#AC7CDC]">
						Learn through play
					</p>
					<h2 className="font-['DM_Serif_Display',serif] text-4xl leading-tight text-[#142C3C] sm:text-5xl">
						Everything you need to make conjugations stick.
					</h2>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<article
							key={feature.id}
							className="flex min-h-[260px] flex-col rounded-3xl border-2 border-[#142C3C] bg-white p-6 shadow-[5px_6px_0_#142C3C] sm:p-7"
						>
							<div className="mb-8 flex items-start justify-between gap-4">
								<span className="font-['DM_Serif_Display',serif] text-2xl text-[#142C3C]">
									0{feature.id}
								</span>
								{feature.id === 7 && (
									<span className="rounded-full bg-[#AC7CDC] px-3 py-1 font-['Lato',sans-serif] text-[10px] font-bold uppercase tracking-[0.16em] text-[#142C3C]">
										B2B
									</span>
								)}
							</div>
							<h3 className="font-['DM_Serif_Display',serif] text-2xl leading-tight text-[#142C3C] sm:text-[1.7rem]">
								{feature.title}
							</h3>
							<p className="mt-4 font-['Lato',sans-serif] text-base leading-7 text-[#142C3C]/75">
								{feature.description}
							</p>
							<div
								className="mt-auto h-1.5 w-14 rounded-full"
								style={{ backgroundColor: feature.buttonColor }}
							/>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
