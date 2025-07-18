import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";

const FeatureList = () => (
  <ul className="checklist list-unstyled">
    {[
      "Quia rem est sed impedit magnam",
      "Dolorem vero ratione voluptates",
      "Qui sed ab doloribus voluptatem dolore",
      "Laborum commodi molestiae id et fugiat",
      "Nam ut ipsa nesciunt culpa modi dolor",
    ].map((text, idx) => (
      <li key={idx}>
        <p>
          <FaCheck className="text-success me-2" />
          {text}
        </p>
      </li>
    ))}
  </ul>
);

const PricingCard = ({ title, price, children }) => (
  <Card className="shadow-sm h-100">
    <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <Card.Title>{title}</Card.Title>
        <h2>
          ${price} <span className="text-muted">/month</span>
        </h2>
        <Card.Text>5-day 100% money back guarantee</Card.Text>
        {children}
        <FeatureList />
      </div>
      <Button
        href="/"
        className="mt-3 mx-auto"
        style={{
          backgroundColor: "#CA3FD6",
          color: "white",
          border: "none",
          height: "40px",
          width: "180px",
        }}
      >
        Upgrade Now
      </Button>
    </Card.Body>
  </Card>
);

function CardExample() {
  const [value, setValue] = useState(30);

  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h1>
              Start writing 10x faster <br /> with AI
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
            </p>
          </Col>
     
          <Col md={6} lg={3} className="mb-4">
            <PricingCard title="Starter" price="49" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <PricingCard title="Pro" price="99" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <PricingCard title="Business" price="199" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <PricingCard title="Enterprise" price="299">
              <div className="d-flex flex-column align-items-center p-3">
                <div className="d-flex justify-content-between w-100 fw-bold mb-2" style={{ maxWidth: "300px" }}>
                  <span>50K</span>
                  <span>700K</span>
                </div>
                <div className="w-100 position-relative" style={{ maxWidth: "300px" }}>
                  <ProgressBar now={value} className="custom-progress" />
                  <div
                    className="slider-thumb"
                    style={{ left: `calc(${value}% - 10px)` }}
                  ></div>
                </div>
                <Form.Range
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="custom-slider mt-3"
                />
              </div>
            </PricingCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardExample;
