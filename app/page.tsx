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

      {/* ===== HOW IT WORKS ===== */}
<section className="w-full max-w-6xl mt-24 mb-24 px-6">

  <h2 className={`text-4xl md:text-5xl mb-12 tracking-widest uppercase ${orbitron.className}`}>
    How FlicksPicks Works
  </h2>

  <p className={`text-xl text-gray-300 mb-16 max-w-3xl mx-auto ${oswald.className}`}>
    Draft movies, actors, and directors. Compete monthly on box office and reviews.
    Win your league on Oscar night.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Card 1 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
      <h3 className="text-2xl mb-4">🎬 Draft Your Film Team</h3>
      <p className="text-gray-300">
        Build a roster of upcoming movies, actors, and directors releasing this year.
        Balance blockbuster hits with Oscar contenders.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
      <h3 className="text-2xl mb-4">📊 Score From Box Office & Reviews</h3>
      <p className="text-gray-300">
        Movies earn points from box office profit, IMDb, Rotten Tomatoes, and
        Letterboxd ratings. Actors and directors score from the films they're in.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
      <h3 className="text-2xl mb-4">⚔️ Win Monthly Matchups</h3>
      <p className="text-gray-300">
        Each month your starting movie faces another player. Manage your roster,
        use the waiver wire, and win monthly matchups to reach the playoffs.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
      <h3 className="text-2xl mb-4">🏆 Championships on Oscar Night</h3>
      <p className="text-gray-300">
        The season ends on Oscar night. If your movies, actors, or directors win
        Academy Awards, you score championship points.
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
