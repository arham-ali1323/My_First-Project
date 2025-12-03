import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function WhatWeDoSection() {
  return (
    <div className="what-we-do-section">
      <Container className="what-we-do-container">
        <h2 className="section-title">
          What <span className="highlight-word">We</span> Do
        </h2>
        <div className="content-box">
          <p className="lead-text">
            Aniquest is a tool for creating content and stories within the anime for all fans who need
            help with the development of their texts, perfect for when you're on Reddit or Quora and
            have no ideas to post or get hit by the hated art block, in just seconds you will have at
            your disposal a story, post or blog of great quality and with interesting content that will
            give you a great visualization of your work.
          </p>
          <p className="description-text">
            In our company we are aware of how complicated it is to get quality content focused on
            anime and that is why we develop our AI with a large amount of information to help
            enhance the quality of publications, Aniquest has the ability to make original and
            interesting stories, develop fanfics without continuity errors, make summaries of
            interviews with Mangakas and in addition to creating, it also revises and corrects
            existing texts or continues half stories to give them a closure, the possibilities are
            incredibly big!
          </p>
          <p className="description-text">
            Our artificial intelligence has been trained in the last four years with information from
            more than 200 million texts related to the world of anime, dialogues between characters,
            storytelling, interviews with mangaka and reviewing summaries and works related to all
            the most important anime our AI has almost a century of content in its database, with
            this information library, Aniquest can generate complete and quality texts, from stories,
            fanfics or publications for blogs or forums.
          </p>
          <p className="description-text">
            In addition, due to its knowledge in story development, character development and world
            construction, our AI can also help writers of genres such as fantasy, people outside of
            anime who want new ideas for their stories and it is also perfect for players and game
            masters of role-play games like Dungeons and Dragons!
          </p>
          <p className="description-text">
            Our AI is made by fans for fans, it is designed to cover all the needs of anime fans and to
            leave the waiting, the search for inspiration, the creative blocks and the poor quality
            content in the past, Aniquest is the best alternative, so if you want to lift your passion to
            the 1000% join our community and enjoy an experience like no other.
            Aniquest, the future of anime is written now.
          </p>
        </div>
        <Button variant="primary" className="cta-button">
          Free Trial
        </Button>
      </Container>
    </div>
  );
}

export default WhatWeDoSection;