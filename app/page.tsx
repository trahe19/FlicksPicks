import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden text-white">

      {/* Curtains */}
      <div className="curtain-left" />
      <div className="curtain-right" />

      {/* Film flash effect */}
      <div className="film-flash" />

      {/* Cinematic spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none spotlight-sweep" />

      {/* Logo */}
      <Image
        src="/fp-wordmark.png"
        alt="FlicksPicks Logo"
        width={650}
        height={250}
        priority
        className="mb-14 animate-logoZoom mix-blend-screen drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]"
      />

      {/* Description */}
      <p className="text-2xl md:text-3xl max-w-3xl mb-6 text-gray-300 font-[var(--font-oswald)] tracking-widest uppercase animate-fadeUp delay-300">
  The world's first fantasy film league platform.
</p>

      {/* Tagline */}
  <p className="text-4xl md:text-6xl mb-14 font-[var(--font-orbitron)] tracking-[0.3em] uppercase neon-text">
  <span className="cinematic-text">Lights.</span>{" "}
  <span className="cinematic-text delay-400">Camera.</span>{" "}
  <span className="cinematic-text delay-800">Draft.</span>
</p>

      {/* CTA */}
      <a
        href="/join"
      className="bg-white text-black px-14 py-5 rounded-full text-2xl tracking-widest font-[var(--font-oswald)] hover:scale-110 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-fadeUp delay-700"
      >
        Join the Waitlist
      </a>

    </main>
  );
}
