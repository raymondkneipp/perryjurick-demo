import Section from "../components/Section";
import Container from "../components/Container";
import Typography from "../components/Typography";
import Layout from "../components/Layout";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/form/Button";

const Inquire = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <div className="max-w-screen-sm mx-auto space-y-5">
            <Typography variant="h1" className="text-center">
              Inquire
            </Typography>
            <Typography variant="h6" className="text-center">
              Feel free to email directly at perry@perryjurick.com
            </Typography>
            <form className="space-y-5">
              <Input name="name" label="Full Name" />
              <Input name="email" type="email" label="Email" />
              <Input name="phone" type="tel" label="Phone Number" />
              <Input
                name="date"
                type="date"
                label="Wedding / Event Date"
                msg="(mm/dd/yyyy)"
              />
              <Input name="text" type="text" label="Event Location" />
              <Textarea name="msg" type="text" label="Message" />
              <Button>Submit</Button>
            </form>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Inquire;
