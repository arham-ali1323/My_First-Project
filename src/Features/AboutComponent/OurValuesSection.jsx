import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LightbulbFill, FlagFill, PersonFill, LightningFill } from "react-bootstrap-icons";

function OurValuesSection() {
  return (
    <div className="our-values-section">
      <Container className="text-center">
        <h5 className="text-muted mb-2">Our Values</h5>
        <h2 className="fw-bold mb-4">A company is only as strong <br /> as its values.</h2>

        {/* Background paragraph */}
        <div className="background-paragraph">
          <p>At our software company, we pride ourselves on having a set of strong values that bring great people together. Our values include excellence, teamwork, innovation, and respect. By adhering to these values, we create a positive and supportive environment where our team can thrive.</p>
        </div>

        {/* Cards Section */}
        <Row className="gx-4 gy-4 justify-content-center">
          <Col md={6}>
            <Card className="value-card">
              <Card.Body className="d-flex flex-row align-items-center value-card-body">
                <div className="value-icon innovation-icon">
                  <LightbulbFill size={30} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold mb-1">Team work</h5>
                  <p className="text-muted small mb-0">
                    Our team is only as good as our ability to work together. We know that when we work together we
                    can achieve things that none of us could do on our own. Teamwork is essential to our success as a
                    software company.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="value-card">
              <Card.Body className="d-flex flex-row align-items-center value-card-body">
                <div className="value-icon ownership-icon">
                  <FlagFill size={30} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold mb-1">Take ownership</h5>
                  <p className="text-muted small mb-0">
                    Our company takes ownership of our products and is proud to provide industry-leading software that
                    our customers can rely on.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="value-card">
              <Card.Body className="d-flex flex-row align-items-center value-card-body">
                <div className="value-icon move-fast-icon">
                  <PersonFill size={30} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold mb-1">Move fast</h5>
                  <p className="text-muted small mb-0">
                    Our company takes ownership of our products and is proud to provide industry-leading software that
                    our customers can rely on.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="value-card">
              <Card.Body className="d-flex flex-row align-items-center value-card-body">
                <div className="value-icon be-innovative-icon">
                  <LightningFill size={30} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold mb-1">Be innovative</h5>
                  <p className="text-muted small mb-0">
                    "Innovate, improve, start again." This is our motto and we mean it!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurValuesSection;