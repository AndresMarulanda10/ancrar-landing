import type React from "react";

const Brands: React.FC = () => {
	return (
		<section className="bg-[#142C3C] py-16 text-white sm:py-20 lg:py-24">
			<div className="container mx-auto px-5 sm:px-8">
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<div>
						<p className="mb-3 font-['Lato',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#54BCAC]">
							Made to meet you where you are
						</p>
						<h2 className="font-['DM_Serif_Display',serif] text-4xl leading-tight sm:text-5xl">
							One practice, different learning contexts.
						</h2>
					</div>
					<div>
						<p className="max-w-2xl font-['Lato',sans-serif] text-lg leading-8 text-white/75">
							Ancrar serves students, travelers, professionals, and multicultural companies.
						</p>
						<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
							{["Students", "Travelers", "Professionals", "Multicultural companies"].map((audience) => (
								<div key={audience} className="rounded-2xl border border-white/30 px-4 py-5 font-['DM_Serif_Display',serif] text-lg text-white sm:text-xl">
									{audience}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
