import React from 'react';
import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from 'react-bootstrap';
import person1 from '../../images/person-1.png';
import person2 from '../../images/person-2.png';

const cardData = [
  {
    img: person2,
    name: 'Redwan Khan',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
  },
  {
    img: person1,
    name: 'Jane Doe',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
  },
  {
    img: person2,
    name: 'Redwan Khan',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
  },
  {
    img: person1,
    name: 'John Smith',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
  },
  {
    img: person2,
    name: 'John Smith',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
  },
];

const Testimonial = () => {
  return (
    <>
    <section className='testimonial'>
      <div className="anime-banner-wrapper">
        <div className="anime-banner-content">
          <div className="anime-banner-heading">
            <h2 className="h4 mb-0">
              Within the reach of any anime fan <br /> Easy to use and effective
            </h2>
          </div>
          <div className="anime-banner-text">
            <p className="mb-0">
              Our AI will enhance the quality of your fan fiction or your post, it
              can create an interesting backstory or it can even advise you on how
              to continue with your text or conversation.
            </p>
          </div>
        </div>
      </div>


  
      <div className="testimonial-wrapper">
  <h2>What they say about us</h2>

  <OwlCarousel
    className="owl-theme"
    loop={true}
    margin={20}
    autoplay={true}
    autoplayTimeout={3000}
    dotsContainer="#custom-dots"
    nav={false}
    items={3}
    responsive={{
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    }}
  >
    {cardData.map((card, index) => (
      <div key={index} className="px-2">
        <Card className="testimonial-card">
          <div className="d-flex align-items-stretch">
            <div className="bg-light" style={{ flex: '0 0 50%' }}>
              <img
                src={card.img}
                alt={card.name}
                className="testimonial-img"
              />
            </div>
            <div className="testimonial-text flex-grow-1">
              <Card.Text className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
                {card.desc}
              </Card.Text>
              <h6 className="name">{card.name}</h6>
            </div>
          </div>
        </Card>
      </div>
    ))}
  </OwlCarousel>

  {/* Custom dots */}
  <div id="custom-dots" className="custom-dots text-center mt-3">
    <button className="owl-dot active"></button>
    <button className="owl-dot"></button>
    <button className="owl-dot"></button>
    <button className="owl-dot"></button>
  </div>
</div>
    </section>

    </>

  
  );
};

export default Testimonial;
