import Link from "next/link";

const Typography = ({
	children,
	variant,
	className = "",
	href = "/",
	script,
	...props
}) => {
	const headingBase = `font-normal text-black text-opacity-80 ${
		script ? "font-script" : "font-sc"
	} ${className}`;
	const subHeadingBase = `font-normal text-black text-opacity-60 ${
		script ? "font-script" : "font-serif"
	} ${className}`;
	const base = `font-normal text-black text-opacity-70 ${
		script ? "font-script" : "font-serif"
	} ${className}`;
	const focus =
		"focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2";

	switch (variant) {
		case "h1":
			return (
				<h1 className={`text-4xl sm:text-6xl ${headingBase}`}>{children}</h1>
			);
		case "h2":
			return (
				<h2 className={`text-2xl sm:text-4xl ${headingBase}`}>{children}</h2>
			);
		case "h3":
			return (
				<h3 className={`text-xl sm:text-3xl ${headingBase}`}>{children}</h3>
			);
		case "h4":
			return (
				<h4 className={`text-lg sm:text-2xl ${subHeadingBase}`}>{children}</h4>
			);
		case "h5":
			return (
				<h5 className={`text-base sm:text-xl ${subHeadingBase}`}>{children}</h5>
			);
		case "h6":
			return (
				<h6 className={`text-sm sm:text-lg ${subHeadingBase}`}>{children}</h6>
			);
		case "p":
			return <p className={`${base}`}>{children}</p>;
		case "link":
			return (
				<Link href={href}>
					<a
						className={`transition duration-300 hover:text-opacity-90 hover:underline ${focus} ${base}`}
					>
						{children}
					</a>
				</Link>
			);
		case "button":
			return (
				<Link href={href}>
					<a
						className={`border-4 border-double border-black border-opacity-10 transition duration-300 text-lg inline-block px-4 py-2 bg-opacity-90 hover:border-opacity-90 bg-white hover:text-opacity-90 text-black font-serif font-bold ${focus} ${className}`}
					>
						{children}
					</a>
				</Link>
			);
		case "nav":
			return (
				<Link href={href}>
					<a
						className={`text-lg text-black text-opacity-60 font-sc hover:text-opacity-90 hover:font-bold p-3 relative ${focus} ${className}`}
					>
						{children}
					</a>
				</Link>
			);
		case "slider":
			return (
				<button
					className={`transition duration-300 inline-block text-black text-opacity-60 hover:text-black hover:text-opacity-80 font-serif font-normal cursor-pointer ${focus} ${className}`}
					{...props}
				>
					{children}
				</button>
			);
		case "dot":
			return (
				<span
					className={`transition duration-300 inline-block text-black text-opacity-60 hover:text-black hover:text-opacity-80 font-serif font-normal cursor-pointer ${className}`}
					{...props}
				>
					{children}
				</span>
			);
		case "small":
			return <span className={`text-xs ${base}`}>{children}</span>;
		default:
			return <span className={`bg-red-600${base}`}>{children}</span>;
	}
};

export default Typography;
