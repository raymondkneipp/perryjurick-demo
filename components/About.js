import Image from "next/image";
import Section from "./Section";
import Container from "./Container";
import Typography from "./Typography";

const About = () => (
  <Container>
    <Section>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid items-center justify-center gap-y-5 md:gap-x-10 place-items-center md:grid-cols-2">
          <Typography className="md:col-start-2" variant="h6">
            Meet the Artist
          </Typography>

          <Typography className="text-center md:col-start-2" variant="h2">
            Perry Jurick
          </Typography>

          <div className="flex justify-center md:place-self-start md:row-start-1 md:row-span-6">
            <Image
              src="/images/perry/perry.jpg"
              width={400}
              height={500}
              layout="intrinsic"
              objectFit="cover"
            />
          </div>

          <Typography variant="p" className="max-w-md md:col-start-2">
            Capturing your relationship in it's purest form is the most
            important part of my job, and this is something I always carry with
            me while shooting.
          </Typography>

          <Typography variant="p" className="max-w-md md:col-start-2">
            My goal as a photographer is to bring out the beauty and intimacy
            that nobody sees.
          </Typography>

          <Typography variant="p" className="max-w-md md:col-start-2">
            This is your time to remember the day that you and your best friend
            are united for the rest of your life, and I want to be there to
            capture it for you.
          </Typography>

          <Typography
            variant="button"
            className="md:col-start-2"
            href="/discover"
          >
            Read More
          </Typography>
        </div>
      </div>
    </Section>
  </Container>
);

export default About;
