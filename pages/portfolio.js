import Layout from "../components/Layout";
import CTA from "../components/CTA";
import Typography from "../components/Typography";
import Section from "../components/Section";
import Container from "../components/Container";
import ModalImage from "react-modal-image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Portfolio = () => {
  var pictures = [
    "Port007.jpg",
    "Port016.jpg",
    "Port017.jpg",
    "Port052.jpg",
    "Port063.jpg",
    "Port089.jpg",
    "Port116.jpg",
    "hero/port037.jpg",
    "hero/port012.jpg",
    "hero/port034.jpg",
    "hero/port030.jpg",
    "hero/port076.jpg",
    "hero/port095.jpg",
    "inspirations/carbaby007.jpg",
    "inspirations/dscn2197.jpg",
    "inspirations/jordan010.jpg",
    "inspirations/k09a8416.jpg",
    "slider/web038.jpg",
    "slider/port113.jpg",
    "slider/web032.jpg",
    "testimonials/k09a0071.jpg",
    "testimonials/k09a2901.jpg",
    "testimonials/k09a5495.jpg",
    "testimonials/k09a5725.jpg",
    "testimonials/s-abutterbaugh031.jpg",
    "testimonials/thecarsons029.jpg",
    "testimonials/k09a1985.jpg",
    "testimonials/more/port024.jpg",
    "testimonials/more/port027.jpg",
    "testimonials/more/port004.jpg",
    "testimonials/more/port078.jpg",
    "testimonials/more/port079.jpg",
    "testimonials/more/port096.jpg",
    "testimonials/more/port095.jpg",
    "testimonials/more/cody-emilee010.jpg",
    "testimonials/more/cody-emilee060.jpg",
    "testimonials/more/j-mcarson022.jpg",
    "testimonials/more/port102.jpg",
    "testimonials/more/port105.jpg",
    "testimonials/more/port109.jpg",
    "testimonials/more/port108.jpg",
    "testimonials/more/port130.jpg",
    "testimonials/more/port101.jpg",
    "testimonials/more/k09a3792.jpg",
    "testimonials/more/k09a9300.jpg",
    "testimonials/more/port013.jpg",
  ];

  useEffect(() => {
    gsap.utils.toArray(".photo").forEach(function (item) {
      gsap.from(item, {
        ease: "power3.out",
        opacity: 0,
        scale: 1.15,
        y: 100,
        scrollTrigger: item,
      });
    });
  }, []);

  return (
    <Layout>
      <Section>
        <Container>
          <Typography variant="h1" className="mb-5 text-center">
            The Portfolio
          </Typography>
          <Typography variant="p" className="max-w-xl mx-auto text-center">
            The feeling you get from looking at a photograph is what I strive
            for. If you look at my work and find it emotive, that's all I can
            ask for. When you look at a good photograph, you can almost feel how
            the wind felt, smell the ocean, sense your heart pull with the
            longing, the tension between the subjects.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-10 column">
            {pictures.map((img, index) => (
              <ModalImage
                small={`/images/${img}`}
                large={`/images/${img}`}
                hideDownload={true}
                className="photo"
                key={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </Layout>
  );
};

export default Portfolio;
