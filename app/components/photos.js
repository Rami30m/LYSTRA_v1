"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
// const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });
// import "yet-another-react-lightbox/styles.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
    RenderImageContext,
    RenderImageProps,
    RowsPhotoAlbum,
  } from "react-photo-album";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "react-photo-view/dist/react-photo-view.css";
import "photoswipe/style.css";
import Masonry from "react-masonry-css";


gsap.registerPlugin(ScrollTrigger);

import React from "react";
const grid = {
    hidden: {},
    show: {
      transition: {
        // задержка между СТРОКАМИ
        staggerChildren: 0.3,
      },
    },
  }

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, // задержка между элементами
      },
    },
  }
  
  const item = {
    hidden: { opacity: 0, x: -50 }, // старт слева
    show: { opacity: 1, x: 0 },     // финальное положение
  }

export default function ProjectsPage() {
        const images = Array.from({ length: 55 }, (_, i) => `/photos/${i + 1}.jpg`);

        const photos = [
            { src: "/photos/1.jpg", width: 1280, height: 960 },
            { src: "/photos/2.jpg", width: 1280, height: 960 },
            { src: "/photos/4.jpg", width: 853, height: 1280 },
            { src: "/photos/5.jpg", width: 1170, height: 877 },
            { src: "/photos/6.jpg", width: 960, height: 1280 },
            { src: "/photos/7.jpg", width: 960, height: 1280 },
            { src: "/photos/8.jpg", width: 960, height: 1280 },
            { src: "/photos/9.jpg", width: 853, height: 1280 },
            { src: "/photos/10.jpg", width: 960, height: 1280 },
            { src: "/photos/11.jpg", width: 960, height: 1280 },
            { src: "/photos/12.jpg", width: 960, height: 1280 },
            { src: "/photos/13.jpg", width: 960, height: 1280 },
            { src: "/photos/14.jpg", width: 1280, height: 960 },
            { src: "/photos/15.jpg", width: 1280, height: 960 },
            { src: "/photos/16.jpg", width: 1280, height: 960 },
            { src: "/photos/17.jpg", width: 1280, height: 1280 },
            { src: "/photos/18.jpg", width: 1280, height: 576 },
            { src: "/photos/19.jpg", width: 576, height: 1280 },
            { src: "/photos/20.jpg", width: 576, height: 1280 },
            { src: "/photos/21.jpg", width: 576, height: 1280 },
            { src: "/photos/22.jpg", width: 960, height: 1280 },
            { src: "/photos/23.jpg", width: 960, height: 1280 },
            { src: "/photos/24.jpg", width: 960, height: 1280 },
            { src: "/photos/25.jpg", width: 1280, height: 960 },
            { src: "/photos/26.jpg", width: 720, height: 1280 },
            { src: "/photos/27.jpg", width: 1280, height: 853 },
            { src: "/photos/28.jpg", width: 1280, height: 853 },
            { src: "/photos/29.jpg", width: 1280, height: 853 },
            { src: "/photos/30.jpg", width: 1280, height: 853 },
            { src: "/photos/32.jpg", width: 1280, height: 853 },
            { src: "/photos/33.jpg", width: 1280, height: 853 },
            { src: "/photos/34.jpg", width: 1280, height: 719 },
            { src: "/photos/35.jpg", width: 1280, height: 719 },
            { src: "/photos/36.jpg", width: 1280, height: 719 },
            { src: "/photos/37.jpg", width: 1280, height: 719 },
            { src: "/photos/38.jpg", width: 1280, height: 853 },
            { src: "/photos/39.jpg", width: 1280, height: 853 },
            { src: "/photos/40.jpg", width: 1280, height: 853 },
            { src: "/photos/41.jpg", width: 1280, height: 853 },
            { src: "/photos/42.jpg", width: 1280, height: 853 },
            { src: "/photos/43.jpg", width: 1280, height: 853 },
            { src: "/photos/44.jpg", width: 1280, height: 853 },
        ]
        {console.log("PHOTOS:", photos.length)}

        const [blink, SetBlink] = useState({ projects: false })
        const [open, setOpen] = useState(false);
        const [index, setIndex] = useState(0);
        


        useEffect(() => {
            const delayOffset = 600;
            const blink1 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 100);
            const blink2 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 250);
            const blink3 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 300);
            const blink4 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 350);
            const blink5 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 400);
            const blink6 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: false })), delayOffset + 500);
            const blink7 = setTimeout(() => SetBlink(prev => ({ ...prev, projects: true })), delayOffset + 600);
    
    
    
    
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
        <div className="flex justify-center left-0 right-0 mt-10 max-sm:overflow-x-hidden">
            
            <div className="flex flex-col items-center">
                <h1 className="text-[#f8f5f0] text-2xl z-10  text-center">Галлерея</h1>
                <div className="">
                    <div className="mt-75 pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full max-sm:block sm:block">
                        <img src="/lighting-2.png" alt="" className={`absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen max-sm:block transition-all duration-200 ease-in-out ${blink.projects ? 'sm:block opacity-100' : 'sm:block opacity-0'}`}/>
                    </div>
                </div>
                
                <PhotoProvider>
                <div className="flex  flex-col items-center mt-20 place-items-center gap-10 p-15 max-sm:p-20 max-md:-mt-15 max-md:scale-95">
                        <Masonry
                breakpointCols={{ default: 5, 1100: 3, 700: 2 }}
                className="flex w-full "
                columnClassName="p-2 "
                
                
                >
                {images.map((src, i) => (
                    <Tilt
                    glareEnable={true}
                    glarePosition="all"
                    glareMaxOpacity={0.5}
                    scale={1.05}
                    className=""
                  >
                    <PhotoView src={src}>
                        <img src={src} className="w-auto object-contain  mb-6 cursor-pointer" />
                    </PhotoView>
                  </Tilt>
                    
                ))}
                </Masonry>
                </div>
                
                </PhotoProvider>
                
                
           
            </div>
            
            
        </div>
    )
}