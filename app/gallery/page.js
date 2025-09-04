"use client";
import Image from "next/image";
import { useEffect } from "react";
import Project from "../components/project"
import Header from "../components/header"
import Photos from "../components/photos"


export default function GalleryPage() {


    return (
        <div className="flex justify-center left-0 right-0 overflow-x-hidden">

            <div className="flex flex-col">
                <div className=" max-sm:scale-80 max-sm:min-w-[410px] z-10 max-sm:-translate-x-0" >
                    <Header />
                </div>
                <div className="mt-10">
                    <Photos />
                </div>
            </div>

        </div>
    )
}