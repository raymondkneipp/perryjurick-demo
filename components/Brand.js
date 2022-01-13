import Link from "next/link";
import Logo from "./icons/Logo";
import Container from "./Container";
import { useEffect } from "react";
import gsap from "gsap";
import NavMenuButton from "./NavMenuButton";

const Brand = ({ setShow }) => {
	//useEffect(() => {
	//gsap.from("#brand", { y: -100, autoAlpha: 0 });
	//}, []);

	return (
		<div className="border-b-4 border-black border-opacity-10 border-double">
			<Container>
				<div className="flex items-center justify-between space-x-5 md:justify-center">
					<Link href="/">
						<a
							className="flex items-center justify-center w-full h-auto my-10 text-black text-opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 ring-offset-2"
							style={{ maxWidth: 300 }}
							id="brand"
						>
							<Logo />
						</a>
					</Link>

					<NavMenuButton setShow={setShow} />
				</div>
			</Container>
		</div>
	);
};

export default Brand;
