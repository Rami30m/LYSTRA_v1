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

export default function Home() {
  return (
    <div className="bg-[#2a2a2a] overflow-x-hidden">
      {/* <header className="">
        <nav className="flex items-center justify-center gap-20 h-25">
          <Link href="/about" className="text-2xl font-semibold -rotate-10 transform translate-y-9">О нас</Link>
          <Link href="/register" className="text-2xl font-semibold -rotate-5 transform translate-y-1/2">Контакты</Link>
          <img src="/Logo.png" className="h-30 size-30" alt="Логотип" />
          <Link href="" className="text-2xl font-semibold rotate-5 transform translate-y-1/2">Портфолио</Link>
          <Link href="" className="text-2xl font-semibold rotate-10 transform translate-y-9.5">Галерея</Link>
        </nav>
      </header> */}
      <div className="max-sm:scale-80 max-sm:min-w-[410px] max-sm:-translate-x-3" >
        <Header />
      </div>
      <div className="translate-x-0">
        <About />
      </div>
      <div className="translate-x-0">
        <Info />
      </div>

      <div className="flex flex-col justify-center left-0 right-0 mb-5 translate-x-0">
                <Comand />
      </div>

      <div className="translate-x-0 scroll-smooth" id="reg">
        <Register />
      </div>

      <div className="translate-x-0">
        <Footer />
      </div>
    </div>

  );
}

