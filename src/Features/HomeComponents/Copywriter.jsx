import React from "react";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BookFill, SendFill, CameraFill } from "react-bootstrap-icons";

const cardData = [
  {
    title: "Full Stories",
    description: "Interesting and complex, with a good development and ending",
    icon: <BookFill size={24} color="#fff" />,
  },
  {
    title: "Posting",
    description: "For reddit or Quora, continue your conversation or post in your blog",
    icon: <SendFill size={24} color="#fff" />,
  },
  {
    title: "Feedback",
    description: "In addition to writing, the AI can review texts and give tips to improve them.",
    icon: <CameraFill size={24} color="#fff" />,
  }
];
 

const CopywritersSection = () => {  
  return (
    <section className="Copywriters  py-5">
      <Container className="content">
        <Row className="mb-4">
          <Col md={6}>
            <div className="left">
              <h2 className="fw-bold">
                One click copywriter <br /> for busy content managers
              </h2>
            </div>
          </Col>
          <Col md={6}>
            <div className="right">
              <p className="text-secondary">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
  <Row className="text-center">
    {cardData.map((card, index) => (
      <Col key={index} md={4} sm={12} className="mb-4">
<Card
  className="h-100 p-3 text-start"
  style={{
    background: "linear-gradient(52.95deg, #ECE3F3 18.19%, #D2DBF2 78.25%)", borderRadius:"14px"
  }}
>
          <Card.Body>
            <div className="circle mb-3">
              {card.icon}
            </div>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


    </section>
  );
};

export default CopywritersSection;
