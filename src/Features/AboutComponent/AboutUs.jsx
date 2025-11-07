import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimeIllustration from "../../images/animeIllustration.png";
import BackgroundImage from "../../images/bannerbg.png";

const AboutUsSection = () => {
  return (
    <section className="aboutus-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Container className="text-center text-white py-5">
        <h2 className="aboutus-title">
          Our mission at <span className="aniquest-highlight">Aniquest</span> is
          to help users
          <br /> create their own anime stories
        </h2>
        <p className="aboutus-description">
          Aniquest is a user-friendly tool that helps users create their own
          anime stories. It provides various templates and resources from which
          users can unleash their anime-style creativity. Whether you're a fan
          of anime or just looking for a new creative outlet, Aniquest is the
          perfect place for you!
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <img
              src={AnimeIllustration}
              alt="Anime Illustration"
              className="img-fluid rounded shadow bg-white aboutus-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
