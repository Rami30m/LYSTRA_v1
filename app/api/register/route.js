import { NextResponse } from "next/server";

const url = process.env.google_sheet;
console.log("URL из env:", process.env.google_sheet);
export async function POST(req) {
    // const origin = req.headers.get("origin") || "";
    // if (!origin.includes("lystra.kz")) {
    //   return NextResponse.json({ error: "CSRF protection: invalid origin" }, { status: 403 });
    // }
    const body = await req.json();
    const { fullName, email, phone, telegram, cv, drct, about } = body;

    console.log("Получена регистрация:", body);
    let time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });

    const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body, time }),
    });

    if (response.ok) {
        console.log("succes:");
    } else {
        console.error(" Ошибка отправки: ", response.statusText);
    }
    return NextResponse.json({ message: "Регистрация успешна" });
}    
