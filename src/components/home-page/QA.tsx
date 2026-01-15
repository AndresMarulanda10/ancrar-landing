import type React from "react";
import { useState } from "react";

const QA: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const faqs = [
		{
			id: 1,
			question: "¿Qué es Ancrar?",
			answer:
				"Ancrar es una aplicación innovadora diseñada para ayudarte a aprender español de manera efectiva y divertida, enfocándose en la conjugación de verbos.",
		},
		{
			id: 2,
			question: "¿Qué soluciones ofrece Ancrar?",
			answer:
				"Ofrecemos herramientas interactivas para aprender conjugaciones verbales, ejercicios personalizados, y seguimiento de progreso en tiempo real.",
		},
		{
			id: 3,
			question: "¿Para quién es Ancrar?",
			answer:
				"Ancrar está diseñado para estudiantes de español de todos los niveles, desde principiantes hasta avanzados que quieran perfeccionar sus conjugaciones.",
		},
		{
			id: 4,
			question: "¿En qué regiones opera Ancrar?",
			answer:
				"Ancrar está disponible globalmente para todos los hispanohablantes y estudiantes de español en cualquier parte del mundo.",
		},
		{
			id: 5,
			question: "¿Hay limitaciones para tipos de servicios específicos?",
			answer:
				"No, Ancrar es accesible para todos. Nuestro enfoque principal es la educación del idioma español sin restricciones.",
		},
		{
			id: 6,
			question: "¿Ancrar ofrece servicios para empresas?",
			answer:
				"Sí, ofrecemos planes empresariales para organizaciones que deseen capacitar a sus empleados en español.",
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="relative bg-[#F4F4F4] py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					{/* Section Title */}
					<h2 className="font-['DM_Serif_Display',serif] text-4xl lg:text-5xl text-[#54BCAC] mb-12 uppercase">
						EVERYTHING YOU
						<br />
						NEED TO KNOW
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
									<div className="px-6 pb-6">
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
