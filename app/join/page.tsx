export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Join FlicksPicks
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
          width="100%"
          height="900"
          className="border-0"
        />
      </div>
    </div>
  );
}
