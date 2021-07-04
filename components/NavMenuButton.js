import Menu from "./icons/Menu";

const NavMenuButton = ({ setShow }) => {
  return (
    <>
      <button
        className="md:hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
        onClick={() => setShow()}
      >
        <Menu />
      </button>
    </>
  );
};

export default NavMenuButton;
