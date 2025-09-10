"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase, faCaretRight, faTriangleExclamation, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

export default function Register() {
    const [Success, SetSuccess] = useState(false)  
    const [Error, SetError] = useState(false)
    const [Empty, setEmpty] = useState({})
    const [Load, SetLoad] = useState(false)
    const [time, setTime] = useState(false)
    const [blink, SetBlink] = useState({ projects: false })
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)
    const [open, SetOpen] = useState(false)
    const [value, setValue] = useState("Разработка");
    const options = ["Разработка", "Дизайн", "Организация", "Другое", "Новичок",];
    const [botLink, setBotLink] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Запускаем анимацию только когда элемент видим
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
                }
            },
            {
                threshold: 0.3, // Элемент считается видимым когда 30% его площади в поле зрения
                rootMargin: '0px 0px -100px 0px' // Начинает срабатывать за 100px до появления
            }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const alerts = {}; 

        function isPhone(str) {
          return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(str)
        }
        function isMail(str) {
          return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(str)
        }

        if (!isMail(form.email.value)) alerts.email = "Почта не верна"
        if (!isPhone(form.phone.value)) alerts.phone = "Номер не верен" 
        
        if (!form.fullName.value.trim()) alerts.fullName = "Поле пустое";
        if (!form.email.value.trim()) alerts.email = "Поле пустое"
        if (!form.phone.value.trim()) alerts.phone = "Поле пустое"      
        if (!form.about.value.trim()) alerts.about = "Поле пустое"   

             

        if (Object.keys(alerts).length > 0) {
          setEmpty(alerts);
          return;
        }

        SetLoad(true)

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fullName: e.target.fullName.value,
              email: e.target.email.value,
              phone: e.target.phone.value,
              telegram: e.target.telegram.value,
              cv: e.target.cv.value,
              drct: value,
              about: e.target.about.value,
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          const data = await res.json();
          if (res.ok && data.success) {
            SetSuccess(true)
            setBotLink(data.link || data.link || "");
            console.log("Успешно отправлено!");
            console.log(res);
          } else {
            SetError(true)
            console.log("Ошибка при отправке");
            console.log(res);
          }
        } catch (err) {
          if (err && err.name === "AbortError") {
            // Действия после таймаута
            console.log("Запрос отменён по таймауту");
            setTime(true)
          } else if (!navigator.onLine) {
            // Нет интернета
            console.log("Нет подключения к интернету");
            setTime(true)
          } else {
            // Другие сетевые ошибки
            console.log("Сетевая ошибка", err);
            setTime(true)
          }
        } finally {
          SetLoad(false)
        }
      };

    return (
        <div ref={elementRef} className="flex justify-center left-0 right-0 mt-35 max-sm:mt-0">
            <div className=" pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen  sm:block">
                    <img src="/lighting-contact.png" alt="" className={`absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen transition-all duration-200 ease-in-out ${blink.projects ? 'sm:block opacity-100' : 'sm:block opacity-0'}`} />
                </div>
            {!Success && !Error && !Load && !time &&(
                <form id="registration-form" onSubmit={handleSubmit} className="relative mt-20  mb-20 relative flex flex-col justify-center items-center w-170 max-sm:w-90 max-sm:h-250  sm:bg-[url('/glass9.png')]   max-sm:shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.25)] max-sm:border-t max-sm:border-l   max-sm:border-stone-300  bg-no-repeat bg-center bg-contain ">
                <h1 className="max-sm:mt-0 translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center w-40 mt-10">
                    Вступить в LYSTRA
                </h1>

                <div className="flex flex-col max-sm:items-center max-sm:scale-120 max-sm:mt-20 max-sm:gap-5 gap-10 mt-10 mb-10">
                    <div className="flex flex-row max-sm:flex-col max-sm:gap-2 gap-20">
                        <div className="flex flex-col">
                            <label className="text-[#f8f5f0] text-xl">Имя</label>
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="Имя*" id="fullName" name="fullName" />
                        {Empty.fullName && <div className="text-[red] absolute translate-y-16">{Empty.fullName}</div>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#f8f5f0] text-xl">Телефон</label>
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="phone" placeholder="Номер телефона*" id="phone" name="phone" />
                        {Empty.phone && <div className="text-[red] absolute translate-y-16 ">{Empty.phone}</div>}
                        </div>
                    </div>

                    <div className="flex flex-row gap-20 max-sm:flex-col max-sm:gap-2">
                        <div className="flex flex-col">
                            <label className="text-[#f8f5f0] text-xl">Почта</label>
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="mail" placeholder="Почта*" id="email" name="email" />
                        {Empty.email && <div className="text-[red] absolute translate-y-16 ">{Empty.email}</div>}
                        </div>
                        
                        <div className="flex flex-col">
                            <label className="text-[#f8f5f0] text-xl">Телеграмм</label>
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="@name*" id="telegram" name="telegram" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#f8f5f0] text-xl">Резюме (Если есть)</label>
                        <input className="placeholder-[#ABABAB] text-[#f8f5f0] max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="cv*" id="cv" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#f8f5f0] text-xl">Направление</label>
                        <input type="hidden" name="drct" value={value} />
                        <div className="relative">
                            <button
                            type="button" 
                            onClick={() => SetOpen(!open)}
                            className="w-full p-2 rounded bg-white/10 text-[#f8f5f0] shadow-inner text-left"
                            >
                                {value}
                            </button>
                            {open && (
                                <ul className="absolute z-10 left-0 right-0 mt-1 bg-[#3F3F3F] shadow-lg">
                                {options.map((opt) => (
                                    <li
                                    key={opt}
                                    onClick={() => { setValue(opt); SetOpen(false); }}
                                    className="cursor-pointer relative backdrop-blur  px-4 py-2 hover:bg-gray-700 text-[#f8f5f0]"
                                    >
                                    {opt}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#f8f5f0] text-xl">О себе</label>
                        <textarea className="relative placeholder-[#ABABAB] text-[#f8f5f0] max-sm:w-70 w-140 h-30 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" id="about" name="about" rows="4" placeholder="О себе*"></textarea>
                        {Empty.about && <div className="text-[red]">{Empty.about}</div>}
                    </div>
                    <button className="max-sm:-translate-y-2 text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center -translate-y-5" type="submit">Вступить</button>
                </div>
            </form>
            )}
            
            {Load && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-95 max-sm:bg-[url('/glass11.png')] place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center w-40 mt-10">
                    Отправка
                </h1>
                <div className="flex items-center justify-center mt-10">
                    <div className="h-12 w-12 border-4 border-[#f8f5f0] border-t-transparent rounded-full animate-spin"></div>
                </div>
                </form>
            )}

            {Success && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-95 max-sm:bg-[url('/glass11.png')] flex flex-col place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="max-sm:w-50 translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center w-100 mt-10">
                Пройдите по ссылке для дальнейшей регистрации
                </h1>
                {/* <h1 className="max-sm:w-50 translate-y-5 text-[#f8f5f0] text-2xl font-bold w-100 text-center ">Войдите по ссылке для дальнейшей регистрации</h1> */}
                {botLink && <a href={botLink}><h1  className="max-sm:w-50 cursor-pointer translate-y-5 text-[#a2e3ea] mt-10 mb-10 text-2xl font-bold w-100 text-center ">Продолжить</h1></a>}
                <button className="text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center translate-y-10" onClick={() => SetSuccess(false)}>Закрыть</button>
                </form>
            )}

            {Error && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-90 max-sm:h-200 max-sm:bg-[url('/glass11.png')] flex flex-col place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-[#d6242f] size-20 text-[80px] mt-10" />            
                <h1 className="translate-y-5 text-[#f8f5f0] text-2xl font-bold w-100 text-center mt-10">
                    Ошибка при регистрации. Попробуйте еще раз
                </h1>
                <button className="text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center translate-y-10" onClick={() => SetError(false)}>Закрыть</button>
                </form>
            )}

            {time && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-90 max-sm:h-200 max-sm:bg-[url('/glass11.png')] flex flex-col place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <FontAwesomeIcon icon={faWifi} className="text-[#ffef78] size-20 text-[80px] mt-10" />            
                <h1 className="translate-y-5 text-[#f8f5f0] text-2xl font-bold w-100 text-center mt-10">
                    Ошибка соединения.
                </h1>
                <button className="text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center translate-y-10" onClick={() => setTime(false)}>Закрыть</button>
                </form>
            )}

        </div>
    )
}