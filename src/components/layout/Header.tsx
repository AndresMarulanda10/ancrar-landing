import type React from "react";
import Logo from "../../assets/icons/logo.svg?raw";

const Header: React.FC = () => {
	const nav = [
		{ label: "What is ANCRAR", href: "/#about" },
		{ label: "Features", href: "/#features" },
		{ label: "FAQ", href: "/#faq" },
	];

	return (
		<header className="relative z-50 bg-[#54BCAC]">
			<div className="container mx-auto flex min-h-[72px] items-center justify-between gap-4 px-4 sm:min-h-[88px] sm:px-8">
				<a href="/" className="shrink-0" aria-label="Home page">
					<div
						dangerouslySetInnerHTML={{ __html: Logo }}
						className="h-10 w-[92px] [&>svg]:h-full [&>svg]:w-full sm:h-12 sm:w-[112px]"
					/>
				</a>
				<nav aria-label="Primary navigation">
					<ul className="flex items-center gap-3 sm:gap-7">
						{nav.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className="whitespace-nowrap font-['Lato',sans-serif] text-[11px] font-bold text-[#142C3C] transition-opacity hover:opacity-70 sm:text-sm"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
