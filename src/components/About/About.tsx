import { Container } from "./styles";
import shubhneetchoudhary from "../../assets/shubhneet_choudhary_image.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Shubhneet Choudhary, a web developer with hands-on
            experience in crafting dynamic and responsive web applications. My
            skills include HTML, CSS, JavaScript, TypeScript, React.js,
            Material-UI, and Mantine for UI, along with .NET Web API and Entity
            Framework for backend development. I have successfully delivered 3
            applications, ensuring seamless performance and user-friendly
            interfaces.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My services go beyond frontend development—I specialize in building
            robust web applications using React.js for dynamic user interfaces
            and .NET Web API with Entity Framework for efficient backend and
            database connectivity.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you’re looking for a custom web application or want to modernize
            your existing online platform, I’d love to collaborate and bring
            your ideas to life. Let’s create something exceptional together!
          </p>
        </ScrollAnimation>

     
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={shubhneetchoudhary}
            alt="Shubhneet Choudhary"
          />
        </ScrollAnimation>
      </div>

      <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h1>Tools & Technologies</h1>
        </ScrollAnimation>
    </Container>
  );
}
