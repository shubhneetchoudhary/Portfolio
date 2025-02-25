import Particles from "react-tsparticles"
import { Container } from "./styles";
import { ConnectInfo } from "../ConnectInfo/ConnectInfo";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg"
import TechSkills from "../TechSkills/TechSkills";



export function Main() 
{
  return (
    <Container>
      <ConnectInfo></ConnectInfo>
      <About></About>
      <TechSkills></TechSkills>
      <Project></Project>
      <Contact></Contact>

    </Container>
  );
}