import type React from "react";
import XIcon from "../../assets/Icons/003-twitter 1.svg?raw";
import Logo from "../../assets/Icons/Logo.svg?raw";
import InstagramIcon from "../../assets/Icons/004-instagram 1.svg?raw";
import LinkedInIcon from "../../assets/Icons/linkedin-3 1.svg?raw";
import PinterestIcon from "../../assets/Icons/002-pinterest 1.svg?raw";

const Header: React.FC = () => {
	const nav = [
		{
			label: "About",
			href: "/#about",
		},
		{
			label: "Brands",
			href: "/#brands",
		},
		{
			label: "Coaching",
			href: "/#coaching",
		},
	];

	const socialLinks = [
		{ icon: XIcon, href: "https://twitter.com", label: "Twitter" },
		{ icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
		{ icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
		{ icon: PinterestIcon, href: "https://pinterest.com", label: "Pinterest" },
	];

	return (
		<header className="relative z-50 bg-[#54BCAC]">
			<div className="relative h-[98px] max-w-[1440px] mx-auto px-[60px]">
				<nav className="relative h-full flex items-center">
					{/* Nav izquierda - posicionamiento absoluto */}
					<ul className="absolute left-[60px] top-1/2 -translate-y-1/2 flex flex-row gap-[60px] items-start">
						{nav.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className="text-white font-['Lato',sans-serif] text-[17px] leading-normal hover:opacity-80 transition-opacity"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					{/* Logo centrado - posicionamiento absoluto */}
					<a
						href="/"
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
						aria-label="Home page"
					>
						<div
							dangerouslySetInnerHTML={{ __html: Logo }}
							className="w-[183px] h-[70px]"
						/>
					</a>
					{/* Redes sociales derecha - posicionamiento absoluto */}
					<div className="absolute right-[60px] top-1/2 -translate-y-1/2 flex flex-row gap-[40px] items-start">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								className="hover:opacity-80 transition-opacity"
							>
								<div
									dangerouslySetInnerHTML={{ __html: social.icon }}
									className="w-6 h-6"
								/>
							</a>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
