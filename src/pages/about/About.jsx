import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum
        omnis ex, fuga temporibus qui nesciunt odio aliquam.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              deserunt modi eveniet ipsam, sed est, quibusdam necessitatibus
              voluptas eligendi aperiam molestiae, laborum blanditiis vel ut
              architecto eos quos?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              hic, autem molestias, beatae corrupti reprehenderit voluptates
              magnam facere fuga maxime non id quos ducimus iste!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo
              enim in impedit hic distinctio tempora?
              </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              deserunt modi eveniet ipsam, sed est, quibusdam necessitatibus
              voluptas eligendi aperiam molestiae, laborum blanditiis vel ut
              architecto eos quos?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              hic, autem molestias, beatae corrupti reprehenderit voluptates
              magnam facere fuga maxime non id quos ducimus iste!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              deserunt modi eveniet ipsam, sed est, quibusdam necessitatibus
              voluptas eligendi aperiam molestiae, laborum blanditiis vel ut
              architecto eos quos?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              hic, autem molestias, beatae corrupti reprehenderit voluptates
              magnam facere fuga maxime non id quos ducimus iste!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo
              enim in impedit hic distinctio tempora?
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
