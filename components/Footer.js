import Facebook from "./icons/Facebook";
import Pinterest from "./icons/Pinterest";
import Instagram from "./icons/Instagram";
import Container from "./Container";

const Footer = () => (
  <div className="border-t border-black border-opacity-60">
    <Container>
      <div className="flex flex-col items-center justify-center py-10 space-y-5 md:flex-row md:justify-between md:space-y-0">
        <div className="flex items-center space-x-5">
          <a
            href="https://web.facebook.com/perryjurick/"
            className="font-serif font-normal text-black transition duration-300 hover:text-opacity-90 hover:underline text-opacity-70 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
          >
            <Facebook />
          </a>
          <a
            href="https://www.pinterest.com/perryjurick/_saved/"
            className="font-serif font-normal text-black transition duration-300 hover:text-opacity-90 hover:underline text-opacity-70 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
          >
            <Pinterest />
          </a>
          <a
            href="https://www.instagram.com/perryjurick/"
            className="font-serif font-normal text-black transition duration-300 hover:text-opacity-90 hover:underline text-opacity-70 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
          >
            <Instagram />
          </a>
        </div>

        <a
          className="font-serif font-normal text-black transition duration-300 hover:text-opacity-90 hover:underline text-opacity-70 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
          href="https://raymondkneipp.com"
        >
          Website by Raymond Kneipp
        </a>
      </div>
    </Container>
  </div>
);

export default Footer;
