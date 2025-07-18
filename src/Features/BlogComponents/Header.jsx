import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Navbar from "../../Components/Navbar";

function Header() {
  return (  <>      
    <section className="header-section">
  <Navbar/>
      <Container>
        <Row className="align-items-center">
          {/* LEFT TEXT BLOCK */}
          <Col md={8} className="mb-4 mb-md-0 ">
            <div>
              <p className="header-subtitle">
                News & Articles
              </p>
              <h1 className="header-title">
                Our articles on Analytics, <br /> Growth & Tech
              </h1>
              <p className="header-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut <br />
                id nisl tellus rhoncus, imperdiet consequat ornare. Nunc, cursus <br />
                eget dui, ultricies lacus.
              </p>
            </div>
          </Col>

          {/* RIGHT SUBSCRIPTION CARD */}
          <Col md={4} className="mt-5">
            <Card className="subscription-card">
              <FaEnvelopeOpenText size={50} className="subscription-icon" />
              <h5 className="subscription-title">Subscribe to our Newsletter!</h5>
              <p className="subscription-text">
                Subscribe to our Newsletter! Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis risus dui faucibus eu. Blandit
                nisi dictum tortor eu. Quisque ullamcorper sollicitudin pretium.
              </p>

              <Form>
                <Row className="g-0">
                  <Col xs={12}>
                    <div className="subscription-form-wrapper">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className="subscription-input"
                      />
                      <Button
                        type="submit"
                        className="subscription-button"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section></>
  );
}

export default Header;
