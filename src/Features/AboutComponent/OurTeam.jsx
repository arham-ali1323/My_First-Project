import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamImg from '../../images/TeamImg.png';
import TeamImg2 from '../../images/TeamImg2.png';

function StorySection() {
  return (
    <div className="story-section">
      <Container>
        <Row className="story-row">
          <Col md={8} className="story-content">
            <h2 className="story-title">A great story starts with a great team</h2>
            <p className="story-description">
              If you want to create a great story, you need to start with a great team. By
              putting together a group of talented and passionate people, you can set
              the foundation for an incredible journey. As with any team, there will be
              challenges and bumps along the way, but if everyone is committed to the
              story, the end result will be worth it. So if you want to write a
              masterpiece, assemble the dream team and let the adventure begin.
            </p>
            <p className="story-signature">- Sarah Kraft, CEO & Co-Founder</p>
          </Col>
          <Col md={4} className="story-images">
            <div className="story-image-container">
              <img
                src={TeamImg}
                alt="Team Success Illustration"
                className="story-image"
              />
            </div>
            <div className="story-image-container">
              <img
                src={TeamImg2}
                alt="Team Collaboration Illustration"
                className="story-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StorySection;