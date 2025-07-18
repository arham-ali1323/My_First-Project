import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div className="bg-color"></div>
      <footer className="footer">
        <Container className="signup-cta-container">
          <div className="signup-cta">
            <h2 className="cta-title">Try it for free right now!</h2>
            <p className="cta-description">
              Test the quality of our program and let yourself be convinced by
              the effectiveness of our AI. Start right now to generate quality
              content!
            </p>
            <div className="cta-buttons">
              <Link
                to="https://workspace.google.com/intl/en-US/gmail/"
                className="signUP-btn email-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                SIGN UP WITH EMAIL
              </Link>

              <Link
                to="https://accounts.google.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="signUP-btn google-btn"
              >
                SIGN UP WITH GOOGLE
              </Link>
            </div>
          </div>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="footer-section">
                <h3>CLIENTS</h3>
                <ul>
                  <li>
                    <Link as={NavLink} to="/signin" className="login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link as={NavLink} to="/signup" className="login">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-section">
                <h3>SOCIAL MEDIA</h3>
                <ul>
                  <li>
                    <Link as={NavLink} to="https://twitter.com" target="_blank" className="login">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-section">
                <h3>LEGAL INFO</h3>
                <ul>
                  <li>
                    <Link
                      as={NavLink}
                      to="https://supportcenter.example.com"
                     className="login"
                    >
                      Legal information
                    </Link>
                  </li>
                  <li>
                    <Link
                      as={NavLink}
                      to="https://www.example.com/terms-and-conditions.com"
                      target="_blank"
                       className="login"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      as={NavLink}
                      to="https://www.example.com/privacy-policy.com"
                      target="_blank"
                       className="login"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-section">
                <h3>SUPPORT</h3>
                <ul>
                  <li>
                    <Link
                      as={NavLink}
                      to="https://helpdesk.example.com"
                      target="_blank"
                       className="login"
                    >
                      Helpdesk
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <div className="copyright">
              <hr />
              <p>&copy;T22 All right reserved</p>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
