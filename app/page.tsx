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
      <div className="background-smoke" />
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
  <p className={`text-4xl md:text-6xl mb-16 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
    <span className="cinematic-text">Lights.</span>{" "}
    <span className="cinematic-text delay-400">Camera.</span>{" "}
    <span className="cinematic-text delay-800">Draft.</span>
  </p>

  {/* ===== DIVIDER ===== */}
<div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>

{/* ===== GAMEPLAY SECTION ===== */}
<section className="relative w-full max-w-6xl mb-32 px-6">

 <h2 className={`text-5xl md:text-6xl mb-24 tracking-[0.35em] uppercase neon-text ${orbitron.className}`}>
    How it Works
  </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

{/* ACT I */}
<div className="group relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-10 transition duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,255,0.35)]">

  <div className="text-cyan-400 text-2xl tracking-[0.5em] mb-6 font-bold">
    ACT I
  </div>

  <img src="/icons/draft.svg" className="w-12 mb-6 opacity-80"/>

  <h3 className={`text-3xl mb-4 tracking-wide ${bebas.className}`}>
    Draft
  </h3>

  <p className="text-lg text-gray-300 leading-relaxed">
    Build a roster of upcoming movies, actors, and directors releasing this year. 
    Balance box-office blockbusters with Oscar contenders.
  </p>

</div>


{/* ACT II */}
<div className="group relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-10 transition duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,255,0.35)]">

  <div className="text-cyan-400 text-2xl tracking-[0.5em] mb-6 font-bold">
    ACT II
  </div>

  <img src="/icons/theater.svg" className="w-12 mb-6 opacity-80"/>

  <h3 className={`text-3xl mb-4 tracking-wide ${bebas.className}`}>
    Movies Hit Theaters
  </h3>

  <p className="text-lg text-gray-300 leading-relaxed">
    Films score FlicksPoints from box-office profit, critic ratings, and audience reception.
    Actors and directors earn FlicksPoints from the movies they’re part of.
  </p>

</div>


{/* ACT III */}
<div className="group relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-10 transition duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,255,0.35)]">

  <div className="text-cyan-400 text-2xl tracking-[0.5em] mb-6 font-bold">
    ACT III
  </div>

  <img src="/icons/matchup.svg" className="w-12 mb-6 opacity-80"/>

  <h3 className={`text-3xl mb-4 tracking-wide ${bebas.className}`}>
    Win Monthly Matchups
  </h3>

  <p className="text-lg text-gray-300 leading-relaxed">
    Every month your starters face another team head-to-head.
    Manage your roster, make waiver-wire pickups, and stack up wins to make the championship.
  </p>

</div>


{/* ACT IV */}
<div className="group relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-10 transition duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,255,0.35)]">

  <div className="text-cyan-400 text-2xl tracking-[0.5em] mb-6 font-bold">
    ACT IV
  </div>

  <img src="/icons/oscar.svg" className="w-12 mb-6 opacity-80"/>

  <h3 className={`text-3xl mb-4 tracking-wide ${bebas.className}`}>
    The Academy Cup
  </h3>

  <p className="text-lg text-gray-300 leading-relaxed">
    The season culminates on Oscar night. If your movies, actors, or directors win Academy Awards,
    you score championship FlicksPoints.
  </p>

</div>

</div>
  
</section>
      
  {/* Main CTA */}
  <a
    href="/join"
    className={`bg-white text-black px-14 py-5 rounded-full text-2xl tracking-widest hover:scale-110 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.6)] ${oswald.className}`}
  >
    Join The Waitlist
  </a>

</main>
    </>
  );
}
