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
    

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
          perView: width <= 500 ? 3 : 5,
          spacing: 15,
        },
      });

    useEffect(() => {
        const interval = setInterval(() => {
          instanceRef.current?.next();
        }, 2000); // cada 2 segundos pasa al siguiente
    
        return () => clearInterval(interval); // limpiamos al desmontar
      }, [instanceRef]);
 
    return (
       <>
        <div ref={sliderRef} className="keen-slider ">         
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-allianz.png" alt="logo-mercantil"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-andina.png" alt="logo-triunfo"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-cooperacion.png" alt="logo-allianz"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-experta.png" alt="logo-andina"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-libra.png" alt="logo-meridional"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-mapfre.png" alt="logo-mapfre"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-mercantil.png" alt="logo-mercantil"/>
          <img  className="keen-slider__slide number-slide1" src="/img/Logo-companias/logo-manana.png" alt="logo-manana"/>
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



