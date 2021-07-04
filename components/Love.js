import Marquee from "react-fast-marquee";
import Section from "./Section";
import Typography from "./Typography";
import Heart from "./icons/Heart";

const Love = () => {
  return (
    <Section>
      <Typography variant="h2" className="mb-5 text-center">
        Little Things I Love
      </Typography>

      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        <Typography variant="h5" className="px-10 py-5 text-center">
          Being tired after a long day in the sun.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Making the most mundane things feel more romantic and intimate.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          La langue française.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          The feeling of fingertips softly stroking skin.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Old fashioned dresses that make you feel like you should be sitting in
          the middle of a field reading.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Going on drives to clear your mind.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Animals curled up so they look really small.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          When people randomly start dancing when they're happy.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Dancing in general!
        </Typography>
        <Heart size={20} />
      </Marquee>
      <Marquee
        gradient={false}
        direction="right"
        speed={30}
        pauseOnHover={true}
      >
        <Typography variant="h5" className="px-10 py-5 text-center">
          When the grass starts to turn green again in springtime.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Meeting someone for the first time and having an instant connection.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          When you finish a book and all you can do is hold it to your heart and
          mourn the loss of the characters you grew so close to.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Love itself.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Objects that are really tiny and cute.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Things that are lived in. I love antiques for this reason.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          The sound of a singing bowl.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Nostalgia.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Long deep conversations with your partner or loved one.
        </Typography>
        <Heart size={20} />
      </Marquee>
      <Marquee gradient={false} speed={20} pauseOnHover={true}>
        <Typography variant="h5" className="px-10 py-5 text-center">
          Songs that really hit home.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          When you laugh so hard your stomach hurts.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          That feeling when you're so happy all you can do is cry.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Cows!
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Friends who run to you when you need them.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          When strangers call you pet names like honey and sweetheart.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          The color yellow.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          When animals head butt you when they want some lovin'.
        </Typography>
        <Heart size={20} />
        <Typography variant="h5" className="px-10 py-5 text-center">
          Feeling something like it's the first time all over again.
        </Typography>
        <Heart size={20} />
      </Marquee>
    </Section>
  );
};

export default Love;
