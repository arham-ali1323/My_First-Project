import React from 'react';
import { Card } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
    <section className='bg-gray-50 py-16'>
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-0 leading-tight">
              Within the reach of any anime fan <br /> Easy to use and effective
            </h2>
            <p className="text-purple-100 mt-4 text-lg max-w-3xl mx-auto">
              Our AI will enhance the quality of your fan fiction or your post, it
              can create an interesting backstory or it can even advise you on how
              to continue with your text or conversation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What they say about us</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-purple-400 !opacity-50',
            bulletActiveClass: '!bg-purple-600 !opacity-100',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card className="overflow-hidden border-0 shadow-lg rounded-2xl h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/2 h-48 md:h-auto bg-gray-100">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 bg-white flex flex-col justify-center">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                    <h6 className="font-bold text-gray-900 text-lg">{card.name}</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
