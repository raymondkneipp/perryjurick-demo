import { useRouter } from "next/router";
import House from "./icons/House";
import Gallery from "./icons/Gallery";
import Typography from "./Typography";
import Mail from "./icons/Mail";
import Heart from "./icons/Heart";
import Person from "./icons/Person";

const MobileNav = ({ show }) => {
  const router = useRouter();

  return (
    <div
      style={{ maxHeight: show ? "1000px" : "0" }}
      className="overflow-hidden duration-500 transition-max-height"
    >
      <div className="flex justify-center py-5 border-b border-black bg-tan md:hidden border-opacity-60">
        <div className="inline-flex flex-col">
          <Typography
            variant="nav"
            href="/"
            className={
              (router.pathname == "/" ? "!text-opacity-80 active-icon" : "") +
              " flex flex-row"
            }
          >
            <div className="flex pl-5">
              <House />
              <div className="ml-5"> Home</div>
            </div>
          </Typography>

          <Typography
            variant="nav"
            href="/portfolio"
            className={
              (router.pathname == "/portfolio"
                ? "!text-opacity-80 active-icon"
                : "") + " flex flex-row"
            }
          >
            <div className="flex pl-5">
              <Gallery />
              <div className="ml-5"> Portfolio</div>
            </div>
          </Typography>

          <Typography
            variant="nav"
            href="/discover"
            className={
              (router.pathname == "/discover"
                ? "!text-opacity-80 active-icon"
                : "") + " flex flex-row"
            }
          >
            <div className="flex pl-5">
              <Person />
              <div className="ml-5"> Discover</div>
            </div>
          </Typography>

          <Typography
            variant="nav"
            href="/testimonials"
            className={
              (router.pathname == "/testimonials"
                ? "!text-opacity-80 active-icon"
                : "") + " flex flex-row"
            }
          >
            <div className="flex pl-5">
              <Heart />
              <div className="ml-5"> Testimonials</div>
            </div>
          </Typography>

          <Typography
            variant="nav"
            href="/inquire"
            className={
              (router.pathname == "/inquire"
                ? "!text-opacity-80 active-icon"
                : "") + " flex flex-row"
            }
          >
            <div className="flex pl-5">
              <Mail />
              <div className="ml-5"> Inquire</div>
            </div>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
