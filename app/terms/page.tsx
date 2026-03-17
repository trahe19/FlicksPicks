// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl mb-8">Terms & Conditions</h1>

      <p className="mb-6">
        Welcome to FlicksPicks. By using this platform, you agree to the following terms.
      </p>

      <h2 className="text-2xl mt-8 mb-4">Use of Platform</h2>
      <p className="mb-6">
        FlicksPicks is a fantasy film league platform. Users may create accounts,
        join leagues, and participate in competitions based on film performance.
      </p>

      <h2 className="text-2xl mt-8 mb-4">User Responsibilities</h2>
      <p className="mb-6">
        You agree not to misuse the platform, manipulate scoring systems,
        or engage in fraudulent activity.
      </p>

      <h2 className="text-2xl mt-8 mb-4">Intellectual Property</h2>
      <p className="mb-6">
        All content, branding, and platform features are owned by FlicksPicks.
      </p>

      <h2 className="text-2xl mt-8 mb-4">Limitation of Liability</h2>
      <p className="mb-6">
        FlicksPicks is provided "as is" without warranties. We are not liable
        for losses or damages related to platform use.
      </p>

      <h2 className="text-2xl mt-8 mb-4">Changes</h2>
      <p className="mb-6">
        We may update these terms at any time.
      </p>
    </main>
  );
}
