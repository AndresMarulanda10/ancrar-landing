import type React from "react";
import HeroImage from "../../assets/Images/hero_image.png";
import BlobC1 from "../../assets/Images/c1.svg";
import BlobC2 from "../../assets/Images/c2.svg";

const HomeHero: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-[#54BCAC] text-[#142C3C]">
			<div className="pointer-events-none absolute -left-32 -top-24 hidden h-[min(42vw,430px)] w-[min(42vw,450px)] sm:block">
				<img src={BlobC2.src} alt="" className="h-full w-full object-contain opacity-45" />
			</div>
			<div className="pointer-events-none absolute -bottom-40 -right-36 hidden h-[min(45vw,500px)] w-[min(55vw,620px)] sm:block">
				<img src={BlobC1.src} alt="" className="h-full w-full rotate-12 object-contain opacity-30" />
			</div>

			<div className="container relative z-10 mx-auto px-5 pb-28 pt-14 sm:px-8 sm:pb-32 md:py-20 lg:py-24">
				<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div className="max-w-xl">
						<p data-gsap="hero-eyebrow" className="mb-5 font-['Lato',sans-serif] text-sm font-bold uppercase tracking-[0.24em] text-[#142C3C]">
							ANCRAR
						</p>
						<h1 data-gsap="hero-headline" className="font-['DM_Serif_Display',serif] text-5xl leading-[0.98] text-[#142C3C] sm:text-6xl lg:text-7xl">
							Master Spanish verb conjugations with Ancrar: learn through play.
						</h1>
						<p data-gsap="hero-description" className="mt-7 max-w-lg font-['Lato',sans-serif] text-base leading-7 text-[#142C3C] sm:text-lg">
							Understand and memorize Spanish verb conjugations through a card-game-style system.
						</p>
						<a
							data-gsap="hero-cta"
							href="/#features"
							className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#142C3C] bg-white px-6 py-3 font-['Lato',sans-serif] text-sm font-bold text-[#142C3C] transition-transform hover:-translate-y-1"
						>
							Explore the features
							<span aria-hidden="true">-&gt;</span>
						</a>
					</div>

					<div data-gsap="hero-visual" className="relative mx-auto w-full max-w-[650px]">
						<div className="relative z-10 rotate-[-2deg] rounded-[2rem] border-4 border-[#142C3C] bg-[#F4F4F4] p-2 shadow-[12px_14px_0_#142C3C] sm:p-3">
							<div className="aspect-[1.72] overflow-hidden rounded-[1.5rem] border-2 border-[#142C3C] bg-white">
								<img
									src={HeroImage.src}
									alt="Ancrar app interface"
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="absolute -bottom-8 left-4 z-20 flex -rotate-6 gap-3 sm:-bottom-10 sm:left-8 sm:gap-4">
							<div className="flex aspect-square w-20 items-center justify-center rounded-2xl border-2 border-[#142C3C] bg-[#AC7CDC] shadow-[5px_6px_0_#142C3C] sm:w-28">
								<span className="font-['DM_Serif_Display',serif] text-4xl italic text-white sm:text-5xl">AR</span>
							</div>
							<div className="mt-4 flex aspect-square w-20 items-center justify-center rounded-2xl border-2 border-[#142C3C] bg-[#142C3C] shadow-[5px_6px_0_#AC7CDC] sm:w-28">
								<span className="font-['DM_Serif_Display',serif] text-4xl italic text-white sm:text-5xl">ER</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
