"use client";
import { useState, useEffect } from 'react';

export default function Header() {
    const [anim, setAnim] = useState({
        projects: false,
        team: false,
        logo: false,
        about: false,
        contacts: false
    })

    useEffect(() => {
        const time1 = setTimeout(() => setAnim(prv => ({...prv, projects: true })), 300);
        const time2 = setTimeout(() => setAnim(prv => ({...prv, team: true })), 600);
        const time3 = setTimeout(() => setAnim(prv => ({...prv, logo: true})), 900);   
        const time4 = setTimeout(() => setAnim(prv => ({...prv, about: true})), 1200);                
        const time5 = setTimeout(() => setAnim(prv => ({...prv, contacts: true})), 1500);                             
    })

    return (
        <header className="text-white">
            {/* <nav className="flex items-center justify-center gap-20 h-25">
                <a href="/about" className="text-2xl font-semibold -rotate-10 transform translate-y-9">О нас</a>
                <a href="/register" className="text-2xl font-semibold -rotate-5 transform translate-y-1/2">Контакты</a>
                <img src="/Logo.png" className="h-30 size-30" alt="Логотип" />
                <a href="/projects" className="text-2xl font-semibold rotate-5 transform translate-y-1/2">Портфолио</a>
                <a href="/gallery" className="text-2xl font-semibold rotate-10 transform translate-y-9.5">Галерея</a>
            </nav> */}
            <nav className="flex items-center justify-center h-40 translate-x-6">
                <div className="flex">
                    <div className="bg-[url('/glass1.png')] bg-no-repeat bg-center bg-contain translate-y-5 translate-x-7  p-1 flex" style={{backdropFilter: 'blur(20px)'}}>
                        <a href="" className={`hover:text-[#FEF198] duration-300 -translate-y-0.5 ${anim.projects ? 'break-words hover:text-shadow-[0_4px_20px_rgba(255,239,120,0.4)]' : ''} text-2xl font-bold`}>Проекты</a>
                        <div className={`absolute  w-3 h-50 -z-1 -translate-y-51 translate-x-11
                        ${anim.projects ? 'shadow-[0_4px_20px_rgba(255,239,120,0.4)] bg-[#ffef78]' : 'bg-[#A79D52]'}`}></div>
                    </div>
                </div>
                <div className="bg-[url('/glass2.png')] bg-no-repeat bg-center bg-contain p-1 flex translate-y-23">
                    <a href="" className={`hover:text-[#FEF198] duration-300 -translate-y-0.5 break-words text-2xl font-bold
                        ${anim.team ? 'hover:text-shadow-[0_4px_20px_rgba(255,239,120,0.4)] ' : ''}`}>Команда</a>
                    <div className={`absolute w-3 h-50 -z-1 -translate-y-51 translate-x-11
                     ${anim.team ? 'shadow-[0_4px_20px_rgba(214,36,47,0.40)] bg-[#d6242f]' : 'bg-[#981921]'}`}></div>
                </div>

                <div>
                    <div className="size-30 shrink-0 -translate-x-10 -translate-y-0
                    bg-white/3 shadow-[inset_0_0_70px_rgba(255,255,255,0.05)] backdrop-blur-[35px] rounded-full
                    scale-75 flex-col justify-center " style={{backdropFilter: 'blur(35px)'}}>
                        <div className={`scale-130 absolute w-3 h-50 -z-1 -translate-y-57 left-1/2 -translate-x-1/2
                         ${anim.logo ? 'shadow-[0_4px_20px_rgba(255,247,214,0.40)] bg-[#fff7d6]' : 'bg-[#99947D]'}`}></div>
                        <img src="/Logo.png" className=" w-full h-full object-contain scale-110" alt="Логотип" />
                        <a className={`break-words 
                        absolute left-1/2 -translate-x-1/2 text-2xl font-bold scale-130 -translate-y-5
                        ${anim.logo ? '' : ''}`}>LYSTRA</a>                       
                    </div>
                </div>
                
                <div className="bg-[url('/glass3.png')] bg-no-repeat bg-center bg-contain p-1 flex -translate-x-10">
                    <a href="" className={`whitespace-nowrap hover:text-[#FEF198] duration-300 -translate-y-0.5 break-words 
                    text-2xl font-bold ${anim.about ? 'hover:text-shadow-[0_4px_20px_rgba(255,239,120,0.4)]' : ''}`}>О нас</a>
                    <div className={`absolute  w-3 h-50 -z-1 -translate-y-51 left-1/2 -translate-x-1/2
                     ${anim.about ? 'shadow-[0_4px_20px_rgba(255,247,214,0.40)] bg-[#a2e3ea]' : 'bg-[#70A1A6]'}`}></div>
                </div>
                <div className="bg-[url('/glass4.png')] bg-no-repeat bg-center bg-contain p-1 flex translate-y-14 -translate-x-18">
                    <a href="" className={`hover:text-[#FEF198] duration-300 -translate-y-0.5 break-words  text-2xl font-bold ${anim.contacts ? 'hover:text-shadow-[0_4px_20px_rgba(255,239,120,0.4)] ' : ''}`}>Контакты</a>
                    <div className={`absolute  w-3 h-50 -z-1 -translate-y-51 left-1/2 -translate-x-1/2
                     ${anim.contacts ? 'shadow-[0_4px_20px_rgba(214,36,47,0.40)] bg-[#d6242f]' : 'bg-[#981921]'}`}></div>
                </div>

            </nav>
        </header>
    )
}