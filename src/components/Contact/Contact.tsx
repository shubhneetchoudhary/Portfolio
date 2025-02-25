import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Get in Touch</h2>
        <p>Let’s create something amazing together!</p>

      </header>
      <div className="contacts">
        <div>
          <a href="#"><img src={emailIcon} alt="Email" /></a>
          <a href="#">subhneetchoudhary@gmail.com</a>
        </div>
        <div>
          <a href="tel:+918273532956"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918273532956">(+91) 8273532956</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}