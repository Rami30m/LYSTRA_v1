"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Project from "../components/project"
import Header from "../components/header"


// gsap.registerPlugin(ScrollTrigger);
 
// import React from "react";
// const grid = {
//     hidden: {},
//     show: {
//       transition: {
//         // задержка между СТРОКАМИ
//         staggerChildren: 0.3,
//       },
//     },
//   }

// const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1, // задержка между элементами
//       },
//     },
//   }
  
//   const item = {
//     hidden: { opacity: 0, x: -50 }, // старт слева
//     show: { opacity: 1, x: 0 },     // финальное положение
//   }

export default function ProjectsPage() {
//         const [blink, SetBlink] = useState({ projects: false })
//         const [load, SetLoad] = useState({row: false})
    
//         useEffect(() => {
//             const delayOffset = 600;
//             const blink1 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 100);
//             const blink2 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 250);
//             const blink3 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 300);
//             const blink4 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 350);
//             const blink5 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 400);
//             const blink6 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 500);
//             const blink7 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 600);
    
    
    
    
//             return () => {
//                 clearTimeout(blink1);
//                 clearTimeout(blink2);
//                 clearTimeout(blink3);
//                 clearTimeout(blink4);
//                 clearTimeout(blink5);
//                 clearTimeout(blink6);
//                 clearTimeout(blink7);
    
//             };
//         }, [])

    return (
        <div className="flex justify-center left-0 right-0 overflow-x-hidden">
            
            <div className="flex flex-col">
                <div className=" max-sm:scale-80 max-sm:min-w-[410px] z-10 max-sm:-translate-x-0" >
                    <Header />
                </div>
                <div className="mt-10">
                    <Project />
                </div>
                
            </div>
            
            {/* <div className="flex flex-col items-center">
                <h1 className="text-[#f8f5f0] text-2xl z-10  text-center">Портфолио организации</h1>
                <div className="">
                    <div className="mt-25 pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full max-sm:block sm:block">
                        <img src="/lighting-2.png" alt="" className={`absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block transition-all duration-200 ease-in-out ${blink.projects ? 'sm:block opacity-100' : 'sm:block opacity-0'}`}/>
                    </div>
                </div>

                <motion.div
                variants={grid}
                initial="hidden"
                animate="show"
                >
                    <div className="flex flex-col items-center">
                        <motion.div 
                        variants={container}
                        >
                        <div className="flex flex-row max-sm:flex-col gap-10 p-10 mt-15 ">

                        <motion.div variants={item}>
                            <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                            <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                <img src="gj3.png"  className="h-35 rounded-2xl"/>
                                <div className="flex flex-col">
                                    <div className="flex flex-col -translate-y-5 text-center">
                                        <a className="text-xl text-[#f8f5f0] font-bold">Nomad GameJam 2024</a>
                                        <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                    </div>
                                    <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
        Третий крупнейший республиканский Game Jam в Satbayev University
                                    </p>
                                </div>
                            </div>
                            </Tilt>
                        </motion.div>
                        
                        
                        <motion.div variants={item}>
                            <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05}>
                            <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                <img src="valentia-logo.png"  className="h-35 rounded-lg"/>
                                <div className="flex flex-col">
                                    <div className="flex flex-col -translate-y-5 text-center">
                                        <a className="text-xl text-[#f8f5f0] font-bold">Valentia Dating</a>
                                        <p className="text-[#d6242f] font-bold">Проект</p>
                                    </div>
                                    <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">Уникальный дейтинг сервис на основе системы Telegram-ботов с тысячной аудиторией, создаваемый экслюзивно на 2 неделю в канун 14 февраля</p>
                                </div>
                            </div>
                            </Tilt>
                        </motion.div>
                        
                        <motion.div variants={item}>
                            <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05}>
                            <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                <img src="har-hub-logo.png"  className="h-35 rounded-lg"/>
                                <div className="flex flex-col">
                                    <div className="flex flex-col -translate-y-5 text-center">
                                        <a className="text-xl text-[#f8f5f0] font-bold">HARD.HUB Service</a>
                                        <p className="text-[#d6242f] font-bold">Проект</p>
                                    </div>
                                    <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                    Коммерческий студенческий сервис технической поддержки и обслуживания компьютеров и ноутбуков студентов
                                    </p>
                                </div>
                            </div>
                            </Tilt>
                        </motion.div>
                        
                        <motion.div variants={item}>
                            <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05}>
                            <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                <img src="pub-logo.png"  className="h-35 rounded-lg"/>
                                <div className="flex flex-col">
                                    <div className="flex flex-col -translate-y-5 text-center">
                                        <a className="text-xl text-[#f8f5f0] font-bold">P.UB Project</a>
                                        <p className="text-[#d6242f] font-bold">Проект</p>
                                    </div>
                                    <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                    Эксперементальное сетевое социальное пространство на основе свободной децентрализованной сети                            </p>
                                </div>
                            </div>
                            </Tilt>
                        </motion.div>
                        
                        </div>
                        </motion.div>
                        
                        <motion.div 
                        variants={container}>
                            <div className="flex flex-row max-sm:flex-col gap-10 p-10">
                                <motion.div variants={item}>
                                    <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                        <img src="room-logo.png"  className="h-35 rounded-2xl"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">ROOM 68</a>
                                                <p className="text-[#ea608c] font-bold">Медиа</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-65 text-center -translate-y-5">
                                            Видео подкаст с представителями из индустрии IT и искусства
                                                                            </p>
                                        </div>
                                    </div>
                                    </Tilt>
                                </motion.div>
                                
                                <motion.div variants={item}>
                                    <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                        <img src="Logo.png"  className="h-35 rounded-lg"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">LYSTRA Events</a>
                                                <p className="text-[#d6242f] font-bold">Проект</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                            Сервис для регистрации на мероприятия организации и просмотр всех мероприятий.
                                            </p>
                                        </div>
                                    </div>
                                    </Tilt>
                                </motion.div>
                                
                                <motion.div variants={item}>
                                    <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05}>
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                        <img src="vguke.jpg"  className="size-35 rounded-lg"/>
                                        <div className="flex flex-col -translate-y-5 text-center">
                                            <a className="text-xl text-[#f8f5f0] font-bold">VGUKE</a>
                                            <p className="text-[#d6242f] font-bold">Проект</p>
                                        </div>
                                        <p className=" text-[#f8f5f0] w-50 text-center -translate-y-10">Онлайн сервис для анонимных постов</p>
                                    </div>
                                    </Tilt>
                                </motion.div>
                                
                                <motion.div variants={item}>
                                    <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-90">
                                        <img src="gj1.png"  className="h-35 rounded-2xl"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">Retro GameJam 2021</a>
                                                <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                            Первый крупнейший республиканский Game Jam в Satbayev University
                                            </p>
                                        </div>
                                    </div>
                                    </Tilt>
                                </motion.div>
                                
                            </div>
                        </motion.div>

                        <motion.div 
                    variants={container}>
                        <div className="flex flex-row max-sm:flex-col gap-10 p-10">
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-full">
                                <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-80 h-90">
                                    <img src="jam-logo.png"  className="h-35 rounded-lg"/>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col -translate-y-5 text-center">
                                            <a className="text-xl text-[#f8f5f0] font-bold">Mythical GameJam 2022</a>
                                            <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                        </div>
                                        <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
            Второй крупнейший республиканский Game Jam в Satbayev University
                                        </p>
                                    </div>
                                </div>
                                </Tilt>
                            </motion.div>   
                            
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                                <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-80 h-90">
                                    <img src="films-logo.png"  className="h-35 rounded-2xl"/>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col -translate-y-5 text-center">
                                            <a className="text-xl text-[#f8f5f0] font-bold">3H Party Cinema Contest</a>
                                            <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                        </div>
                                        <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                        Хэллоуинский фестиваль инди-кинофильмов снятых участниками клуба
                                        </p>
                                    </div>
                                </div>
                                </Tilt>
                            </motion.div>
                            
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-90">
                                <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-80 h-90">
                                    <img src="visa-fifa.png"  className="h-35 rounded-2xl"/>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col -translate-y-5 text-center">
                                            <a className="text-xl text-[#f8f5f0] font-bold">Visa Fifa 2022 Forum</a>
                                            <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                        </div>
                                        <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                        Крупный коммерческий проект разработки ПО для рекламной акции в честь ЧМ по футболу 2022 в ТРЦ                            </p>
                                    </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                            
                        </div>
                        </motion.div>
                        
                        <motion.div 
                        variants={container}>
                            <div className="flex flex-row max-sm:flex-col gap-10 p-10">
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-full">
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-110">
                                        <img src="mp.png"  className="h-35 rounded-2xl"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">Мусоропровод</a>
                                                <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-65 text-center -translate-y-5">

                                            Проект посвященный прошлому и развитию современного искусства. Цель проекта популяризации и поддержка современных молодых художников, дизайнеров, музыкантов, защита их творчества и помощь в коммерциализации.
                                                                            </p>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                                
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05}>
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-110">
                                        <img src="altair-logo.png"  className="h-35 rounded-lg"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">P.UB Project</a>
                                                <p className="text-[#d6242f] font-bold">Проект</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-60 text-center -translate-y-5">
                                            Телеграм бот - интерфейс для работы с площадкой HUB (ныне Lystra). Это ваш личный кабинет, в котором удобно расположены все ваши Хабы, расписания, задачи, новости и многое другое                            
                                            </p>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                                
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-full">
                                    <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain w-70 h-110">
                                        <img src="th.png"  className="h-35 rounded-2xl"/>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col -translate-y-5 text-center">
                                                <a className="text-xl text-[#f8f5f0] font-bold">TH Studio</a>
                                                <p className="text-[#d6242f] font-bold">Проект</p>
                                            </div>
                                            <p className=" text-[#f8f5f0] w-65 text-center -translate-y-5">
                                            Коммерческая студия фриланс разработки и дизайна на заказ. Среди участников проекта числятся как и профессиональные разработчики и дизайнеры так ученики, обучающиеся у специалистов.  
                                            </p>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                                
                            </div>
                        </motion.div>
                        
                        <motion.div 
                        variants={container}>
                            <div className="flex flex-row max-sm:flex-col gap-10 p-10">
                            <motion.div variants={item}>
                                <Tilt glareEnable={true} glarePosition="all" glareMaxOpacity={0.5} scale={1.05} className="h-full w-full">
                                <div className=" relative grid place-items-center shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.25)] border border-stone-400 bg-no-repeat bg-center bg-contain max-sm:w-90 w-100 h-70">
                                    <img src="junior-hack-logo.png"  className="h-20 max-sm:h-15 rounded-2xl"/>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col -translate-y-5 text-center">
                                            <a className="text-xl text-[#f8f5f0] font-bold">Junior's Hackathon</a>
                                            <p className="text-[#ffef78] font-bold">Мероприятие</p>
                                        </div>
                                        <p className=" text-[#f8f5f0] w-65 text-center -translate-y-5">
                                        Упрощённый формат хакатона для начинающих разработчиков без опыта участия                            </p>
                                    </div>
                                </div>
                            </Tilt>
                            </motion.div>
                        </div>
                        </motion.div>
                    </div>
                    
                </motion.div>
                
                
                
                

            </div>
            
             */}
        </div>
    )
}