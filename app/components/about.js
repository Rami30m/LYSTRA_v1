"use client";
import Image from "next/image"
import { useState, useEffect } from 'react';


export default function About() {
    const [blink, SetBlink] = useState({ projects: false })

    useEffect(() => {
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
    }, [])

    return (
        <div className="flex justify-center left-0 right-0 mt-15">
            <div className="flex flex-col items-center">
                <div className=" pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block sm:block">
                    <img src="/lighting-contact.png" alt="" className={`max-sm:translate-y-2 absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block transition-all duration-200 ease-in-out ${blink.projects ? 'sm:block opacity-100' : 'sm:block opacity-0'}`} />
                </div>
                <h1 className="text-[#f8f5f0] text-2xl font-bold text-center mt-10">О нас</h1>
                <div className="shadow-lg ">
                        <div className="relative  bg-[url('/glass5.png')] max-sm:bg-[url('/glass10.png')] bg-no-repeat bg-center bg-contain max-sm:text-xl w-200 max-sm:w-122 max-sm:scale-75 mt-5 max-sm:-mt-10 shadow-[inset_0_5px_0_0_white]">
                            {/* <svg className="absolute w-6 h-6 fill-white" viewBox="0 0 24 24">
                                <path d="/row1.svg"/>
                            </svg> */}
                            <img src='/row1.svg' alt="" className="absolute size-12 right-0 translate-y-3 -translate-x-3" aria-hidden="true"/>
                            <p className="p-9 pl-15 font-bold text-[#f8f5f0] ">
                            LYSTRA - независимое сообщество основанное весной 2020 года студентам IT специальности которые хотели получить намного больше чем доступно на обычных занятиях в университете. Участник сообщества LYSTRA это человек испытывающий постоянный, неутолимый голод до знаний и новых открытий. Которому мало от жизни доступного не поверхности, каждый из нас всегда стремится к большему. Мы изучаем новые для себя области, получая знания, мы делимся ими с другими, мы созидаем и разрушаем старые устои.
                            </p>
                        </div>
                </div>
                <a href="#reg" className="inline-block w-50">
                <button className="relative group overflow-hidden mx-auto bg-[#f8f5f0] cursor-pointer p-1 w-50 text-2xl font-bold text-center max-sm:-mt-5 mt-5">
                    <span className="relative z-10">Вступить</span>
                    <span className="absolute inset-0 bg-[#ffef78] translate-y-[200%] z-0 transition-transform duration-600 ease-in-out group-hover:translate-y-0"></span>
                </button>
                </a>
                </div>            
        </div>
    )
}   