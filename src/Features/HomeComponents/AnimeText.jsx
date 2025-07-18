import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimeText from "../../images/AnimeText.png";

const AnimeTextComponent = () => {
  return (
    <section className="anime-text-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="text-content">
              <h2 className="Anime-title">
                Anime Text in a blink <br /> Automatic and <br />Immediate
              </h2>
              <p className="Anime-description">
                The technology of our AI assures great writing, without waiting,
                without creative block, and instant content only.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="image-container text-center text-md-end">
              <img
                src={AnimeText}
                alt="AI Writing Mockup"
                className="img-fluid mockup-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AnimeTextComponent;
