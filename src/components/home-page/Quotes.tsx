import type React from "react";

const Quotes: React.FC = () => {
	const quotes = [
		{
			id: 1,
			text: "The coaching sessions were transformative. I gained clarity on my career path and the confidence to make bold moves.",
			author: "Adriana Herrera",
		},
		{
			id: 2,
			text: "Thanks to the guidance, I successfully transitioned into tech from a completely different field. Best investment I've made!",
			author: "Alejandro Moreno",
		},
		{
			id: 3,
			text: "The sabbatical planning helped me take a much-needed break without career setbacks. I came back refreshed and motivated.",
			author: "Valentina Silva",
		},
	];

	return (
		<section className="relative bg-white py-20 overflow-hidden">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<h2 className="text-center font-['DM_Serif_Display',serif] text-5xl lg:text-6xl text-[#142C3C] mb-16">
					What People Say
				</h2>

				{/* Quotes Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{quotes.map((quote) => (
						<div key={quote.id} className="relative">
							{/* Quote Card */}
							<div className="bg-[#F4F4F4] border-4 border-[#142C3C] rounded-[60px] p-8 lg:p-10 min-h-[400px] flex flex-col justify-between">
								{/* Quote Text */}
								<div className="mb-8">
									<p className="text-[#142C3C] font-['Lato',sans-serif] text-lg leading-relaxed italic">
										"{quote.text}"
									</p>
								</div>

								{/* Author */}
								<div className="mt-auto">
									<p className="text-[#142C3C] font-['DM_Serif_Display',serif] text-2xl">
										— {quote.author}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Quotes;
