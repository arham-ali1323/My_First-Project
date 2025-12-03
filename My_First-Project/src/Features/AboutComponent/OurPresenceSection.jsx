import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WorldMap from '../../images/WorldMap.png';
import MiamiFlorida from '../../images/MiamiFlorida.png';
import Philadelphia from '../../images/Philadelphia.png';
import Liverpool from '../../images/LiverPool.png';
import { FiMapPin, FiMail } from 'react-icons/fi';

const OurPresenceSection = () => {
  const locations = [
    {
      id: 1,
      title: 'Philadelphia',
      icon: Philadelphia,
      address: ['900 JFK Blvd', '300 19103'],
      email: 'philadelphia@tech.com',
    },
    {
      id: 2,
      title: 'Miami Florida',
      icon: MiamiFlorida,
      address: ['84 Flagler Street 4800', '3200'],
      email: 'miami@tech.com',
    },
    {
      id: 3,
      title: 'Liverpool',
      icon: Liverpool,
      address: ['20 Chapel Street', 'L3 9AG'],
      email: 'liverpool@tech.com',
    },
  ];

  return (
    <section className="presence-section" aria-labelledby="our-presence-heading">
      <Container className="text-center">
        <header className="presence-header">
          <h2 className="presence-title">
            Our Vision
          </h2>
          <h3 id="our-presence-heading" className="presence-subtitle">
            Our company is all around the world, come and visit us
          </h3>
          <p className="presence-description">
            From vibrant city centers to coastal hubs, our offices span the globe to stay close to our clients and communities.
          </p>
        </header>

        <Row className="g-4 justify-content-center mb-5">
          {locations.map(({ id, title, icon, address, email }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 bg-transparent presence-card">
                <Card.Body className="p-4">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="presence-icon"
                  />
                  <h4 className="presence-card-title">{title}</h4>

                  <div className="d-flex align-items-start mb-2 presence-info">
                    <FiMapPin className="icon" size={18} />
                    <div className="text-start">
                      {address.map((line, index) => (
                        <p key={index} className="small text-muted mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex align-items-center presence-info">
                    <FiMail className="icon" size={18} />
                    <a href={`mailto:${email}`} className="small text-muted fw-bold text-decoration-none">
                      {email}
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="my-5">
          <img
            src={WorldMap}
            alt="Global office locations map"
            className="presence-map img-fluid rounded"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurPresenceSection;
