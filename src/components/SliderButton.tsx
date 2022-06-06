import { useSwiper } from 'swiper/react'
import Previous from '../assets/images/previous.png'
import Next from '../assets/images/next.png'

const SliderButton = () => {
  const swiper = useSwiper()
  return (
    <div className="d-flex navigation">
      <div
        className="d-flex justify-content-center change-btn"
        onClick={() => swiper.slidePrev()}
      >
        <div className="align-self-center">
          <img src={Previous} alt="previous" />
        </div>
      </div>
      <div
        className="d-flex justify-content-center change-btn"
        onClick={() => swiper.slideNext()}
      >
        <div className="align-self-center">
          <img src={Next} alt="next" />
        </div>
      </div>
    </div>
  )
}

export default SliderButton
