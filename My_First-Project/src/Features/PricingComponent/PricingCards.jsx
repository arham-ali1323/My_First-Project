import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const FeatureList = () => (
  <ul className="price-checklist list-unstyled">
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
  <Card className="pricing-card shadow-sm h-100">
    <Card.Body className="d-flex flex-column p-3">
      <div>
        <Card.Title>{title}</Card.Title>
        <h2>
          ${price} <span className="text-muted">/month</span>
        </h2>      </div>      <div className="price-feature">
        <Card.Text className="Pricecard-text">5-day 100% money back guarantee</Card.Text>
        {children}


        <FeatureList />
        <Button href="/" className="upgrade-button mt-3 mx-auto">
          Upgrade Now
        </Button>
      </div>
    </Card.Body>
  </Card>
);

function CardExample() {
  const [value, setValue] = useState(30);

  return (
    <section className="price-section">
      <Container>
        <Row className="text-center g-4 my-5">
          <Col>
            <h1 className="mt-5">
              Start writing 10x faster <br /> with AI
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={3} className="mb-4 d-flex" id="price">
            <PricingCard title="Starter" price="49" />
          </Col>
          <Col md={6} lg={3} className="mb-4 d-flex" id="price">
            <PricingCard title="Pro" price="99" />
          </Col>
          <Col md={6} lg={3} className="mb-4 d-flex" id="price">
            <PricingCard title="Business" price="199" />
          </Col>
          <Col md={6} lg={3} className="mb-4 d-flex" id="price2">
            <PricingCard title="Enterprise" price="299">
              <div className="enterprise-controls d-flex flex-column align-items-center p-3 price-feature">
                <div className="range-labels d-flex justify-content-between w-100 fw-bold mb-2">
                  <span>50K</span>
                  <span>700K</span>
                </div>
                <div className="progress-container w-100 position-relative"></div>
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
    </section>
  );
}

export default CardExample;
