import Card from "components/card/Card";
import SectionBreak from "components/sectionBreak/SectionBreak";
import Hero from "/components/hero/Hero";
import Layout from "/components/layout/Layout";
import ContactForm from "components/ContactForm/ContactForm";

function Home() {
  return (
    <Layout>
      <Hero
        heading="this is a heading"
        subHeading="this is a subheading"
        buttonText="Learn More"
        bgImage="/thumbsUp.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <SectionBreak />
      <h2>Contact</h2> 
      <ContactForm />
    </Layout>
  );
}

export default Home