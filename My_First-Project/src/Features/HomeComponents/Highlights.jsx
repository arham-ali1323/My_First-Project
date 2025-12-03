import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Highlights = () => {
  return (
    <section className="highlights-section">
      <Container>
        <Row className="">
          <Col xs={12} md={6} className="">
            <h2 className="Highlights-title mb-3">
              Fantasy Stories and Anime Post Specialized AI
            </h2>{" "}
          </Col>
          <Col xs={12} md={6} className="">
            <p className="Highlights-description mb-5">
              Our artificial intelligence can complete, start, continue, or make
              from <br />scratch a good anime and fantasy story, a Reddit post, or an
              answer <br /> to conversations.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="stat-item">
              <p className="stat-number">20+</p>
              <p className="stat-label">AI and Machine Learning Patterns</p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="stat-item">
              <p className="stat-number">76+</p>
              <p className="stat-label">
                Users approve and use regularly AI writing
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="stat-item">
              <p className="stat-number">&gt;96%</p>
              <p className="stat-label">Proven accuracy</p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="stat-item">
              <p className="stat-number">67</p>
              <p className="stat-label">Industry leading eNPS score</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Highlights;
