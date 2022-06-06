import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Slider1 from '../assets/images/slider1.png'
import Slider2 from '../assets/images/slider2.png'
import Slider3 from '../assets/images/slider3.png'
import Slider4 from '../assets/images/slider4.png'
import Slider5 from '../assets/images/slider5.png'
import Slider6 from '../assets/images/slider6.png'

import SliderButton from './SliderButton'
const data = [
  {
    image: Slider1,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
  {
    image: Slider2,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
  {
    image: Slider3,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
  {
    image: Slider4,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
  {
    image: Slider5,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
  {
    image: Slider6,
    content:
      'Hosting my studio changed my life and gifted me with memorable experiences and people.',
    client: 'Client in Atlanta',
  },
]
const Slider = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div style={{ fontSize: '60px', width: '478px' }}>
          Don’t trust us, trust our clients
        </div>
      </div>
      <Swiper
        modules={[Virtual]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        virtual
      >
        <SliderButton />

        {data.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <img src={slideContent.image} alt={'slider' + 1} />
            <div className={index===1?'disable':''} style={{ fontSize: 30 }}>{slideContent.content}</div>
            <div className="mt-5">{slideContent.client}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
