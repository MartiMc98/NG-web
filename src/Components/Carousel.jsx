"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    "/img/Logo-companias/logo-mercantil.png",
    "/img/Logo-companias/logo-triunfo.png",
    "/img/Logo-companias/logo-allianz.png",
    "/img/Logo-companias/logo-andina.png",
    "/img/Logo-companias/logo-experta.png",
    "/img/Logo-companias/logo-libra.png",
    "/img/Logo-companias/logo-mapfre.png",
    "/img/Logo-companias/logo-meridional.png",
    "/img/Logo-companias/logo-parana.png",
    "/img/Logo-companias/logo-progreso.png",
    "/img/Logo-companias/logo-sancristobal.png",
    "/img/Logo-companias/logo-rivadavia.png",
    "/img/Logo-companias/logo-cooperacion.png",
    "/img/Logo-companias/logo-ru.png",
];

export default function Carousel() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1} // Por defecto, 1 imagen en pantallas pequeñas
                breakpoints={{
                    640: { slidesPerView: 1 }, // sm
                    768: { slidesPerView: 2 }, // md
                    1024: { slidesPerView: 3 }, // lg
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="rounded-lg shadow-lg"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4 rounded-lg border border-black">
                            <div className="w-full h-full overflow-hidden rounded-lg">
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            {/* <h3 className="text-center text-lg font-semibold mt-2">
                  Card {index + 1}
                </h3> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}