import Container from "../components/Container";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Image from "next/image";
import Quote from "../components/Quote";
import Inspirations from "../components/Inspirations";
import Love from "../components/Love";

const Discover = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Typography variant="h1" className="text-center">
            Discover
          </Typography>
          <Typography variant="h5" className="text-center">
            Pure, Emotive Artistry
          </Typography>
        </Container>
      </Section>

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
                important part of my job, and this is something I always carry
                with me while shooting.
              </Typography>

              <Typography variant="p" className="max-w-md md:col-start-2">
                My goal as a photographer is to bring out the beauty and
                intimacy that nobody sees.
              </Typography>

              <Typography variant="p" className="max-w-md md:col-start-2">
                This is your time to remember the day that you and your best
                friend are united for the rest of your life, and I want to be
                there to capture it for you.
              </Typography>

              <Image
                src="/images/icon.svg"
                layout="intrinsic"
                width={100}
                height={50}
              />
            </div>
          </div>
        </Section>
      </Container>

      <Quote>
        It’s amazing to think that we have the potential to be so many different
        kinds of people. I want to be all of them.
      </Quote>

      <Container>
        <Section>
          <div className="max-w-screen-lg mx-auto mb-10">
            <Image
              src="/images/perry/perry2.jpg"
              layout="responsive"
              width={300}
              height={150}
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <div
            className="max-w-screen-lg mx-auto space-y-5 column"
            // style={{ columnCount: 3, columnGap: "2.5rem" }}
          >
            <Typography variant="h3">Finding A Deeper Meaning</Typography>
            <Typography variant="p" className="text-justify">
              I've been a photographer for seven years, but originally I was a
              writer. Art has always been a significant part of my life. I wrote
              my first novel at the age of thirteen (not that it was very good!)
              and I always believed I would be an author someday. I still
              believe I might. Because of this, I feel photography is an
              extension of my love of story telling. Being able to tell someones
              story through photographs and purely capture their emotion, there
              is something so raw about it. At a young age I became obsessed
              with the ability to connect with sentiment living deep inside
              someone and a deeper meaning in life. I feel as though photography
              has brought me closer to that.
            </Typography>
            <Typography variant="h3">A Great Affinity</Typography>
            <Typography variant="p" className="text-justify">
              There is something so beautiful in the movement of the human body.
              The connection we feel to others. It's wondrous to me how there
              are certain people that we connect with on a profound level. The
              intimacy we only show to that one person, the one soul that the
              connection is so deep and so mutually understood. You've found
              that. You have the person who you can call your own, who will
              always be there with you even when they're not. That is so
              beautiful. When I was young, I asked my mother how she knew that
              she loved my father and she said through tears, "He's my best
              friend." Ever since that day I knew exactly what I was searching
              for.
            </Typography>
            <Typography variant="h3">An Everlasting Moment</Typography>
            <Typography variant="p" className="text-justify">
              So what will I capture that others won't? I want to capture the
              affection that is only showed in private, but in a delicate way. I
              want to create a wonder that is almost mysterious. I want to give
              a peek into something nobody else will understand but the two of
              you. Most importantly, I want you to reminisce on that moment. To
              be transported in time back to the awareness of peace you feel
              with each other. I want to leave you with a drive to feel that
              serenity, that intimacy, with each other every single day while
              your souls combine.
            </Typography>
            <Typography variant="h3">Unspoken Love</Typography>
            <Typography variant="p" className="text-justify">
              These images should act as a profession of the adoration you have
              for each other. They should be a divulgence of the affinity you
              share for one another. I will do everything in my power to help
              you connect with your partner on a deeper level. I don't want your
              photoshoot to just be a photoshoot, I want it to be a reflection
              of your ceaseless love. My main purpose in life is to help people
              comprehend how immensely powerful it is to love and be loved in
              return. I just love love.
            </Typography>
          </div>
        </Section>
      </Container>

      <Quote author="Chloé Williams">
        I would like to live a life where saying I love you is redundant. One
        that makes it so clear I really do but must say it anyway in fear it
        might burst from me, might cause a scene, might split me in two.
      </Quote>

      <Container>
        <Section>
          <div className="flex flex-row max-w-screen-lg mx-auto space-x-10">
            <div>
              <Image
                src="/images/Port016.jpg"
                layout="intrinsic"
                width={500}
                height={400}
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/images/Port017.jpg"
                layout="intrinsic"
                width={500}
                height={400}
                objectPosition="center"
                objectFit="cover"
              />
            </div>
          </div>
        </Section>
      </Container>

      <Inspirations />

      <Love />
    </Layout>
  );
};

export default Discover;
