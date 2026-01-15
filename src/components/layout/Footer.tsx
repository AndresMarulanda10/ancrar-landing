import type React from "react";
import Ellipse4Icon from "../../assets/Icons/Ellipse 4.svg?raw";
import F4Icon from "../../assets/Icons/F4.svg?raw";

const Footer: React.FC = () => {
	const features = [
		"Selfmade",
		"Business Class",
		"Co Active Training Institute",
		"Search Inside Yourself Institute",
	];

	return (
		<footer className="relative bg-white py-20 overflow-hidden">
			{/* Decorative F4 icon top left */}
			<div
				className="absolute left-0 top-0 w-[142px] h-[136px] opacity-60"
				dangerouslySetInnerHTML={{ __html: F4Icon }}
			/>

			{/* Decorative blob */}
			<div className="absolute right-[-100px] top-20 w-[500px] h-[500px] opacity-20 pointer-events-none">
				<div className="w-full h-full bg-[#AC7CDC] rounded-[50%] blur-3xl" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Left Side - Features List */}
					<div>
						<h2 className="text-[#142C3C] font-['DM_Serif_Display',serif] text-4xl lg:text-5xl mb-8">
							Training &<br />
							Education
						</h2>

						<ul className="space-y-4">
							{features.map((feature, index) => (
								<li key={index} className="flex items-center gap-3">
									<div
										className="w-6 h-6 flex-shrink-0"
										dangerouslySetInnerHTML={{ __html: Ellipse4Icon }}
									/>
									<span className="text-[#142C3C] font-['Lato',sans-serif] text-lg">
										{feature}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Right Side - CTA Card */}
					<div className="relative">
						{/* Decorative blob behind card */}
						<div className="absolute inset-0 bg-white border-4 border-[#142C3C] rounded-[100px] transform rotate-3" />

						{/* Main CTA Card */}
						<div className="relative bg-[#54BCAC] border-4 border-[#142C3C] rounded-[100px] p-10 lg:p-12 text-center">
							{/* Decorative element */}
							<div className="absolute top-[-20px] right-10">
								<div className="w-16 h-16 bg-[#AC7CDC] rounded-full border-4 border-[#142C3C]" />
							</div>

							<p className="text-white font-['Lato',sans-serif] text-lg mb-4">
								30 Minute Introduction
							</p>

							<h3 className="text-white font-['DM_Serif_Display',serif] text-6xl lg:text-7xl mb-4">
								FREE
							</h3>

							<p className="text-white font-['Lato',sans-serif] text-xl mb-2">
								1 Hour
							</p>

							<p className="text-white font-['DM_Serif_Display',serif] text-5xl lg:text-6xl mb-8">
								$120
							</p>

							<button
								type="button"
								className="bg-[#AC7CDC] border-4 border-[#142C3C] rounded-[60px] px-10 py-4 transition-transform hover:scale-105"
							>
								<span className="text-white font-['DM_Serif_Display',serif] text-2xl">
									Book a session
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Copyright */}
				<div className="mt-20 text-center">
					<p className="text-[#142C3C] font-['Lato',sans-serif] text-sm">
						&copy; {new Date().getFullYear()} Ancrar. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
