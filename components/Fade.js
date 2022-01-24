import Image from "next/image";
import Slider from "react-slick";

const Fade = () => {
	var settings = {
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 3000,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	// Image Original Sizes
	// 800 x 1200

	const width = 333;
	const height = 500;
	const layout = "intrinsic";

	return (
		<div className="text-center">
			<Slider {...settings}>
				<div>
					<Image
						src="/images/hero/port037.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
				<div>
					<Image
						src="/images/hero/port012.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
				<div>
					<Image
						src="/images/hero/port034.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
				<div>
					<Image
						src="/images/hero/port030.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
				<div>
					<Image
						src="/images/hero/port076.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
				<div>
					<Image
						src="/images/hero/port095.jpg"
						layout={layout}
						width={width}
						height={height}
						objectFit="cover"
					/>
				</div>
			</Slider>
		</div>
	);
};

export default Fade;
