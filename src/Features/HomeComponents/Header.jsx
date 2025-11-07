import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import checkIcon from "../../images/check-icon.png";

function Header() {
  return (
    <section className='main'>
      {/* Hero content with padding to account for navbar */}
      <Container className="hero-container" style={{ paddingTop: '100px' }}>
        <Row>
          {/* Text column */}
          <Col xs={12} md={8}>
            <div className="name">
              <h1>Fast and Automatic<br/>Anime and Fantasy<br/>Writing</h1>
              <p>Texts written by artificial intelligence <br />
              Immediate, easy and with amazing results</p>
              <div className="header-btns">
                <button className='header-btn1'>Free Trial</button>
                <button className='header-btn2'>Sign up with Google</button>
              </div>
            </div>
          </Col>

          {/* Checklist column */}
          <Col xs={12} md={4}>
            <div className="header-checklist">
              <div className="header-checklist-item">
                <img src={checkIcon} alt="Check" />
                GPT-3 from OpenAI
              </div>
              <div className="header-checklist-item">
                <img src={checkIcon} alt="Check" />
                20+ Business Categories
              </div>
              <div className="header-checklist-item">
                <img src={checkIcon} alt="Check" />
                Re-generated documents
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
