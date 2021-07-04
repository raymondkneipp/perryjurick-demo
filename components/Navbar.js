import { useRouter } from "next/router";
import Container from "./Container";
import Typography from "./Typography";
import { useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    gsap.from("nav #desktop a", {
      x: -100,
      stagger: 0.1,
      autoAlpha: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <nav className="hidden border-b border-black md:block border-opacity-60">
      <Container>
        <div
          id="desktop"
          className="flex items-center justify-center fill-current md:py-2 font-sc md:justify-between lg:justify-around"
        >
          <Typography
            variant="nav"
            href="/"
            className={`flex ${
              router.pathname == "/" ? "!text-opacity-80 font-bold" : ""
            }`}
          >
            Home
          </Typography>
          <Typography
            variant="nav"
            href="/portfolio"
            className={`flex ${
              router.pathname == "/portfolio"
                ? "!text-opacity-80 font-bold"
                : ""
            }`}
          >
            Portfolio
          </Typography>
          <Typography
            variant="nav"
            href="/discover"
            className={`flex ${
              router.pathname == "/discover" ? "!text-opacity-80 font-bold" : ""
            }`}
          >
            Discover
          </Typography>
          <Typography
            variant="nav"
            href="/testimonials"
            className={`flex ${
              router.pathname == "/testimonials"
                ? "!text-opacity-80 font-bold"
                : ""
            }`}
          >
            Testimonials
          </Typography>
          <Typography
            variant="nav"
            href="/inquire"
            className={`flex ${
              router.pathname == "/inquire" ? "!text-opacity-80 font-bold" : ""
            }`}
          >
            Inquire
          </Typography>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
