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

  if(!track) return;

  let position = 0;
  let speed = 0.25;
  let dragging = false;
  let startX = 0;

  const frames = track.children.length;
  const frameWidth = (track.children[0] as HTMLElement).offsetWidth + 18;

  const loopWidth = frameWidth * (frames / 2);

  const animate = () => {

    if(!dragging){
      position -= speed;
    }

    if(position <= -loopWidth){
      position += loopWidth;
    }

    if(position >= 0){
      position -= loopWidth;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);

  };

  animate();

  const startDrag = (x:number) => {

    dragging = true;
    startX = x;

  };

  const moveDrag = (x:number) => {

    if(!dragging) return;

    const dx = x - startX;

    position += dx;

    startX = x;

  };

  const endDrag = () => {

    dragging = false;

  };

  const wrapper = document.querySelector(".film-wrapper");

wrapper?.addEventListener("touchstart", (e) => {
  const touch = (e as TouchEvent).touches[0];
  startDrag(touch.clientX);
});

wrapper?.addEventListener("touchmove", (e) => {
  const touch = (e as TouchEvent).touches[0];
  moveDrag(touch.clientX);
});

wrapper?.addEventListener("touchend", endDrag);

wrapper?.addEventListener("mousedown", (e) => {
  startDrag((e as MouseEvent).clientX);
});

window.addEventListener("mousemove", (e) => {
  moveDrag((e as MouseEvent).clientX);
});
  window.addEventListener("mouseup", endDrag);

}, []);
  
  return (
    <>
      <div className="background-light light-left" />
      <div className="background-light light-right" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-32 pb-16 text-center text-white">
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

      <div className="relative mb-12 flex justify-center items-center px-6 md:px-0">
  <Image
    src="/fp-wordmark.png"
    alt="FlicksPicks Logo"
    width={650}
    height={250}
    priority
    className="animate-logoZoom invert brightness-150 contrast-125 drop-shadow-[0_0_150px_rgba(0,255,255,1)] w-full max-w-[650px]"
  />
</div>

        <p className={`text-2xl md:text-3xl max-w-3xl mb-16 text-gray-300 tracking-widest uppercase animate-fadeUp delay-300 ${oswald.className}`}>
          The world's first fantasy film league platform
        </p>

      {/* BetaBound Badge */}
<div className="mt-2 mb-10 text-center">
  <p className="text-xs tracking-widest text-gray-400 mb-2">
    FEATURED ON BETABOUND
  </p>

  <a 
    href="https://betabound.com/flickspicks-private-beta/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src="https://betabound.com/wp-content/uploads/2024/07/Betabound-Badge-4.png"
      alt="Featured on BetaBound"
      className="mx-auto w-[180px] opacity-90 hover:opacity-100 hover:scale-105 transition duration-300"
    />
  </a>
</div>
        
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

  <div className="projector-overlay"></div>
      
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
                <p>Films score FlicksPoints from box-office profit, critic ratings, and audience reception.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT III</div>
                <h3 className={orbitron.className}>Matchups</h3>
                <p>Each month your starters face another team head-to-head. Wins get you into the Academy Cup. </p>
              </div>

              <div className="film-frame">
                <div className="act">ACT IV</div>
                <h3 className={orbitron.className}>Academy Cup</h3>
                <p>The season culminates on Oscar night. Win the most Oscars, win the Academy Cup. </p>
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
                <p>Films score FlicksPoints from box-office profit, critic ratings, and audience reception.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT III</div>
                <h3 className={orbitron.className}>Matchups</h3>
                <p>Each month your starters face another team head-to-head. Wins get you into the Academy Cup.</p>
              </div>

              <div className="film-frame">
                <div className="act">ACT IV</div>
                <h3 className={orbitron.className}>Academy Cup</h3>
                <p>The season culminates on Oscar night. Win the most Oscars, win the Academy Cup.</p>
              </div>

            </div>
          </div>
        </section>
<a
  href="/join"
  className={`mt-5 mb-20 bg-white text-black px-16 py-6 rounded-full text-2xl tracking-widest hover:scale-110 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.6)] pulse-cta ${oswald.className}`}
>
  Join The Waitlist
</a>

        <div className="mt-20 text-sm text-gray-400 flex gap-6">
  <a href="/terms" className="hover:underline">Terms</a>
  <a href="/privacy" className="hover:underline">Privacy</a>
</div>
        
      </main>
    </>
  );
}

