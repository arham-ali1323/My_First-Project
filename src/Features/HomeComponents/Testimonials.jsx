import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import person2 from "../../images/person-2.png";


const Testimonial = () => {
  const renderCard = (key) => (
    <div key={key} className="px-3">
      <Card className="testimonial-custom-card overflow-hidden border-0 shadow-sm rounded-4">
          <Row>
            {/* Image Section */}
          <Col className="testimonial-img-container">
            <img
              src={person2}
              alt="User"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>

          {/* Text Section */}
          <Col className="p-4 d-flex flex-column justify-content-center bg-white w-100 testimonial-text">
            <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make.
            </p>
            <h6 className="fw-bold mb-0 name">Redwan Khan</h6>
          </Col>
</Row>
      </Card>
    </div>
  );

  return (
    <section className="testimonial-wrapper">
       <div className="anime-banner-wrapper">
          <Row className="anime-banner-content">
            <Col className="anime-banner-heading">
              <h2 className="mb-0">
                Within the reach of any anime fan Easy to use and effective
              </h2>
            </Col>
            <Col className="anime-banner-text">
              <p className="mb-0">
                Our AI will enhance the quality of your fan fiction or your
                post, it can create an interesting backstory or it can even
                advise you on how to continue with your text or conversation.
              </p>
            </Col>
          </Row>
        </div>
      <h3 className="my-5 text-center">What they say about us</h3>

      <OwlCarousel
        className="owl-theme"
        loop
        margin={20}
        autoplay
        autoplayTimeout={5000}
        dots
        items={2}
        responsive={{
          0: { items: 1 },
          768: { items: 1 },
          992: { items: 2 },
        }}
      >
        {[1, 2, 3, 4].map((id) => renderCard(id))}
      </OwlCarousel>
    </section>
  );
};

export default Testimonial;
