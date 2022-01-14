import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Section from "./Section";
import Container from "./Container";
import Right from "./icons/Right";
import Left from "./icons/Left";
import Typography from "./Typography";

const Testimonials = () => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

	const width = 300;
	const height = 150;

	return (
		<Container>
			<Section>
				<div className="max-w-screen-lg mx-auto">
					<Slider
						asNavFor={nav2}
						ref={slider1}
						arrows={false}
						fade={true}
						focusOnSelect={false}
					>
						<div>
							<Image
								src="/images/testimonials/k09a2901.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center top"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/k09a5495.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/k09a0071.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/s-abutterbaugh031.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center 20%"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/thecarsons029.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/k09a1985.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center top"
							/>
						</div>
						<div>
							<Image
								src="/images/testimonials/k09a5725.jpg"
								width={width}
								height={height}
								layout="responsive"
								objectFit="cover"
								objectPosition="center top"
							/>
						</div>
					</Slider>

					<div
						className="grid items-center grid-cols-3 gap-5"
						style={{ gridTemplateColumns: "1fr 6fr 1fr" }}
					>
						<Typography
							variant="slider"
							onClick={() => slider1.current.slickPrev()}
							className="flex flex-row items-center"
						>
							<Left />
							<span className="hidden sm:inline">Previous</span>
						</Typography>
						<Typography variant="h6" className="my-5 text-center" script>
							Testimonials
						</Typography>
						<Typography
							variant="slider"
							onClick={() => slider1.current.slickNext()}
							className="flex flex-row items-center ml-auto"
						>
							<span className="hidden sm:inline">Next</span>
							<Right />
						</Typography>
					</div>

					<Slider
						asNavFor={nav1}
						ref={slider2}
						fade={true}
						arrows={false}
						focusOnSelect={false}
					>
						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Drew & Tracy
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								Perry was absolutely amazing to work with. She was responsive,
								understanding, kind, and so flexible to our time constraints,
								changes, and weather issues. She was great with guidance and
								communication. She came early and did her own thing while I was
								getting ready--taking detail shots and working in the
								background. She was amazing at redirecting our family and
								friends for pictures, and she was so good at going with the
								flow. She was just amazing to work with. Her photo style is
								light, natural, and all things beautiful, and we will treasure
								our pictures forever. I cannot say enough great things about
								this girl. Thanks so much Perry! She will not let you down,
								brides!
							</p>
						</div>
						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Casey & Maranda
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								My favorite vendor ever! We honestly couldn’t have picked a
								better photographer for our wedding. Perry is so outgoing and
								kind and we knew she was going to be the perfect match from the
								moment we met her! She was easily the most responsive and
								accommodating vendor we had. She traveled for us, shot
								flawlessly in just about all the elements weather-wise for us
								and made everyone she photographed feel so comfortable and
								confident in front of a camera! She is organized, well-prepared,
								creative with her photos and the cherry on top was her sending
								me sneak peek images so quickly! I could seriously rave about
								this sweet girl all day.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Mark & Harmony
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								From the very beginning Perry quickly responded and provided
								detailed information with an enthusiastic tone. She shared how
								much she enjoys engagement and wedding photography. She quickly
								made my fiancé and I feel comfortable during our engagement
								session. On our wedding day, she took beautiful and artistic
								shots. We fell in love with our photos which she provided in a
								prompt manner. She is open to ideas and has many of her own. We
								highly recommend her to those planning a future wedding.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Scott & Allison
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								Perry was an awesome photographer for us. From our engagement
								picture session to the wedding, she made the whole process
								seamless and easy. She was so much fun during our sessions and
								the photos she took turned out perfect. She helped so much on
								the wedding day with coordinating times; it made everything flow
								so smoothly. We couldn’t have asked for a better photographer.
								We would recommend her to anyone. Thanks Perry!
							</p>
						</div>
						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Jacob & Monica
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								Perry was an absolute blast to work with. She was able to get
								every photo we wanted (and more) within our limited timeframe.
								Incredibly fun and energizing to work with. Would absolutely
								recommend! We are so glad she was able to be a part of our
								special day.
							</p>
						</div>

						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Zach & Kelsey
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								Perry is amazing! She is super friendly, nice, fun, and
								talented. She is reasonably priced and got our engagement and
								wedding pictures back to us in a timely manner. The only good
								thing about having to postpone our big wedding (and having a
								small ceremony on our original date) was that we had two
								weddings photographed by Perry! Perry was our favorite vendor,
								we cannot say enough good things about her and her work!
							</p>
						</div>

						<div className="flex flex-col items-center justify-center space-y-5">
							<Typography className="text-center" variant="h3">
								Allan & Laura
							</Typography>
							<p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
								Perry was fantastic through the entire process. Both the bride
								and I are fairly shy, and Perry helped make us feel comfortable
								throughout the awkward engagement shoot and through the whole
								wedding experience. She was incredibly easy to work with and
								really helpful at guiding us with itineraries and suggestions
								and very patient when we ran behind schedule on the wedding day.
								The photos turned out beautifully too. I don't plan on needing a
								wedding photographer again, but for anyone else who gets married
								I highly recommend!
							</p>
						</div>
					</Slider>
				</div>
			</Section>
		</Container>
	);
};

export default Testimonials;
