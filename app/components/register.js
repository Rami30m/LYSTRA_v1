"use client";
import { useState } from "react";

export default function Register() {
    const [Success, SetSuccess] = useState(false)  
    const [Error, SetError] = useState(false)
    const [Empty, setEmpty] = useState({})
    const [Load, SetLoad] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const alerts = {}; 

        if (!form.fullName.value.trim()) alerts.fullName = "Поле пустое";
        if (!form.email.value.trim()) alerts.email = "Поле пустое"
        if (!form.phone.value.trim()) alerts.phone = "Поле пустое"      
        if (!form.telegram.value.trim()) alerts.telegram = "Поле пустое" 
        if (!form.about.value.trim()) alerts.about = "Поле пустое"   

        if (Object.keys(alerts).length > 0) {
          setEmpty(alerts);
          return;
        }

        SetLoad(true)


        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            telegram: e.target.telegram.value,
            about: e.target.about.value,
          }),
        });

        if (res.ok) {
          SetLoad(false)
          SetSuccess(true)
          console.log("Успешно отправлено!");
        } else {
          SetLoad(false)
          SetError(true)
          console.log("Ошибка при отправке");
        }
      };

    return (
        <div className="flex justify-center left-0 right-0 mt-15">
            <div className=" pointer-events-none bg-[#2a2a2a] absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen  sm:block">
                    <img src="/lighting-contact.png" alt="" className="absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen  sm:block" />
                </div>
            {!Success && !Error && !Load &&(
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20  mb-20 relative place-items-center w-170   bg-[url('/glass9.png')] max-sm:w-95 max-sm:bg-[url('/glass11.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="max-sm:mt-5 translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center w-40 mt-10">
                    Вступить в LYSTRA
                </h1>

                <div className="flex flex-col max-sm:items-center max-sm:scale-120 max-sm:mt-20 gap-10 mt-10 mb-10">
                    <div className="flex flex-row max-sm:flex-col max-sm:gap-5 gap-20">
                        <div className="flex flex-col">
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="Имя*" id="fullName" name="fullName" />
                        {Empty.fullName && <div className="text-[red] absolute translate-y-10">{Empty.fullName}</div>}
                        </div>
                        <div className="flex flex-col">
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="Номер телефона*" id="phone" name="phone" />
                        {Empty.phone && <div className="text-[red] absolute translate-y-10">{Empty.phone}</div>}
                        </div>
                    </div>

                    <div className="flex flex-row gap-20 max-sm:flex-col max-sm:gap-5">
                        <div className="flex flex-col">
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="Почта*" id="email" name="email" />
                        {Empty.email && <div className="text-[red] absolute translate-y-10">{Empty.email}</div>}
                        </div>
                        
                        <div className="flex flex-col">
                            <input className="placeholder-[#ABABAB] text-[#f8f5f0] w-60 max-sm:w-70 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" type="text" placeholder="Телеграмм*" id="telegram" name="telegram" />
                        {Empty.telegram && <div className="text-[red] absolute translate-y-10">{Empty.telegram}</div>}
                        </div>
                    </div>
                    <div>
                        <textarea className="relative placeholder-[#ABABAB] text-[#f8f5f0] max-sm:w-70 w-140 h-30 bg-white/10 shadow-[inset_0px_4px_4px_rgba(41,41,41,0.25)] p-2" id="about" name="about" rows="4" placeholder="О себе*"></textarea>
                        {Empty.about && <div className="text-[red]">{Empty.about}</div>}
                    </div>
                    <button className="max-sm:-translate-y-9.5 text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center -translate-y-5" type="submit">Вступить</button>
                </div>
            </form>
            )}
            
            {Load && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-95 max-sm:bg-[url('/glass11.png')] place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center w-40 mt-10">
                    Загрузка
                </h1>
                <div className="flex items-center justify-center mt-10">
                    <div className="h-12 w-12 border-4 border-[#f8f5f0] border-t-transparent rounded-full animate-spin"></div>
                </div>
                </form>
            )}

            {Success && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-95 max-sm:bg-[url('/glass11.png')] flex flex-col place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="max-sm:w-50 translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center mt-10">
                    Регистрация прошла успешно
                </h1>
                <button className="text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center translate-y-10" onClick={() => SetSuccess(false)}>Закрыть</button>
                </form>
            )}

            {Error && (
                <form id="registration-form" onSubmit={handleSubmit} className="mt-20 relative max-sm:w-95 max-sm:bg-[url('/glass11.png')] flex flex-col place-items-center w-170 h-120 mb-10  bg-[url('/glass9.png')] bg-no-repeat bg-center bg-contain">
                <h1 className="translate-y-5 text-[#f8f5f0] text-2xl font-bold text-center mt-10">
                    Ошибка при регистрации. Попробуйте еще раз
                </h1>
                <button className="text-[#2a2a2a] bg-[#f8f5f0] p-1.5 text-2xl cursor-pointer font-bold text-center translate-y-10" onClick={() => SetError(false)}>Закрыть</button>
                </form>
            )}

        </div>
    )
}