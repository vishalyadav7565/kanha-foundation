"use client";

export default function LiveKatha() {
  return (
    <div className="bg-orange-50 py-16 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Live Katha Darshan
      </h2>

      <div className="max-w-4xl mx-auto">

        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
          title="Live Katha"
          className="rounded-xl shadow-lg"
        ></iframe>

      </div>

    </div>
  );
}