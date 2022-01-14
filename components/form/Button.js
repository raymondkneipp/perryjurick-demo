const Button = ({ children }) => {
	return (
		<button
			type="submit"
			className={`border-4 border-double border-black border-opacity-10 transition duration-300 text-lg inline-block px-4 py-2 hover:border-opacity-60 bg-white hover:text-opacity-90 text-black font-serif font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2 rounded-none`}
		>
			{children}
		</button>
	);
};

export default Button;
