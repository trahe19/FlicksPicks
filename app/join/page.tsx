'use client'

import Script from "next/script";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-4xl bg-white rounded-xl p-4">

        <div
          style={{ width: "100%", height: "600px" }}
          data-fillout-id="vMjS7i6SjCus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        ></div>

        <Script
          src="https://server.fillout.com/embed/v1/"
          strategy="afterInteractive"
        />

      </div>

    </div>
  );
}
