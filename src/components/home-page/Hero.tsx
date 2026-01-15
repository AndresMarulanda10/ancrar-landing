import type React from "react";
import HeroImage from "../../assets/Images/hero_image.png";
import HeroImageMask from "../../assets/Images/hero_image_mask.svg";
import BlobC1 from "../../assets/Images/c1.svg";
import BlobC2 from "../../assets/Images/c2.svg";
import Hand1 from "../../assets/Icons/Слой рисунка.svg?raw";
import Hand2 from "../../assets/Icons/Слой рисунка-1.svg?raw";
import Hand3 from "../../assets/Icons/3.svg?raw";

const HomeHero: React.FC = () => {
	return (
		<section className="relative bg-[#54BCAC] overflow-hidden min-h-screen">
			{/* Background blob c2 (azul) - positioned at top-left */}
			<div className="absolute left-0 top-0 w-[540px] h-[514px] pointer-events-none">
				<img
					src={BlobC2.src}
					alt=""
					className="block max-w-none w-full h-full"
				/>
			</div>

			{/* Background blob c1 (morado) - rotated 306.95deg */}
			<div
				className="absolute left-0 top-0 flex items-center justify-center pointer-events-none"
				style={{
					width:
						"calc((594px * 0.6011181473731995) + (443px * 0.7991601824760437))",
					height:
						"calc((594px * 0.7991601824760437) + (443px * 0.6011181473731995))",
				}}
			>
				<div style={{ transform: "rotate(306.95deg)" }}>
					<div className="relative w-[594px] h-[443px]">
						<img
							src={BlobC1.src}
							alt=""
							className="block max-w-none w-full h-full"
						/>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10 py-16">
				{/* Title Section - H1 */}
				<div className="relative mb-12">
					<h1 className="text-[90px] font-['DM_Serif_Display',serif] text-white leading-[1.003] text-center w-[929px] mx-auto">
						La aplicación perfecta para aprender Español
					</h1>
				</div>

				{/* Hero Image/Phone Section */}
				<div className="relative flex items-center justify-center h-[600px] mb-16">
					{/* Phone border/frame - rotated 4.963deg */}
					<div
						className="absolute left-0 top-0 flex items-center justify-center"
						style={{
							width:
								"calc((870px * 0.9962501525878906) + (471px * 0.0865192860364914))",
							height:
								"calc((870px * 0.0865192860364914) + (471px * 0.9962501525878906))",
						}}
					>
						<div style={{ transform: "rotate(4.963deg)" }}>
							<div className="bg-[#c4c4c4] border border-solid border-[#142c3c] h-[471px] rounded-[300px] w-[870px]" />
						</div>
					</div>

					{/* Phone screen content with hero image and mask - rotated 11.294deg */}
					<div
						className="absolute left-0 top-0 flex items-center justify-center z-10"
						style={{
							width:
								"calc((932.890625px * 0.9806340336799622) + (862.703125px * 0.19584940373897552))",
							height:
								"calc((932.890625px * 0.19584940373897552) + (862.703125px * 0.9806340336799622))",
						}}
					>
						<div style={{ transform: "rotate(11.294deg)" }}>
							<div
								className="h-[862.715px] w-[932.898px] relative"
								style={{
									maskImage: `url(${HeroImageMask.src})`,
									WebkitMaskImage: `url(${HeroImageMask.src})`,
									maskSize: "868.532px 505.549px",
									WebkitMaskSize: "868.532px 505.549px",
									maskPosition: "63.734px 320.28px",
									WebkitMaskPosition: "63.734px 320.28px",
									maskRepeat: "no-repeat",
									WebkitMaskRepeat: "no-repeat",
								}}
							>
								<img
									src={HeroImage.src}
									alt="App interface"
									className="absolute inset-0 max-w-none object-cover object-center pointer-events-none w-full h-full"
								/>
							</div>
						</div>
					</div>

					{/* Decorative Hand 1 - rotate 302.35deg */}
					<div className="absolute inset-0 flex items-center justify-center z-20">
						<div
							style={{
								transform: "rotate(302.35deg)",
								width: "320px",
								height: "320px",
							}}
						>
							<div
								className="overflow-clip relative w-full h-full"
								dangerouslySetInnerHTML={{ __html: Hand1 }}
							/>
						</div>
					</div>

					{/* Decorative Hand 2 - rotate 337.17deg */}
					<div
						className="absolute left-0 top-0 flex items-center justify-center z-20"
						style={{
							width:
								"calc((317.453125px * 0.9216626882553101) + (169.3125px * 0.38799211382865906))",
							height:
								"calc((317.453125px * 0.38799211382865906) + (169.3125px * 0.9216626882553101))",
						}}
					>
						<div style={{ transform: "rotate(337.17deg)" }}>
							<div
								className="h-[169.313px] overflow-clip relative w-[317.463px]"
								dangerouslySetInnerHTML={{ __html: Hand2 }}
							/>
						</div>
					</div>

					{/* Decorative Hand 3 - rotate 297.401deg */}
					<div
						className="absolute left-0 top-0 flex items-center justify-center z-20"
						style={{
							width:
								"calc((254.578125px * 0.46021759510040283) + (254.578125px * 0.8878061771392822))",
							height:
								"calc((254.578125px * 0.8878061771392822) + (254.578125px * 0.46021759510040283))",
						}}
					>
						<div style={{ transform: "rotate(297.401deg)" }}>
							<div
								className="relative w-[254.587px] h-[254.587px] overflow-clip"
								dangerouslySetInnerHTML={{ __html: Hand3 }}
							/>
						</div>
					</div>
				</div>

				{/* Bottom Cards Section - All rotated 6.073deg */}
				<div className="relative flex justify-center gap-6">
					{/* Card 1 - ER (Purple) */}
					<div style={{ transform: "rotate(6.073deg)" }}>
						<div className="bg-[#ac7cdc] border-[#142c3c] border-[3.292px] border-solid h-[293px] rounded-[29.629px] w-[286.416px] flex items-center justify-center">
							<p className="font-['DM_Serif_Display',serif] italic text-[#f4f4f4] text-[79.011px] leading-none">
								ER
							</p>
						</div>
					</div>

					{/* Card 2 - AR (Teal) */}
					<div style={{ transform: "rotate(6.073deg)" }}>
						<div className="bg-[#54bcac] border-[#142c3c] border-[3.292px] border-solid h-[293px] rounded-[29.629px] w-[286.416px] flex items-center justify-center">
							<p className="font-['DM_Serif_Display',serif] italic text-[#f4f4f4] text-[79.011px] leading-none">
								AR
							</p>
						</div>
					</div>

					{/* Card 3 - ER (Purple) */}
					<div style={{ transform: "rotate(6.073deg)" }}>
						<div className="bg-[#ac7cdc] border-[#142c3c] border-[3.292px] border-solid h-[293px] rounded-[29.629px] w-[286.416px] flex items-center justify-center">
							<p className="font-['DM_Serif_Display',serif] italic text-[#f4f4f4] text-[79.011px] leading-none">
								ER
							</p>
						</div>
					</div>

					{/* Card 4 - IR (Teal) */}
					<div style={{ transform: "rotate(6.073deg)" }}>
						<div className="bg-[#54bcac] border-[#142c3c] border-[3.292px] border-solid h-[293px] rounded-[29.629px] w-[286.416px] flex items-center justify-center">
							<p className="font-['DM_Serif_Display',serif] italic text-[#f4f4f4] text-[79.011px] leading-none">
								IR
							</p>
						</div>
					</div>

					{/* Card 5 - ER (Purple) */}
					<div style={{ transform: "rotate(6.073deg)" }}>
						<div className="bg-[#ac7cdc] border-[#142c3c] border-[3.292px] border-solid h-[293px] rounded-[29.629px] w-[286.416px] flex items-center justify-center">
							<p className="font-['DM_Serif_Display',serif] italic text-[#f4f4f4] text-[79.011px] leading-none">
								ER
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
