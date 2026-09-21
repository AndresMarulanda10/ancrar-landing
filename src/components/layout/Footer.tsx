import type React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-white py-14 sm:py-18">
			<div className="container mx-auto px-5 sm:px-8">
				<div className="grid gap-10 border-b-2 border-[#142C3C]/10 pb-10 sm:grid-cols-[1.4fr_1fr_1fr]">
					<div>
						<p className="font-['DM_Serif_Display',serif] text-4xl text-[#142C3C]">ANCRAR</p>
						<p className="mt-3 max-w-xs font-['Lato',sans-serif] text-sm leading-6 text-[#142C3C]/65">
							Spanish, anchored in memory.
						</p>
					</div>
					<div>
						<p className="font-['Lato',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#AC7CDC]">Explore</p>
						<nav className="mt-4 flex flex-col items-start gap-3 font-['Lato',sans-serif] text-sm text-[#142C3C]">
							<a href="/#about" className="transition-colors hover:text-[#54BCAC]">What is ANCRAR?</a>
							<a href="/#features" className="transition-colors hover:text-[#54BCAC]">Features</a>
							<a href="/#faq" className="transition-colors hover:text-[#54BCAC]">FAQ</a>
						</nav>
					</div>
					<div className="rounded-3xl bg-[#54BCAC] p-5 sm:p-6">
						<p className="font-['DM_Serif_Display',serif] text-2xl text-white">Keep learning through play.</p>
						<a href="/#features" className="mt-4 inline-flex font-['Lato',sans-serif] text-sm font-bold text-[#142C3C] underline underline-offset-4">See the features -&gt;</a>
					</div>
				</div>
				<p className="pt-6 font-['Lato',sans-serif] text-xs text-[#142C3C]/55">
					&copy; {new Date().getFullYear()} Ancrar. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
