import { useSwiper } from 'swiper/react'
import Previous from '../assets/images/previous.png'
import Next from '../assets/images/next.png'

interface IPropsSliderButton{
  getActiveIndex:Function
}
const SliderButton = (props:IPropsSliderButton) => {
  const swiper = useSwiper()
  return (
    <div className="d-flex navigation">
      <div
        className="d-flex justify-content-center change-btn"
        onClick={()=>props.getActiveIndex(swiper, 'prev')}
      >
        <div className="align-self-center">
          <img src={Previous} alt="previous" />
        </div>
      </div>
      <div
        className="d-flex justify-content-center change-btn"
        onClick={()=>props.getActiveIndex(swiper, 'next')}
      >
        <div className="align-self-center">
          <img src={Next} alt="next" />
        </div>
      </div>
    </div>
  )
}

export default SliderButton
