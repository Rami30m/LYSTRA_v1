"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Card1, Card2, Card3, Card4, Card5 } from "./cards"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination";

export default function Comand() {
    return (
        <div>
            <div className="flex flex-row items-center sm:translate-x-10">
            <button className="swiper-button-prev after:hidden sm:translate-x-40  absolute top-1/2 z-10 ">
                    <FontAwesomeIcon icon={faCaretLeft} className="text-[#f8f5f0]" />
                    </button>
                <Swiper 
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                0: { slidesPerView: 1},
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            } className="w-full max-w-full sm:max-w-[960px] max-sm:w-50 items-center !overflow-hidden px-8 sm:px-10"
            >
                    

                    <SwiperSlide className="">
                        <div className="w-full h-full">
                            <Card1 />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                    <div className="w-full h-full">
                            <Card1 />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                    <div className="w-full h-full">
                            <Card1 />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                    <div className="w-full h-full">
                            <Card1 />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                    <div className="w-full h-full">
                            <Card1 />
                        </div>
                    </SwiperSlide>

                    
                </Swiper>
                <button className="swiper-button-next after:hidden absolute sm:-translate-x-70 top-1/2  z-10">
                    <FontAwesomeIcon icon={faCaretRight} className="text-[#f8f5f0]" />
                </button>
            </div>
            
        </div>
    )
}