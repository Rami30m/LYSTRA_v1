"use client";
import Image from "next/image"
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Card1 } from "./cards"
import Comand from "./comand"


export default function Info() {
    const [blink, SetBlink] = useState({ projects: false })
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Запускаем анимацию только когда элемент видим
                    const blink1 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), 100);
                    const blink2 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), 250);
                    const blink3 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), 300);
                    const blink4 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), 350);
                    const blink5 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), 400);
                    const blink6 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), 500);
                    const blink7 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), 600);

                    return () => {
                        clearTimeout(blink1);
                        clearTimeout(blink2);
                        clearTimeout(blink3);
                        clearTimeout(blink4);
                        clearTimeout(blink5);
                        clearTimeout(blink6);
                        clearTimeout(blink7);
                    };
                }
            },
            {
                threshold: 0.3, // Элемент считается видимым когда 30% его площади в поле зрения
                rootMargin: '0px 0px -100px 0px' // Начинает срабатывать за 100px до появления
            }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])


    return (
        <div ref={elementRef} className="flex justify-center left-0 right-0 mt-15">
            <div className="flex-col">
                <div className="pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block sm:block">
                    <img src="/lighting-2.png" alt="" className={`absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block transition-all duration-200 ease-in-out ${blink.projects ? 'sm:block opacity-100' : 'sm:block opacity-0'}`}/>
                </div>
            </div>

            <div className="relative max-md:scale-90 flex flex-col justify-center ">
                <div className="flex flex-row max-sm:flex-col gap-10 mt-15 mb-15">
                    <div className="sm:hidden scale-90 h-50 bg-cover  flex flex-row shadow-[inset_5px_0_0_0_white,inset_-5px_0_0_0_white] bg-[url('/glass7.png')] bg-no-repeat bg-center bg-contain">
                        <div className="pl-3 flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#D6242F] font-bold text-3xl text-center">3</h3>
                            <p className="text-[#f8f5f0] font-bold  text-center">Республиканских фестваля</p>
                        </div>

                        <div className="flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#FFEF78] font-bold text-3xl text-center">20+</h3>
                            <p className="text-[#f8f5f0] font-bold text-center">Ивентов за прошлый год</p>
                        </div>

                        <div className="pr-3 flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#A2E3EA] font-bold text-3xl text-center">20+</h3>
                            <p className="text-[#f8f5f0] font-bold text-center">Разнообразных проектов</p>
                        </div>
                    </div>

                    <div className="sm:hidden flex flex-row scale-90 gap-5 -mt-5">
                        <a href="/gallery">
                            <div className=" relative grid place-items-center shadow-lg bg-[url('/glass6.png')] bg-no-repeat bg-center bg-contain size-50">
                                <FontAwesomeIcon icon={faImages} className="text-[#f8f5f0] size-30 text-[110px] translate-y-3" />
                                <a className="text-xl text-[#f8f5f0] font-bold -translate-x-10 -translate-y-1">Галлерея</a>
                                <img src='/row1.svg' alt="" className="absolute size-12 translate-x-18 translate-y-18" aria-hidden="true"/>
                            </div>
                        </a>
                        
                        
                        <a href="/projects">
                            <div className=" relative grid place-items-center shadow-lg bg-[url('/glass6.png')] bg-no-repeat bg-center bg-contain size-50">
                                <FontAwesomeIcon icon={faBriefcase} className="text-[#f8f5f0] size-27.5 text-[110px] translate-y-3" />
                                <a className="text-xl text-[#f8f5f0] font-bold -translate-x-7 -translate-y-1">Портфолио</a>
                                <img src='/row1.svg' alt="" className="absolute size-12 translate-x-18 translate-y-18" aria-hidden="true"/>
                            </div> 
                        </a>
                        
                    </div>

                    <a href="/gallery">
                        <div className="max-sm:hidden relative grid place-items-center shadow-lg bg-[url('/glass6.png')] bg-no-repeat bg-center bg-contain size-50">
                            <FontAwesomeIcon icon={faImages} className="text-[#f8f5f0] size-30 text-[110px] translate-y-3" />
                            <a className="text-xl text-[#f8f5f0] font-bold -translate-x-10 -translate-y-1">Галлерея</a>
                            <img src='/row1.svg' alt="" className="absolute size-12 translate-x-18 translate-y-18" aria-hidden="true"/>
                        </div>
                    </a>
                    

                    <div className="max-sm:hidden h-50 bg-cover  flex flex-row shadow-[inset_5px_0_0_0_white,inset_-5px_0_0_0_white] bg-[url('/glass7.png')] bg-no-repeat bg-center bg-contain">
                        <div className="pl-3 flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#D6242F] font-bold text-3xl text-center">3</h3>
                            <p className="text-[#f8f5f0] font-bold  text-center">Республиканских фестваля</p>
                        </div>

                        <div className="flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#FFEF78] font-bold text-3xl text-center">20+</h3>
                            <p className="text-[#f8f5f0] font-bold text-center">Ивентов за прошлый год</p>
                        </div>

                        <div className="pr-3 flex flex-col justify-center item-center w-35">
                            <h3 className="text-[#A2E3EA] font-bold text-3xl text-center">20+</h3>
                            <p className="text-[#f8f5f0] font-bold text-center">Разнообразных проектов</p>
                        </div>
                    </div>

                    <a href="/projects">
                        <div className="max-sm:hidden relative grid place-items-center shadow-lg bg-[url('/glass6.png')] bg-no-repeat bg-center bg-contain size-50">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#f8f5f0] size-27.5 text-[110px] translate-y-3" />
                            <a className="text-xl text-[#f8f5f0] font-bold -translate-x-7 -translate-y-1">Портфолио</a>
                            <img src='/row1.svg' alt="" className="absolute size-12 translate-x-18 translate-y-18" aria-hidden="true"/>
                        </div>     
                    </a>
                    
                </div>

                
            </div>

            
            
        </div>
    )
}