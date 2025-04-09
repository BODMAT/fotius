import { SwiperCard } from "./SwiperCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import arrRightSvg from '../assets/arr-right-red.svg';
import arrLeftSvg from '../assets/arr-left-red.svg';
// @ts-ignore
import "swiper/css";

import { useRef } from "react";

export function Categories() {
    const swiperRef = useRef<any>(null);
    return (
        <section className="py-10">
            <div className="max-w-[1300px] m-[0_auto] box-content pr-[15px] pl-[15px] flex flex-col gap-2">
                <h4 className="font-family font-normal text-[14px] leading-[2.28571] uppercase text-center text-[#704fe6] dark:text-[#432f8b] transitioned px-5 bg-[#e9e2ff] dark:bg-[#cbbbfe] rounded max-w-[150px] mx-auto">Specialties</h4>
                <div className="flex gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center !mb-7">

                    <h3 className="third-family font-bold text-[35px] leading-[1.3] capitalize dark:text-[#0e2a46] text-[#2d4796] transitioned max-w-[90%] max-sm:text-center">Training of specialists at the faculty is carried out
                        in the following specialties (engineering areas):</h3>
                    <div className="flex gap-3 border-0">
                        <button
                            className={`w-[50px] cursor-pointer swiper-button-prev hover:scale-105 transitioned`}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className={`w-[50px] border-0 cursor-pointer swiper-button-next hover:scale-105 transitioned`}
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    className="w-full h-full">

                    <SwiperSlide className="flex justify-center items-center">
                        <SwiperCard imgSrc="./cards/1.svg" title="121 Software Engineering" text="This specialty focuses on software development, testing, and maintenance. Students learn all stages of creating a software product, from collecting requirements to support after implementation." specialSrc="./people/121.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <SwiperCard imgSrc="./cards/2.svg" title="122 Computer Science" text="The specialty covers the theoretical foundations of information processing and computing, as well as practical methods for their implementation in computer systems." specialSrc="./people/122.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <SwiperCard imgSrc="./cards/3.svg" title="123 Computer Engineering" text="This specialty combines electronics and computer science to design and develop computer systems and hardware. Students learn the integration of hardware and software components." specialSrc="./people/123.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <SwiperCard imgSrc="./cards/4.svg" title="124 System analysis" text="Systems analysis focuses on researching and designing information systems to improve the efficiency of organizations. Students learn to analyze complex problems and develop appropriate technological solutions." specialSrc="./people/124.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}