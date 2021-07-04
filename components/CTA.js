import Container from "./Container";
import Typography from "./Typography";

const CTA = () => (
  <div className="border-t border-black border-opacity-60">
    <Container>
      <div className="flex flex-col items-center justify-center py-10 space-y-5">
        <Typography variant="h2">Inquire Today</Typography>

        <Typography variant="p" className="max-w-md text-center">
          Get your event professionaly photographed. I can not wait to work with
          you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Typography variant="button" href="/inquire">
          Inquire Now
        </Typography>
      </div>
    </Container>
  </div>
);

export default CTA;
