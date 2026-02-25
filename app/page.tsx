import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <Image
        src="/fp-wordmark.png"
        alt="FlicksPicks Logo"
        width={600}
        height={200}
        priority
        className="mb-10"
      />

      <h1 className="text-5xl md:text-6xl font-[var(--font-plaster)] mb-6">
        FlicksPicks
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl mb-4 font-[var(--font-monoton)] text-gray-300">
        The World's First Fantasy Film League Platform.
      </p>

      <p className="text-2xl md:text-3xl mb-10 font-[var(--font-monoton)] text-white">
        Lights. Camera. Draft.
      </p>

      <a
        href="/join"
        className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition"
      >
        Join the Waitlist
      </a>

    </main>
  );
}
