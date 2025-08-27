import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCaretRight, faCaretLeft, faAt } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faSquareInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="left-0 right-0 bottom-0 place-items-center h-40 max-sm:h-60 w-full shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.25)] border-t border-stone-300">
            <div className="flex flex-row max-sm:flex-col w-150 h-30 mt-5 gap-10 justify-center items-center ">
                <div className="sm:hidden flex flex-row gap-10 mt-20">
                    <div className=" flex flex-col place-items-center text-[#f8f5f0]">
                    <a href="https://t.me/lystra_kz"><FontAwesomeIcon icon={faTelegram} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                    <p>@lystra_kz</p>
                    </div>
                    <div className=" flex flex-col place-items-center text-[#f8f5f0]">
                    <a href="https://www.instagram.com/lystra_kz?igsh=b2JreG90MmJsZTRr"><FontAwesomeIcon icon={faSquareInstagram} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>  
                    <p>lystra_kz</p>        
                    </div>
                </div>
                <div className="sm:hidden flex flex-row gap-10 scale-90 -translate-x-4">
                    <div className=" flex flex-col place-items-center text-[#f8f5f0]">
                    <a><FontAwesomeIcon icon={faAt} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                    <p>bighub.info@gmail.com</p>
                    </div>
                    <div className=" flex flex-col place-items-center text-[#f8f5f0]">
                    <a href="https://www.linkedin.com/company/lystra-org/"><FontAwesomeIcon icon={faSquareLinkedin} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                    <p>LYSTRA</p>
                    </div>
                </div>

                <div className="max-sm:hidden flex flex-col place-items-center text-[#f8f5f0]">
                <a href="https://t.me/lystra_kz"><FontAwesomeIcon icon={faTelegram} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                <p>@lystra_kz</p>
                </div>
                <div className="max-sm:hidden flex flex-col place-items-center text-[#f8f5f0]">
                <a href="https://www.instagram.com/lystra_kz?igsh=b2JreG90MmJsZTRr"><FontAwesomeIcon icon={faSquareInstagram} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>  
                <p>lystra_kz</p>        
                </div>   
                <div className="max-sm:hidden flex flex-col place-items-center text-[#f8f5f0]">
                <a><FontAwesomeIcon icon={faAt} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                <p>bighub.info@gmail.com</p>
                </div>
                <div className="max-sm:hidden flex flex-col place-items-center text-[#f8f5f0]">
                <a href="https://www.linkedin.com/company/lystra-org/"><FontAwesomeIcon icon={faSquareLinkedin} className="mb-2 cursor-pointer text-[#f8f5f0] size-12.5 text-[50px]" /></a>
                <p>LYSTRA</p>
                </div>
            </div>
        </footer>
    )
}