import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Section from "../components/Section";
import Container from "../components/Container";
import Right from "../components/icons/Right";
import Left from "../components/icons/Left";
import Typography from "../components/Typography";
import Layout from "../components/Layout";
import CTA from "../components/CTA";

const Testimonials = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const width = 150;
  const height = 200;

  return (
    <Layout>
      <Section>
        <Container>
          <Typography variant="h1" className="text-center">
            Praise
          </Typography>
        </Container>
      </Section>

      <Container>
        <Section>
          <div className="max-w-screen-md mx-auto">
            <Slider asNavFor={nav2} ref={slider1} arrows={false} fade={true}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port027.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port024.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port004.jpg"
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
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port078.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port079.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port095.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port096.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/thecarsons029.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/j-mcarson022.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/cody-emilee060.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/cody-emilee010.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port102.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port105.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port109.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port108.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port130.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/s-abutterbaugh031.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/port101.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
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
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/k09a0071.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/k09a9300.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      src="/images/testimonials/more/k09a3792.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/testimonials/more/port013.jpg"
                      width={width}
                      height={height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
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
              <Typography variant="h6" className="my-5 text-center">
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
              slidesToScroll={1}
              beforeChange={(index) => slider2.current.slickGoTo(index - 1)}
            >
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Chantel & Firas
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  First of all I just want to say that Perry is a wonderful
                  photographer and a wonderful person. If you have any
                  reservations about booking her as your photographer, I can
                  assure you that you won’t be disappointed. When we first saw
                  her portfolio we were really drawn to how light and airy and
                  natural her style is. We also loved how authentically she
                  captures people and how you can really visualize their love
                  for each other. It’s almost like a little glimpse into their
                  relationship in each of her pictures. When we met her in
                  person we fell in love with her. She’s absolutely adorable and
                  so sweet and kind and fun to be around. When we did our
                  engagement shoot we felt like we were hanging out with a
                  friend and had so much fun together. We knew then that we made
                  the right choice in booking her. We got so excited to see her
                  again at the wedding and again it felt like meeting up with an
                  old friend and hanging out. She did a great job staying
                  organized, responding to all of our questions, and capturing
                  all the shots we specifically asked for. She was great at
                  capturing our huge family and all the kids in a timely manner
                  and keeping everyone on track at the wedding. Our family,
                  friends, and wedding party all gave so many complements on how
                  sweet of a person she is. Our pictures all turned out
                  BEAUTIFUL and she gave us a sneak peek what felt like almost
                  immediately after the wedding. It didn’t take very long at all
                  for her to get the rest of the gallery to us which was so nice
                  to not have to wait forever. So not only is she affordable and
                  talented, you can really tell she loves what she does and is
                  so much fun to be around and we can’t wait to have her
                  photograph our family again (We have 3 little boys).
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Casey & Maranda
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  My favorite vendor ever! We honestly couldn’t have picked a
                  better photographer for our wedding. Perry is so outgoing and
                  kind and we knew she was going to be the perfect match from
                  the moment we met her! She was easily the most responsive and
                  accommodating vendor we had. She traveled for us, shot
                  flawlessly in just about all the elements weather-wise for us
                  and made everyone she photographed feel so comfortable and
                  confident in front of a camera! She is organized,
                  well-prepared, creative with her photos and the cherry on top
                  was her sending me sneak peek images so quickly! I could
                  seriously rave about this sweet girl all day.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Bridget & Robby
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  Perry was SO fun and SO easy to work with. Being a Covid bride
                  came with many plans being cancelled and rearranged. Perry
                  didn’t skip a beat and was the constant throughout a very
                  stressful wedding season. Perry was so personable and made the
                  photo shoots, both engagement and wedding day, so much fun!!
                  Her editing skills are like none other and the brightness of
                  her photos are amazing!! We loved having Perry be a special
                  part of our big day and will definitely be using her again in
                  the future!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Makenzie & Ross
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  Perry and I have been working together for a few years now. I
                  am a makeup artist! With working with her and seeing her
                  style/ personality I knew we would be a perfect match once I
                  got engaged! When I got engaged I already knew I wanted her to
                  be my wedding photographer! She is so easy to work with, knows
                  her angles! Really cares about your vision and what you have
                  to say! I highly recommend Perry as someone as picky as me
                  every shoot we do I’m always satisfied with her work! Perry is
                  your girl!
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
                  Emilee & Cody
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  We adore Perry!! We haven’t gotten out full wedding album back
                  yet because we’ve only been married a few days, but between
                  the sneak peaks we have seen and our engagement pictures she
                  took, I couldn’t be happier with the quality of her work. She
                  truly knows how to capture people’s true selves. She was kind
                  and friendly and funny. She made us so comfortable. She was so
                  supportive and communicated so effectively throughout the
                  entire process. I’ve recommended her to all my friends getting
                  married!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Drew & Tracy
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  Perry was absolutely amazing to work with. She was responsive,
                  understanding, kind, and so flexible to our time constraints,
                  changes, and weather issues. She was great with guidance and
                  communication. She came early and did her own thing while I
                  was getting ready--taking detail shots and working in the
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
                  Wes & Danya
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  Perry was wonderful to work with on my big day, she was so
                  sweet and was great and keeping everything on track. I will
                  definitely be using her in the future for any photography
                  needs. My wedding pictures look amazing and I am so happy I
                  used Perry as my photographer. I would highly recommend her
                  for your wedding! Job well done.
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
                  the wedding day with coordinating times; it made everything
                  flow so smoothly. We couldn’t have asked for a better
                  photographer. We would recommend her to anyone. Thanks Perry!
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
                  Mark & Harmony
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  From the very beginning Perry quickly responded and provided
                  detailed information with an enthusiastic tone. She shared how
                  much she enjoys engagement and wedding photography. She
                  quickly made my fiancé and I feel comfortable during our
                  engagement session. On our wedding day, she took beautiful and
                  artistic shots. We fell in love with our photos which she
                  provided in a prompt manner. She is open to ideas and has many
                  of her own. We highly recommend her to those planning a future
                  wedding.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Typography className="text-center" variant="h3">
                  Corey & Karissa
                </Typography>
                <p className="max-w-xl mx-auto font-serif text-justify text-black text-opacity-60">
                  We chose Perry as our photographer for our wedding. It was one
                  of the best decisions we made! When everything is said and
                  done, the pictures are all you have left. She captured every
                  detail of our day so perfectly. I can’t stop looking at our
                  pictures. She was fun to be around and was like my right hand
                  man on my wedding day. She even helped me get cake out of my
                  dress. Her editing style is beautiful. My husband and I are in
                  awe at how amazing everyone looks. We definitely recommend her
                  for weddings, or any other photography needs!
                </p>
              </div>
            </Slider>
          </div>
        </Section>
      </Container>

      <CTA />
    </Layout>
  );
};

export default Testimonials;
