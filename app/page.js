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
      {/* <ReactFullpage
        scrollingSpeed={700}
        navigation={true}
        navigationPosition="right"
        showActiveTooltip={true}
        anchors={['home', 'info', 'register']}
        sectionsColor={['#2a2a2a', '#2a2a2a', '#2a2a2a']}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="home">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-center">
                  <Header />
                </div>
                <div className="w-full flex justify-center">
                  <About />
                </div>
              </div>
            </div>

            <div className="section" data-anchor="info">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-center">
                  <Info />
                </div>
                <div className="w-full flex justify-center">
                  <Comand />
                </div>
              </div>
            </div>

            <div className="section" data-anchor="register" id="reg">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-center">
                  <Register />
                </div>
                <div className="w-full flex justify-center">
                  <Footer />
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      /> */}

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