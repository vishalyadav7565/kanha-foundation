"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

/* ---------------- TYPES ---------------- */

type KathaEvent = {
  _id: string;
  place: string;
  year: string;
  devotees: string;
};

type TimelineItem = {
  _id: string;
  year: string;
  place: string;
};

type GalleryItem = {
  image: any;
};

/* ---------------- QUERY ---------------- */

const query = `{
  "events": *[_type=="kathaEvents"]{
    _id,
    place,
    year,
    devotees
  },
  "timeline": *[_type=="kathaTimeline"]{
    _id,
    year,
    place
  },
  "gallery": *[_type=="kathaGallery"]{
    image
  }
}`;

/* ---------------- COMPONENT ---------------- */

const Kathabout = () => {

  const [kathaEvents, setEvents] = useState<KathaEvent[]>([]);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setEvents(data.events || []);
      setTimeline(data.timeline || []);
      setGallery(data.gallery || []);
    });
  }, []);

  return (
    <div className="bg-orange-50">

      {/* HERO */}
      <div className="bg-orange-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Shri Ram Katha Mahotsav
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          कथा के माध्यम से भक्ति, संस्कार और आध्यात्मिक ज्ञान
          का प्रसार।
        </p>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/katha.jpg"
          alt="katha"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            About Katha
          </h2>

          <p className="text-gray-700 mb-4">
            भारत की सनातन परंपरा में कथा का अत्यंत महत्व है।
            कथा के माध्यम से भगवान की लीलाओं और धर्म का ज्ञान
            लाखों लोगों तक पहुँचता है।
          </p>

          <p className="text-gray-700">
            हमारी संस्था विभिन्न शहरों में कथा आयोजन कर
            समाज में भक्ति, संस्कार और आध्यात्मिक जागरूकता
            फैलाने का कार्य करती है।
          </p>
        </div>

      </div>

      {/* COUNTERS */}
      <div className="bg-white py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold text-orange-600">
              <CountUp end={50} duration={3}/>+
            </h2>
            <p>Total Katha</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-600">
              <CountUp end={20} duration={3}/>+
            </h2>
            <p>Cities</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-600">
              <CountUp end={100} duration={3}/>K+
            </h2>
            <p>Devotees</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-600">
              <CountUp end={5} duration={3}/>+
            </h2>
            <p>Years</p>
          </div>

        </div>

      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Katha Timeline
        </h2>

        {timeline.map((item) => (
          <div
            key={item._id}
            className="border-l-4 border-orange-500 pl-6 mb-6"
          >
            <h3 className="text-xl font-bold">{item.year}</h3>

            <p className="text-gray-600">
              Katha Organized in {item.place}
            </p>
          </div>
        ))}

      </div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Katha Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {gallery.map((img, i) => (
            <img
              key={i}
              src={img.image ? urlFor(img.image).url() : ""}
              alt="gallery"
              className="rounded-xl shadow-lg"
            />
          ))}

        </div>

      </div>

      {/* VIDEO */}
      <div className="bg-orange-100 py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-10">
          Katha Video
        </h2>

        <div className="max-w-4xl mx-auto">

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/VIDEOID"
            title="Katha"
            className="rounded-xl shadow-lg"
          />

        </div>

      </div>

      {/* EVENTS */}
      <div className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Katha Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {kathaEvents.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-orange-600">
                {event.place}
              </h3>

              <p className="text-gray-600">
                Year: {event.year}
              </p>

              <p className="text-gray-600">
                Devotees: {event.devotees}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Kathabout;