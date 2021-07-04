import About from "../components/About";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Slider />
      <Quote>
        There is nothing better than loving and being loved in return.
      </Quote>
      <About />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
