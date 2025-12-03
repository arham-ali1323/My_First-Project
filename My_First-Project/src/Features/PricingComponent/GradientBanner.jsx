import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 const GradientBanner = () => {
  return (<>
    <Container className="gradient-banner">
    <Row>
      <Col> <h2 className="banner-title">
            Within the reach of any anime fan </h2></Col>
            <Col><button className="email-btn">SIGN UP NOW</button></Col>
    </Row>
  </Container>
    {/* <div className="gradient-banner-container">
      <div className="gradient-banner">
        <div className="banner-content">
          <h2 className="banner-title">
            Within the reach of any anime fan <br /> Easy to use and effective
          </h2>
          <p className="banner-description">
            Our AI will enhance the quality of your fan fiction or your post, 
            it can create an interesting backstory or it can even advise you 
            on how to continue with your text or conversation.
          </p>
        </div>
      </div>
    </div> */}
  </>
  
  );
};

export default GradientBanner;
