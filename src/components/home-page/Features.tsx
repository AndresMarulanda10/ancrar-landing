import type React from "react";
import LeftBeak from "../../assets/Icons/Left beak.svg?raw";

const Features: React.FC = () => {
	const features = [
		{
			id: 1,
			title: "Career Transitions",
			subtitle: "For:",
			description:
				"I've supported over 500 people transition into exciting careers in technology, specializing in championing people from non-traditional backgrounds and underrepresented identities. I know the mindset, tactics, tricks to make you stand out and get hired.",
			buttonText: "I want to work in tech",
			buttonColor: "#54BCAC",
			phonePosition: "right",
			phoneTooltip: "For greater flexibility, detach this component",
		},
		{
			id: 2,
			title: "Career Transitions",
			subtitle: "For:",
			description:
				"I've supported over 500 people transition into exciting careers in technology, specializing in championing people from non-traditional backgrounds and underrepresented identities.",
			buttonText: "I want to work in tech",
			buttonColor: "#54BCAC",
			phonePosition: "left",
			phoneTooltip: "For career hunting, detach this",
		},
		{
			id: 3,
			title: "Sabbaticals",
			subtitle: "For:",
			description:
				"I believe in the power of decent breaks, and sabbaticals are just that. Every 7 years, breaks are sacred and cherished as a return to rekindle the flame.",
			buttonText: "I want to take a sabbatical",
			buttonColor: "#AC7CDC",
			phonePosition: "right",
			phoneTooltip: "Take the leap, trust yourself",
		},
		{
			id: 4,
			title: "Sabbaticals",
			subtitle: "For:",
			description:
				"I believe in the power of decent breaks, and sabbaticals are just that. Every 7 years, breaks are sacred and cherished.",
			buttonText: "I want to take a sabbatical",
			buttonColor: "#AC7CDC",
			phonePosition: "left",
			phoneTooltip: "For career pauses",
		},
	];

	return (
		<section className="relative bg-[#F4F4F4] py-20 overflow-hidden">
			{/* Decorative blobs */}
			<div className="absolute top-20 right-[-200px] w-[800px] h-[800px] opacity-20 pointer-events-none">
				<div className="w-full h-full bg-[#54BCAC] rounded-[50%] blur-3xl" />
			</div>
			<div className="absolute bottom-40 left-[-300px] w-[900px] h-[900px] opacity-15 pointer-events-none">
				<div className="w-full h-full bg-[#AC7CDC] rounded-[50%] blur-3xl" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="space-y-32">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className={`flex flex-col lg:flex-row items-center gap-12 ${
								feature.phonePosition === "left" ? "lg:flex-row-reverse" : ""
							}`}
						>
							{/* Content Card */}
							<div className="flex-1 max-w-2xl">
								<div className="bg-white border-4 border-[#142C3C] rounded-[80px] p-12 lg:p-16 relative">
									{/* Title with label */}
									<div className="mb-8">
										<p className="text-[#142C3C] font-['DM_Serif_Display',serif] text-3xl mb-2">
											{feature.subtitle}
										</p>
										<h2 className="text-[#142C3C] font-['DM_Serif_Display',serif] text-5xl lg:text-6xl leading-tight">
											{feature.title}
										</h2>
									</div>

									{/* Button */}
									<button
										className="border-4 border-[#142C3C] rounded-[80px] px-12 py-5 mb-8 transition-transform hover:scale-105"
										style={{ backgroundColor: feature.buttonColor }}
									>
										<span className="text-[#142C3C] font-['DM_Serif_Display',serif] text-xl">
											{feature.buttonText}
										</span>
									</button>

									{/* Description */}
									<p className="text-[#142C3C] font-['Lato',sans-serif] text-lg leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>

							{/* Phone Mockup */}
							<div className="flex-shrink-0 relative">
								<div className="w-[300px] lg:w-[375px] h-[600px] lg:h-[700px] bg-white border-[12px] lg:border-[16px] border-[#1B1B1B] rounded-[40px] shadow-2xl overflow-hidden relative">
									{/* Phone tooltip */}
									<div className="absolute left-8 top-64 z-10">
										<div className="relative bg-white border-[3px] border-[#1B1B1B] rounded-xl p-4 w-[220px] shadow-lg">
											{/* Tooltip beak from Figma */}
											<div
												className="absolute left-[-12px] top-1/2 transform -translate-y-1/2"
												dangerouslySetInnerHTML={{ __html: LeftBeak }}
											/>
											<p className="text-[#1B1B1B] font-['Patrick_Hand',cursive] text-sm leading-snug">
												{feature.phoneTooltip}
											</p>
										</div>

										{/* Avatar illustration */}
										<div className="absolute left-[-50px] top-6 w-16 h-16">
											<div className="w-full h-full bg-[#AC7CDC] rounded-full border-4 border-[#1B1B1B]" />
										</div>
									</div>

									{/* Phone screen content placeholder */}
									<div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
										<div className="text-center text-gray-400">
											<p className="font-['DM_Serif_Display',serif] text-2xl">
												App Screen
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
