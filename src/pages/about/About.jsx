import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum
        omnis ex, fuga temporibus qui nesciunt odio aliquam.
      </Header>

      <section className="about__story">
        <div className="container about__container">
          <div className="about__section-img">
            <img src={StoryImage} alt="Our Story"/>
          </div>

        </div>

      </section>
    </>
  );
};

export default About;
