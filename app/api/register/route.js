import { NextResponse } from "next/server";

const url = process.env.google_sheet;
console.log("URL из env:", process.env.google_sheet);
export async function POST(req) {
  const body = await req.json();
  const { fullName, email, phone, telegram, about } = body;

  console.log("Получена регистрация:", body);
  let time = new Date().toLocaleString()
  
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...body, time}),
  });
  
  if (response.ok) {
    console.log("succes:");
  } else {
    console.error(" Ошибка отправки: ", response.statusText);
  }
  return NextResponse.json({ message: "Регистрация успешна" });
}
