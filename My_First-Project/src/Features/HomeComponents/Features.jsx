import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "../../images/mid-img.png";
import { FaCheckCircle } from "react-icons/fa";

function Feature() {
  const items = [
    "Lorem Ipsum is simply dummy",
    "Lorem Ipsum is simply dummy",
    "Lorem Ipsum is simply dummy",
  ];
  return (
    <section className="features">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={About} alt="#" className="img-fluid"/>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="fw-bold mt-4">
              One click copywriter
              <br />
              for busy content <br /> manager{" "}
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              voluptas beatae pariatur vero quasi est nulla, iusto quos,
              adipisci excepturi non animi ea, magnam harum. Veritatis ratione
              quidem necessitatibus odio.
            </p>
            <ul className="checklist">
              <li>                
                <p><span><FaCheckCircle className="check-icon" /></span>Powered by GPT-3 from OpenAI</p>
              </li>
              <li>                
                <p><span><FaCheckCircle className="check-icon" /></span>Different genres and tones</p>
              </li>
              <li>                
                <p><span><FaCheckCircle className="check-icon" /></span>To publish on networks or use them in your campaigns</p>
              </li>
              <a href="/" className="read-more-btn">
              Read More →
            </a>
            </ul>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Feature;
