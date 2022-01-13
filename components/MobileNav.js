import { useRouter } from "next/router";
import Typography from "./Typography";

const MobileNav = ({ show }) => {
	const router = useRouter();

	return (
		<div
			style={{ maxHeight: show ? "1000px" : "0" }}
			className="overflow-hidden duration-1000 ease-in-out transition-max-height"
		>
			<div className="flex justify-center py-5 border-b-4 border-double border-black md:hidden border-opacity-10">
				<div className="inline-flex flex-col">
					<Typography
						variant="nav"
						href="/"
						className={
							(router.pathname == "/" ? "!text-opacity-80 active-icon" : "") +
							" text-center"
						}
					>
						Home
					</Typography>

					<Typography
						variant="nav"
						href="/portfolio"
						className={
							(router.pathname == "/portfolio"
								? "!text-opacity-80 active-icon"
								: "") + " text-center"
						}
					>
						Portfolio
					</Typography>

					<Typography
						variant="nav"
						href="/discover"
						className={
							(router.pathname == "/discover"
								? "!text-opacity-80 active-icon"
								: "") + " text-center"
						}
					>
						About
					</Typography>

					<Typography
						variant="nav"
						href="/testimonials"
						className={
							(router.pathname == "/testimonials"
								? "!text-opacity-80 active-icon"
								: "") + " text-center"
						}
					>
						Testimonials
					</Typography>

					<Typography
						variant="nav"
						href="/inquire"
						className={
							(router.pathname == "/inquire"
								? "!text-opacity-80 active-icon"
								: "") + " text-center"
						}
					>
						Inquire
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
