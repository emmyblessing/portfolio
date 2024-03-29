import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

import 'swiper/css';
import { themeContext } from '../../Context';

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{color: darkMode? 'white' :''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt='Sidebar'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt='Ecommerce'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt='MusicApp'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt='HOC'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio;
