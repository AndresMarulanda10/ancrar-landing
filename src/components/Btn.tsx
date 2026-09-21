import type { FC, PropsWithChildren } from "react";
import ArrowIcon from "../assets/icons/arrow.svg?raw";

interface ButtonLinkProps {
	to?: string;
	theme?: "fill" | "outline" | "accent";
	hideArrow?: boolean;
	size?: "sm" | "regular" | "lg";
	className?: string;
	onClick?: () => void;
}

const Btn: FC<PropsWithChildren<ButtonLinkProps>> = ({
	to,
	theme = "outline",
	hideArrow,
	size = "regular",
	children,
	className,
	onClick,
}) => {
	const linkClasses = [
		"group relative flex items-center text-sm leading-none rounded-[32px] border transition-all duration-300 focus:outline-none lg:text-base lg:leading-none",
		theme === "fill" && "bg-[#D1D0C7] text-white border-transparent",
		theme === "accent" && "bg-appAccent text-white border-transparent",
		theme !== "fill" && theme !== "accent" && "border-appText",
		size === "lg" && "px-4 py-[17px] lg:p-6",
		size === "regular" && "px-4 py-[13px] md:px-6 md:py-4",
		className,
	].filter(Boolean).join(" ");
	const arrow = !hideArrow && (
		<div
			dangerouslySetInnerHTML={{ __html: ArrowIcon }}
			className="ml-2 h-[14px] w-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			aria-hidden="true"
		/>
	);

	return (
		to ? (
			<a href={to} className={linkClasses}>
				{children}
				{arrow}
			</a>
		) : (
			<button className={`${linkClasses} flex justify-center w-full`} onClick={onClick}>
				{children}
				{arrow}
			</button>
		)
	);
};

export default Btn;
