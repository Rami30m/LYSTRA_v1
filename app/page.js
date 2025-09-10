"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link"
import AboutText from "./about/about_text"
import Header from "./components/header"
import About from "./components/about"
import Fullpage from "./components/fullpages"
import Info from "./components/info"
import Comand from "./components/comand";
import Register from "./components/register"
import Footer from "./components/footer"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="bg-[#2a2a2a] overflow-x-hidden">
      <div className="" id="about">
        <div className=" max-sm:scale-80 max-sm:min-w-[410px] max-sm:-translate-x-3" >
          <Header />
        </div>
        <div  className="translate-x-0  max-md:scale-90">
          <About />
        </div>
      </div>
      
      <div className=" " id="main">
        <div className="translate-x-0">
          <Info />
        </div>

        <div className="flex flex-col justify-center left-0 right-0 translate-x-0" id="comand">
                  <Comand />
        </div>
      </div>
      

      <div className="translate-x-0  max-md:scale-95   scroll-smooth" id="reg">
        <Register />
      </div>

      <div className="translate-x-0" id="contacts">
        <Footer />
      </div>

    </div>
  )}