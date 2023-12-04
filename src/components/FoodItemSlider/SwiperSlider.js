import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './SwiperSlider.css';
import defaultImage from '../../assets/fooditems/2.jpg'
function SwiperSlider({ data }) {

  return (
    <div className='swiper-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true
        }}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="mySwipper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={defaultImage} alt={item.name} />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">{item.price}</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">{item.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;