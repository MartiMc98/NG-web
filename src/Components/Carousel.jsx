import React, { useEffect, useState } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Carousel() {

    const [width, setWidth] = useState(600);
  

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const [sliderRef] = useKeenSlider({ 
        slides: { 
           perView: width <= 500 ? 3 : 5,
           spacing: 25
      }
})
 
    return (
       <>
        <div ref={sliderRef} className="keen-slider">
                    
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-allianz.png" alt="logo-mercantil"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-andina.png" alt="logo-triunfo"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-cooperacion.png" alt="logo-allianz"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-experta.png" alt="logo-andina"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-libra.png" alt="logo-meridional"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-mapfre.png" alt="logo-mapfre"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-mercantil.png" alt="logo-mercantil"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-meridional.png" alt="logo-meridional"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-parana.png" alt="logo-parana"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-rivadavia.png" alt="logo-rivadavia"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-ru.png" alt="logo-ru"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-sancristobal.png" alt="logo-sancristobal"/>
                    <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-triunfo.png" alt="logo-triunfo"/>

                    
                </div>

       </>
  

       
       
       
    ); 
    
}



// const [sliderRef] = useKeenSlider({
//     slides: {
//         perView: 5,
//         spacing:25,
         
//     }
// });



// <div className="w-full max-w-xl mx-auto">
// <Swiper
//     modules={[Navigation, Pagination, Autoplay]}
//     spaceBetween={15}
//     slidesPerView={1} // Por defecto, 1 imagen en pantallas pequeñas
//     breakpoints={{
//         640: { slidesPerView: 1 }, // sm
//         768: { slidesPerView: 2 }, // md
//         1024: { slidesPerView: 3 }, // lg
//     }}
//     navigation
//     pagination={{ clickable: true }}
//     autoplay={{ delay: 3000 }}
//     loop
//     className="rounded-lg"
//     slot="container-start"
// >
//     {images.map((src, index) => (
//         <SwiperSlide key={index}>
//             <div className="p-4 rounded-lg border border-black">
//                 <div className="w-full h-full overflow-hidden rounded-lg">
//                     <img
//                         src={src}
//                         alt={`Slide ${index + 1}`}
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                 </div>
               
//             </div>
//         </SwiperSlide>
//     ))}
// </Swiper>
// </div>

// const images = [
//     "/img/Logo-companias/logo-mercantil.png",
//     "/img/Logo-companias/logo-triunfo.png",
//     "/img/Logo-companias/logo-allianz.png",
//     "/img/Logo-companias/logo-andina.png",
//     "/img/Logo-companias/logo-experta.png",
//     "/img/Logo-companias/logo-libra.png",
//     "/img/Logo-companias/logo-mapfre.png",
//     "/img/Logo-companias/logo-meridional.png",
//     "/img/Logo-companias/logo-parana.png",
   
//     "/img/Logo-companias/logo-sancristobal.png",
//     "/img/Logo-companias/logo-rivadavia.png",
//     "/img/Logo-companias/logo-cooperacion.png",
//     "/img/Logo-companias/logo-ru.png",
// ];
