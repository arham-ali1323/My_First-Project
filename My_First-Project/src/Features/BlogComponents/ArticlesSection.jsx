import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTags, FaUser } from 'react-icons/fa';


const LatestArticles = () => {
   const articles = [
    {
      title: "How to Grow a Business",
      description: "Learn strategies for scaling your startup efficiently.",
      category: "Business",
      author: "John Doe"
    },
    {
      title: "Top 10 Web Design Trends",
      description: "Discover what's hot in modern web design this year.",
      category: "Design",
      author: "Jane Smith"
    },
    {
      title: "Mastering React.js",
      description: "An essential guide for React developers.",
      category: "Development",
      author: "Arham Ali"
    },
    {
      title: "Mastering React.js",
      description: "An essential guide for React developers.",
      category: "Development",
      author: "Arham Ali"
    },
    {
      title: "Mastering React.js",
      description: "An essential guide for React developers.",
      category: "Development",
      author: "Arham Ali"
    },
    {
      title: "Mastering React.js",
      description: "An essential guide for React developers.",
      category: "Development",
      author: "Arham Ali"
    },
  ];

  return (
    <section className="latest-articles-section my-5">
      <Container>
        <h5 className="section-heading">Latest Articles</h5>
        <Row className="gx-3 gy-4">
          {Array.isArray(articles) && articles.map((article, idx) => (
            <Col md={4} key={idx}>
              <Card className="article-card">
                <div className="article-image-placeholder" />
                <Card.Body className="p-3">
                  <Card.Title className="article-title">
                    {article.title}
                  </Card.Title>
                  <Card.Text className="article-description">
                    {article.description}
                  </Card.Text>
                  <div className="article-meta">
                    <div className="meta-item">
                      <FaTags className="meta-icon" />
                      <span>{article.category}</span>
                    </div>
                    <div className="meta-item">
                      <FaUser className="meta-icon" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestArticles;
