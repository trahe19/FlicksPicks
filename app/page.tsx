"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Orbitron, Oswald, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function HomePage() {

 useEffect(() => {

  const track = document.querySelector(".film-track") as HTMLElement;
  const wrapper = document.querySelector(".film-wrapper") as HTMLElement;

  if(!track || !wrapper) return;

  let startX = 0;
  let currentX = 0;
  let dragging = false;

  const start = (x:number) => {

    dragging = true;
    startX = x;

    track.classList.add("dragging");

  };

  const move = (x:number) => {

    if(!dragging) return;

    const dx = x - startX;

    track.style.transform = `translateX(${currentX + dx}px)`;

  };

  const end = () => {

    if(!dragging) return;

    const matrix = new DOMMatrix(getComputedStyle(track).transform);

    currentX = matrix.m41;

    dragging = false;

    track.classList.remove("dragging");

  };

  wrapper.addEventListener("touchstart", e => start(e.touches[0].clientX));
  wrapper.addEventListener("touchmove", e => move(e.touches[0].clientX));
  wrapper.addEventListener("touchend", end);

  wrapper.addEventListener("mousedown", e => start(e.clientX));
  window.addEventListener("mousemove", e => move(e.clientX));
  window.addEventListener("mouseup", end);

}, []);
  
  return (
    <>
      <div className="background-light light-left" />
      <div className="background-light light-right" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-32 pb-40 text-center text-white">

        <div className="absolute top-8 right-8">
          <a
            href="/join"
            className={`bg-white/90 text-black px-6 py-3 rounded-full text-sm tracking-widest hover:scale-105 transition duration-300 shadow-lg ${oswald.className}`}
          >
            Join The Waitlist
          </a>
        </div>

        <div className="curtain-left" />
        <div className="curtain-right" />
        <div className="film-flash" />

        <div className="relative mb-12 flex justify-center items-center">
          <Image
            src="/fp-wordmark2.png"
            alt="FlicksPicks Logo"
            width={650}
            height={250}
            priority
            className="animate-logoZoom invert brightness-150 contrast-125 drop-shadow-[0_0_150px_rgba(0,255,255,1)]"
          />
        </div>

        <p className={`text-2xl md:text-3xl max-w-3xl mb-16 text-gray-300 tracking-widest uppercase animate-fadeUp delay-300 ${oswald.className}`}>
          The world's first fantasy film league platform
        </p>

        <div className="w-full max-w-3xl mb-20 px-6">
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/76SN9gb9ekE?rel=0&modestbranding=1"
              title="FlicksPicks Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className={`text-4xl md:text-6xl mb-6 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
          <span className="cinematic-text">Lights.</span>{" "}
          <span className="cinematic-text delay-400">Camera.</span>{" "}
          <span className="cinematic-text delay-800">Draft.</span>
        </p>

        {/* FILM STRIP SECTION */}

        <section className="w-screen relative left-1/2 -translate-x-1/2 mt-16 mb-24">

          <h2 className={`text-4xl md:text-6xl mb-12 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
            How It Works
          </h2>

       <div className="film-wrapper">
  <div className="projector-light"></div>
  <div className="vignette"></div>
  <div className="vignette"></div>

            <div className="grain"></div>

            <div className="film-track">

              <div className="film-frame">
                <div className="act">ACT I</div>
                <h3 className={orbitron.className}>Draft</h3>
                <p>Build a roster of upcoming movies, actors, and directors releasing this year.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT II</div>
                <h3 className={orbitron.className}>Score</h3>
                <p>Films score FlicksPoints from box-office profit and critic reception.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT III</div>
                <h3 className={orbitron.className}>Matchups</h3>
                <p>Each month your starters face another team head-to-head.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT IV</div>
                <h3 className={orbitron.className}>Academy Cup</h3>
                <p>The season culminates on Oscar night with championship FlicksPoints.</p>
              </div>

              {/* DUPLICATE SET FOR INFINITE LOOP */}

              <div className="film-frame">
                <div className="act">ACT I</div>
                <h3 className={orbitron.className}>Draft</h3>
                <p>Build a roster of upcoming movies, actors, and directors releasing this year.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT II</div>
                <h3 className={orbitron.className}>Score</h3>
                <p>Films score FlicksPoints from box-office profit and critic reception.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT III</div>
                <h3 className={orbitron.className}>Matchups</h3>
                <p>Each month your starters face another team head-to-head.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT IV</div>
                <h3 className={orbitron.className}>Academy Cup</h3>
                <p>The season culminates on Oscar night with championship FlicksPoints.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
