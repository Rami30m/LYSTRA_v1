import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const url = process.env.google_sheet;
console.log("URL из env:", process.env.google_sheet);
export async function POST(req) {
    // const origin = req.headers.get("origin") || "";
    // if (!origin.includes("lystra.kz")) {
    //   return NextResponse.json({ error: "CSRF protection: invalid origin" }, { status: 403 });
    // }
    const body = await req.json();
    const { fullName, email, phone, telegram, cv, drct, about } = body;
    const token = uuidv4();

    console.log("Получена регистрация:", body);
    let time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });

    const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body, time, token }),
    });

    if (response.ok) {
        console.log({success: true, link: `https://t.me/lystra_kz_bot?start=${token}`});
    } else {
        console.error(" Ошибка отправки: ", response.statusText);
    }
    return NextResponse.json({success: true, link: `https://t.me/lystra_kz_bot?start=${token}`});
}    
