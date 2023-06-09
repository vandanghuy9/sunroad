import About from "@/components/About";
import Registration from "@/components/Registration";
import Testimonial from "@/components/Testimonial";
import PageHeader from "@/components/PageHeader";

const AboutPage = () => {
  return (
    <>
      <PageHeader title="Giới thiệu"/>
      <About />
      <Registration />
      <Testimonial />
    </>
  );
};

export default AboutPage;
