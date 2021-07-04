import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Section from "./Section";
import Container from "./Container";
import Right from "./icons/Right";
import Left from "./icons/Left";
import Typography from "./Typography";

const Inspirations = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <Section>
      <div className="py-10 bg-black bg-opacity-5 sm:py-24">
        <Container>
          <div className="flex items-center max-w-screen-lg mx-auto sm:space-x-10">
            <Typography
              variant="slider"
              onClick={() => slider1.current.slickPrev()}
              className="flex flex-row items-center"
            >
              <Left />
            </Typography>

            <div className="grid items-center justify-center grid-cols-1 gap-10 md:grid-cols-2">
              <Slider
                asNavFor={nav2}
                ref={slider1}
                arrows={false}
                fade={true}
                focusOnSelect={false}
                // centerMode={true}
              >
                <div>
                  <Image
                    src="/images/inspirations/k09a8416.jpg"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <Image
                    src="/images/inspirations/jordan010.jpg"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <Image
                    src="/images/inspirations/dscn2197.jpg"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <Image
                    src="/images/inspirations/k09a2190.jpg"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div>
                  <Image
                    src="/images/inspirations/carbaby007.jpg"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Slider>

              <div>
                <Typography variant="h6" className="mb-5 text-center">
                  Inspirations
                </Typography>

                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  fade={true}
                  arrows={false}
                  focusOnSelect={false}
                  adaptiveHeight={true}
                >
                  <div className="flex flex-col items-center justify-center space-y-5">
                    <Typography className="text-center" variant="h3">
                      Culture
                    </Typography>
                    <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                      I have a thirst for knowledge, and therefore learning
                      about something different from what I know is fascinating
                      to me. There's a feeling certain cultures give you that we
                      don't have in America, and I want to explore them all.
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-5">
                    <Typography className="text-center" variant="h3">
                      The Arts
                    </Typography>
                    <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                      I'm that person who loves long car rides. Wanna go on a
                      road trip? I'm down! Though I've never been on a plane (I
                      know!), I've always wanted to travel overseas. My top two
                      places to visit are France and Japan!
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-5">
                    <Typography className="text-center" variant="h3">
                      Travel
                    </Typography>
                    <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                      From literature to dancing, museums to tattoos, I love it
                      all. I could never picture myself being anything but an
                      artist. It's truly deep in my soul and something I will
                      never tire of. It's a community I will always feel at home
                      in.
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-5">
                    <Typography className="text-center" variant="h3">
                      Animals
                    </Typography>
                    <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                      Meet Ikarus! This girl right here is my best friend in the
                      entire world and I have no idea what I would do without
                      her. I've had as many as six animals at once and even
                      though my mother called it the zoo I was in heaven!
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-5">
                    <Typography className="text-center" variant="h3">
                      Family
                    </Typography>
                    <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                      I'm hugely family oriented, probably because I have such
                      an amazing family! I've always considered my mom one of my
                      best friends and this adorable guy here is my wonderful
                      nephew Carson! The more lovin' I can give to this little
                      guy the better. And I'm so excited to soon have three new
                      nieces! And guess what, I only have one sister! Yup, she's
                      having triplets! I couldn't be more excited to welcome
                      Quinn, Dani & Ozzy into the world soon.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>

            <Typography
              variant="slider"
              onClick={() => slider1.current.slickNext()}
              className="flex flex-row items-center ml-auto"
            >
              <Right />
            </Typography>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Inspirations;
