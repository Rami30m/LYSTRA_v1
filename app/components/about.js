"use client";
import Image from "next/image"
import { useState, useEffect } from 'react';


export default function About() {

    return (
        <div className="flex justify-center left-0 right-0 mt-15">
            <div className="flex-col">
                <div className="pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block sm:block">
                    <img src="/lighting-contact.png" alt="" className="absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block sm:block" />
                </div>
                <h1 className="text-[#f8f5f0] text-2xl font-bold text-center mt-10">О нас</h1>
                <div className="shadow-lg ">
                        <div className="relative  bg-[url('/glass5.png')] max-sm:bg-[url('/glass10.png')] bg-no-repeat bg-center bg-contain max-sm:text-xl w-200 max-sm:w-122 max-sm:scale-75 mt-5 max-sm:-mt-10 shadow-[inset_0_5px_0_0_white]">
                            {/* <svg className="absolute w-6 h-6 fill-white" viewBox="0 0 24 24">
                                <path d="/row1.svg"/>
                            </svg> */}
                            <img src='/row1.svg' alt="" className="absolute size-12 right-0 translate-y-3 -translate-x-3" aria-hidden="true"/>
                            <p className="p-9 pl-15 font-bold text-[#f8f5f0] ">
                            LYSTRA - независимое сообщество основанное весной 2020 года студентам IT специальности которые хотели получить намного больше чем доступно на обычных занятиях в университете. Участник сообщества the HUB это человек испытывающий постоянный, неутолимый голод до знаний и новых открытий. Которому мало от жизни доступного не поверхности, каждый из нас всегда стремится к большему. Мы изучаем новые для себя области, получая знания, мы делимся ими с другими, мы созидаем и разрушаем старые устои.
                            </p>
                        </div>
                </div>
                <a href="#reg">
                <button className="block mx-auto bg-[#f8f5f0] cursor-pointer p-1 w-50 text-2xl font-bold text-center max-sm:-mt-5 mt-5">Вступить</button>
                </a>
                </div>            
        </div>
    )
}   