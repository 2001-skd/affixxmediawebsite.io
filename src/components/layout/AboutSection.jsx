import SectionHeading from "../ui/SectionHeading";
import aboutImg from "../../assets/gamright.webp";
import Card from "../ui/Card";
import image from "../../assets/images/who_we_are.png";

const AboutSection = () => {
  const content = (
    <>
      We’re a results-driven digital marketing team obsessed with growth. From{" "}
      strategy to storytelling, we craft campaigns that turn clicks into
      customers. With a sharp focus on creativity and performance, we deliver{" "}
      real impact not just impressions. Let’s build something unforgettable,
      together.
    </>
  );

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10">
      <SectionHeading heading="About Us" />
      <Card content={content} imageSrc={image} title="About Us" />
    </section>
  );
};

export default AboutSection;
