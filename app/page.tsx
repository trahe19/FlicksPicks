import Image from "next/image";
import { Orbitron, Oswald } from "next/font/google";

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

      {/* ===== MAIN CONTENT ===== */}
     <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 px-y-24 text-center text-white">

        <div className="curtain-left" />
        <div className="curtain-right" />
        <div className="film-flash" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none spotlight-sweep" />

        {/* LOGO SECTION */}
        <div className="relative mb-24 flex justify-center items-center">
          <Image
            src="/fp-wordmark2.png"
            alt="FlicksPicks Logo"
            width={650}
            height={250}
            priority
            className="animate-logoZoom invert brightness-150 contrast-125 drop-shadow-[0_0_150px_rgba(0,255,255,1)]"
          />
        </div>

        <p className={`text-2xl md:text-3xl max-w-3xl mb-6 text-gray-300 tracking-widest uppercase animate-fadeUp delay-300 ${oswald.className}`}>
          The world's first fantasy film league platform
        </p>

        <p className={`text-4xl md:text-6xl mb-14 tracking-[0.3em] uppercase neon-text ${orbitron.className}`}>
          <span className="cinematic-text">Lights.</span>{" "}
          <span className="cinematic-text delay-400">Camera.</span>{" "}
          <span className="cinematic-text delay-800">Draft.</span>
        </p>

        <a
          href="/join"
          className={`bg-white text-black px-14 py-5 rounded-full text-2xl tracking-widest hover:scale-110 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-fadeUp delay-700 ${oswald.className}`}
        >
          Join the Waitlist
        </a>
{/* Trailer Section */}
       <h2 className={`text-3xl md:text-4xl mb-6 uppercase tracking-widest ${orbitron.className}`}>
  Watch The Trailer
</h2>
<div className="w-full max-w-3xl mt-32 px-6">
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
      </main>
    </>
  );
}
