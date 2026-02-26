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
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden text-white">

      <div className="curtain-left" />
      <div className="curtain-right" />
      <div className="film-flash" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none spotlight-sweep" />

      <Image
        src="/fp-wordmark.png"
        alt="FlicksPicks Logo"
        width={650}
        height={250}
        priority
        className="mb-14 animate-logoZoom mix-blend-screen drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]"
      />

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

    </main>
  );
}
