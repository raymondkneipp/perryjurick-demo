import Image from "next/image";
import Slider from "react-slick";
import Right from "./icons/Right";
import Left from "./icons/Left";
import Section from "./Section";
import Container from "./Container";
import Typography from "./Typography";
import { useRef } from "react";

const Slideshow = () => {
  const sliderRef = useRef();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div className="px-2.5">
        <div
          className="grid items-center grid-cols-3 gap-5"
          style={{ gridTemplateColumns: "1fr 6fr 1fr" }}
        >
          <Typography
            variant="slider"
            onClick={() => sliderRef.current.slickPrev()}
            className="flex flex-row items-center"
          >
            <Left />
            Previous
          </Typography>
          <ul className="hidden sm:block">{dots}</ul>
          <ul className="block sm:hidden"></ul>
          <Typography
            variant="slider"
            onClick={() => sliderRef.current.slickNext()}
            className="flex flex-row items-center ml-auto"
          >
            Next
            <Right />
          </Typography>
        </div>
      </div>
    ),
    customPaging: (i) => (
      <Typography variant="dot" className="text-xl">
        {i + 1}
      </Typography>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Section>
        <Typography variant="h2" className="mb-10 text-center md:col-start-2">
          The Portfolio
        </Typography>
        <div className="max-w-screen-lg pb-12 mx-auto">
          <Slider {...settings} ref={sliderRef}>
            <div className="px-2.5">
              <Image
                src="/images/slider/web038.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="px-2.5">
              <Image
                src="/images/slider/port113.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="px-2.5">
              <Image
                src="/images/slider/web032.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="px-2.5">
              <Image
                src="/images/slider/web038.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="px-2.5">
              <Image
                src="/images/slider/port113.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="px-2.5">
              <Image
                src="/images/slider/web032.jpg"
                layout="responsive"
                width={350}
                height={450}
                objectFit="cover"
                priority={true}
              />
            </div>
          </Slider>
        </div>
        <div className="mt-5 text-center">
          <Typography variant="button" href="/portfolio">
            Browse Portfolio
          </Typography>
        </div>
      </Section>
    </Container>
  );
};

export default Slideshow;
