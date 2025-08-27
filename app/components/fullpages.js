"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";

export default function Fullpage() {
  return (
    <ReactFullpage
      scrollingSpeed={700}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section bg-red-500 flex items-center justify-center h-screen text-white text-4xl">Первый экран</div>
          <div className="section bg-blue-500 flex items-center justify-center h-screen text-white text-4xl">Второй экран</div>
          <div className="section bg-green-500 flex items-center justify-center h-screen text-white text-4xl">Третий экран</div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}