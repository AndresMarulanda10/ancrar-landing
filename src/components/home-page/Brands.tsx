import type React from "react";
import AngelHackLogo from "../../assets/Images/angelhack-logo 1.png";

const Brands: React.FC = () => {
	// Brand logos array
	const brands = [
		{ id: 1, name: "AngelHack", logo: AngelHackLogo },
		{ id: 2, name: "AngelHack", logo: AngelHackLogo },
		{ id: 3, name: "AngelHack", logo: AngelHackLogo },
		{ id: 4, name: "AngelHack", logo: AngelHackLogo },
	];

	return (
		<section className="relative bg-white py-16">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<h2 className="text-center font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#AC7CDC] mb-12">
					Trabajos & Alianzas
				</h2>

				{/* Brands Grid */}
				<div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 max-w-5xl mx-auto">
					{brands.map((brand) => (
						<div
							key={brand.id}
							className="w-[172px] h-[62px] flex items-center justify-center"
						>
							{/* Brand logo */}
							<img
								src={brand.logo.src}
								alt={brand.name}
								className="w-full h-auto object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Brands;
