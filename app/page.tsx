export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        FlicksPicks
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-300">
        The fantasy sports league for movies.
        Draft films. Compete with friends. Win based on real box office performance.
      </p>

      <p className="text-lg text-gray-400 mb-10">
        Coming Soon.
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
