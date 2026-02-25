export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeTiiUzHzSGWoaTR-GMbZsa1gYLL175yGDEGDMXCcCs78Elvg/viewform?embedded=true"
          width="100%"
          height="1000"
          style={{ border: "none" }}
          title="FlicksPicks Waitlist Form"
        />
      </div>
    </div>
  );
}
