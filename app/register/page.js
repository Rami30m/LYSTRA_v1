"use client";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
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
          console.log("Успешно отправлено!");
        } else {
          console.log("Ошибка при отправке");
        }
      };

  return (
    <div className="form-container">
      <h1>Регистрация</h1>
      <p>Пожалуйста, заполните форму для регистрации.</p>
      <form id="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">ФИО</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Почта</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Номер телефона (WhatsApp)</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="telegram">Телеграм</label>
          <input type="text" id="telegram" name="telegram" placeholder="@username" />
        </div>
        <div className="form-group">
          <label htmlFor="about">Расскажите о себе</label>
          <textarea id="about" name="about" rows="4"></textarea>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
