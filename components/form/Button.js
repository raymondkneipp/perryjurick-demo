const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className={`border border-black transition duration-300 text-lg inline-block px-4 py-2 border-opacity-60 bg-opacity-90 hover:text-black bg-black hover:text-opacity-90 text-tan font-serif font-bold hover:bg-tan focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2`}
    >
      {children}
    </button>
  );
};

export default Button;
