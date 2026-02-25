import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden text-white">

      {/* Cinematic spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      {/* Logo */}
      <Image
        src="/fp-wordmark.png"
        alt="FlicksPicks Logo"
        width={650}
        height={250}
        priority
        className="mb-14 drop-shadow-[0_0_70px_rgba(255,255,255,0.9)] animate-fadeUp"
      />

      {/* Headline */}
      <h1 className="text-6xl md:text-7xl tracking-wide font-[var(--font-plaster)] mb-6 animate-fadeUp delay-150">
        FlicksPicks
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl max-w-2xl mb-6 text-gray-300 font-light animate-fadeUp delay-300">
        The World's First Fantasy Film League Platform.
      </p>

      {/* Tagline */}
      <p className="text-3xl md:text-4xl mb-14 font-[var(--font-monoton)] tracking-widest animate-fadeUp delay-500">
        Lights. Camera. Draft.
      </p>

      {/* CTA */}
      <a
        href="/join"
        className="bg-white text-black px-14 py-5 rounded-full font-semibold text-xl tracking-wide hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(255,255,255,0.5)] animate-fadeUp delay-700"
      >
        Join the Waitlist
      </a>

    </main>
  );
}
