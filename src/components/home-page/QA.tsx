import type React from "react";
import { useState } from "react";
import { faqs } from "../../content/home";

const QA: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="relative bg-[#F4F4F4] py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					{/* Section Title */}
					<h2 className="font-['DM_Serif_Display',serif] text-4xl lg:text-5xl text-[#54BCAC] mb-12 uppercase">
						ANCRAR FAQ
					</h2>

					{/* FAQ Items */}
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={faq.id}
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
								{openIndex === index && (
									<div id={`faq-answer-${faq.id}`} className="px-6 pb-6">
										<p className="text-[#142C3C] font-['Lato',sans-serif] text-base lg:text-lg leading-relaxed">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default QA;
