import Image from "next/image";
import AboutText from "./about_text"

export default function AboutPage() {
    return (
        <div>
            <header className="main-header">
        <div className="logo">LYSTRA</div>
    </header>

    <main className="content-container">
        <AboutText />
    </main>

    <footer className="main-footer">
        <p>&copy; 2024 LYSTRA. Все права защищены.</p>
    </footer>
        </div>
    )
}