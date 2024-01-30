// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';


// import required modules
import {  EffectCoverflow, Keyboard, Navigation } from "swiper/modules";

const SliderNuestroDirectorio = () => {
  return (
    <div className="p-9">
      <h2 className="-mb-5 max-w-[24ch]  text-5xl/[1.1] font-semibold md:text-5xl/[1.1] text-focus-in">Planes Xhost Radio</h2> 
      <>      
      
      <Swiper
      effect={'coverflow'}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[EffectCoverflow,Keyboard, Navigation]}
        className="SliderNuestroDirectorio"
      > 
   
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>

        <SwiperSlide><img src="https://wallpapercosmos.com/w/full/3/7/f/1110343-2365x1571-desktop-hd-surfing-wallpaper-image.jpg"/></SwiperSlide>
       
     </Swiper>  
     </>
    
    </div>
  )
}

export default SliderNuestroDirectorio