import React from "react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import person2 from "../../images/person-2.png";


const Testimonial = () => {
  const renderCard = (key) => (
    <Card key={key} className="overflow-hidden border-0 shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20"></div>
          <img
            src={person2}
            alt="User"
            className="w-full h-full object-cover"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
            }}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 p-6 md:p-8 bg-white flex flex-col justify-center">
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make.
          </p>
          <h6 className="font-bold text-gray-900 text-lg">Redwan Khan</h6>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="bg-purple-900 py-16">
       <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-0 leading-tight">
                  Within the reach of any anime fan Easy to use and effective
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-purple-100 mb-0 text-lg leading-relaxed">
                  Our AI will enhance the quality of your fan fiction or your
                  post, it can create an interesting backstory or it can even
                  advise you on how to continue with your text or conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-3xl font-bold text-white text-center mb-12">What they say about us</h3>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
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
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper"
        >
          {[1, 2, 3, 4].map((id) => (
            <SwiperSlide key={id}>
              {renderCard(id)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
