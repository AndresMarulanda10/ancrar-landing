import type React from "react";

const DigitalNomad: React.FC = () => {
	const sections = [
		{
			id: 1,
			label: "01",
			title: "Digital Nomad",
			description:
				"Embrace the freedom of working from anywhere in the world. Learn how to build a sustainable remote career, manage finances across borders, and create the lifestyle you dream of. Whether you want to explore new cultures or simply work from your favorite cafe, this is your guide to making it happen.",
			buttonText: "Start Your Journey",
			buttonColor: "#54BCAC",
		},
		{
			id: 2,
			label: "02",
			title: "Digital Nomad",
			description:
				"Master the art of location independence. Discover the best tools, practices, and mindsets for thriving as a digital nomad. From visa requirements to co-working spaces, from time zone management to maintaining work-life balance, get everything you need to succeed in this exciting lifestyle.",
			buttonText: "Explore More",
			buttonColor: "#AC7CDC",
		},
	];

	return (
		<section className="relative bg-white py-20 overflow-hidden">
			{/* Decorative blob */}
			<div className="absolute left-[-200px] top-20 w-[600px] h-[600px] opacity-15 pointer-events-none">
				<div className="w-full h-full bg-[#AC7CDC] rounded-[50%] blur-3xl transform rotate-45" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto space-y-16">
					{sections.map((section, index) => (
						<div
							key={section.id}
							className={`flex flex-col lg:flex-row items-center gap-8 ${
								index % 2 === 0 ? "" : "lg:flex-row-reverse"
							}`}
						>
							{/* Phone Mockup Placeholder */}
							<div className="flex-shrink-0">
								<div className="w-[280px] lg:w-[320px] h-[500px] lg:h-[600px] bg-white border-[12px] lg:border-[16px] border-[#1B1B1B] rounded-[40px] shadow-2xl overflow-hidden relative">
									{/* Decorative elements inside phone */}
									<div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
										<div className="text-center">
											<div className="w-24 h-24 bg-gradient-to-br from-[#54BCAC] to-[#AC7CDC] rounded-full mx-auto mb-4" />
											<p className="text-gray-400 font-['DM_Serif_Display',serif] text-lg">
												App Interface
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Content Card */}
							<div className="flex-1">
								<div className="bg-[#F4F4F4] border-4 border-[#142C3C] rounded-[60px] p-10 lg:p-12">
									{/* Label */}
									<p className="text-[#142C3C] font-['DM_Serif_Display',serif] text-2xl mb-2">
										{section.label}
									</p>

									{/* Title */}
									<h3 className="text-[#142C3C] font-['DM_Serif_Display',serif] text-4xl lg:text-5xl mb-6">
										{section.title}
									</h3>

									{/* Description */}
									<p className="text-[#142C3C] font-['Lato',sans-serif] text-lg leading-relaxed mb-8">
										{section.description}
									</p>

									{/* Button */}
									<button
										type="button"
										className="border-4 border-[#142C3C] rounded-[60px] px-10 py-4 transition-transform hover:scale-105"
										style={{ backgroundColor: section.buttonColor }}
									>
										<span className="text-[#142C3C] font-['DM_Serif_Display',serif] text-xl">
											{section.buttonText}
										</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DigitalNomad;
