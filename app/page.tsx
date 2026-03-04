import Image from "next/image";
import { Orbitron, Oswald, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
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
  return (
    <>
      {/* ===== FULL PAGE BACKGROUND LAYERS ===== */}
{/* <div className="background-smoke" /> */}
 <div className="background-light light-left" /> 
 <div className="background-light light-right" /> 

    <main className="relative z-10 min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-40 text-center text-white">

  {/* Top Right CTA */}
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

  {/* LOGO */}
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

  {/* Tagline */}
  <p className={`text-2xl md:text-3xl max-w-3xl mb-16 text-gray-300 tracking-widest uppercase animate-fadeUp delay-300 ${oswald.className}`}>
    The world's first fantasy film league platform
  </p>

  {/* Trailer */}
  <div className="w-full max-w-3xl mb-20 px-6">
    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/76SN9gb9ekE?rel=0&modestbranding=1"
        title="FlicksPicks Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

 {/* Lights Camera Draft */}
<p className={`text-4xl md:text-6xl mb-6 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
  <span className="cinematic-text">Lights.</span>{" "}
  <span className="cinematic-text delay-400">Camera.</span>{" "}
  <span className="cinematic-text delay-800">Draft.</span>
</p>

{/* ===== FILM STRIP HOW IT WORKS ===== */}

<section className="w-full mt-2 mb-24 overflow-hidden bg-black pt-12">

<h2 className={`text-4xl md:text-6xl mb-10 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
How It Works
</h2>

<div className="film-wrapper">

<div className="film-track">

{/* ACT I */}
<div className="film-frame">
<div className="act">ACT I</div>
<h3>Draft</h3>
<p>
Build a roster of upcoming movies, actors, and directors releasing this year.
Balance box-office blockbusters with Oscar contenders.
</p>
</div>

{/* ACT II */}
<div className="film-frame">
<div className="act">ACT II</div>
<h3>Movies Hit Theaters</h3>
<p>
Films score FlicksPoints from box-office profit, critic ratings, and audience reception.
Actors and directors earn FlicksPoints from the movies they’re part of.
</p>
</div>

{/* ACT III */}
<div className="film-frame">
<div className="act">ACT III</div>
<h3>Win Monthly Matchups</h3>
<p>
Every month your starters face another team head-to-head.
Manage your roster, make waiver-wire pickups, and stack up wins to make the championship.
</p>
</div>

{/* ACT IV */}
<div className="film-frame">
<div className="act">ACT IV</div>
<h3>The Academy Cup</h3>
<p>
The season culminates on Oscar night. If your movies, actors, or directors win Academy Awards,
you score championship FlicksPoints.
</p>
</div>

{/* DUPLICATE FOR LOOP */}

<div className="film-frame">
<div className="act">ACT I</div>
<h3>Draft</h3>
<p>
Build a roster of upcoming movies, actors, and directors releasing this year.
Balance box-office blockbusters with Oscar contenders.
</p>
</div>

<div className="film-frame">
<div className="act">ACT II</div>
<h3>Movies Hit Theaters</h3>
<p>
Films score FlicksPoints from box-office profit, critic ratings, and audience reception.
Actors and directors earn FlicksPoints from the movies they’re part of.
</p>
</div>

<div className="film-frame">
<div className="act">ACT III</div>
<h3>Win Monthly Matchups</h3>
<p>
Every month your starters face another team head-to-head.
Manage your roster, make waiver-wire pickups, and stack up wins to make the championship.
</p>
</div>

<div className="film-frame">
<div className="act">ACT IV</div>
<h3>The Academy Cup</h3>
<p>
The season culminates on Oscar night. If your movies, actors, or directors win Academy Awards,
you score championship FlicksPoints.
</p>
</div>

</div>
</div>

</section>

{/* Main CTA */}
<a
  href="/join"
  className={`mt-12 bg-white text-black px-14 py-5 rounded-full text-2xl tracking-widest hover:scale-110 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.6)] ${oswald.className}`}
>
  Join The Waitlist
</a>

</main>
    </>
  );
}
