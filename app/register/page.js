"use client";
import { useState } from "react";
import Image from "next/image";


export default function RegisterPage() {
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
    <div className="form-container">
      <h1>Регистрация</h1>
      <p>Пожалуйста, заполните форму для регистрации.</p>  
      {!Success && !Error && !Load &&(
        <form id="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">ФИО</label>
          <input type="text" id="fullName" name="fullName" />
          {Empty.fullName && <div className="error-msg">{Empty.fullName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Почта</label>
          <input type="email" id="email" name="email" />
          {Empty.email && <div className="error-msg">{Empty.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Номер телефона (WhatsApp)</label>
          <input type="tel" id="phone" name="phone" />
          {Empty.phone && <div className="error-msg">{Empty.phone}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="telegram">Телеграм</label>
          <input type="text" id="telegram" name="telegram" placeholder="@username" />
          {Empty.telegram && <div className="error-msg">{Empty.telegram}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="about">Расскажите о себе</label>
          <textarea id="about" name="about" rows="4"></textarea>
          {Empty.about && <div className="error-msg">{Empty.about}</div>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      )}

      {Load && (
        <div>Загрузка</div>
      )}

      {Success && (
        <div className="modal-success">
          <div className="modal-content">
            <p>Регистрация прошла успешно!</p>
            <button onClick={() => SetSuccess(false)}>Закрыть</button>
          </div>
        </div>
      )}

      {Error && (
        <div className="modal-error">
        <div className="modal-content">
          <p>Ошибка при регистрации. Попробуйте ещё раз.</p>
          <button onClick={() => SetError(false)}>Закрыть</button>
        </div>
      </div>
      )}
    </div>
  );
}
