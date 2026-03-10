"use client";

import { client } from "@/lib/sanity";
import Image from "next/image";
import Counter from "./Counter";
import Timeline from "./Timeline";
import Gallery from "./Gallery";
import KathaMap from "./KathaMap";

async function getKatha() {

  const query = `*[_type=="katha"]{
    title,
    place,
    year,
    devotees,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}

export default async function KathaPage() {

  const data = await getKatha();

  const images = data.map((item)=>item.imageUrl);

  return (
    <div className="bg-white">

      {/* HERO */}

      <div className="bg-orange-600 text-white py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Shri Ram Katha Mahotsav
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          कथा के माध्यम से भक्ति, संस्कार और आध्यात्मिक
          ज्ञान का प्रसार।
        </p>

      </div>

      {/* ABOUT */}

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <Image
          src="/katha.jpg"
          width={500}
          height={350}
          alt="katha"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            About Katha
          </h2>

          <p className="text-gray-700 mb-4">
            भारत की सनातन परंपरा में कथा का अत्यंत महत्व है।
            इसके माध्यम से भगवान की लीलाओं और धर्म का
            संदेश लाखों लोगों तक पहुँचता है।
          </p>

          <p className="text-gray-700">
            हमारी संस्था विभिन्न शहरों में कथा आयोजन कर
            समाज में भक्ति और संस्कारों का प्रसार करती है।
          </p>

        </div>

      </div>

      {/* COUNTER */}

      <Counter/>

      {/* TIMELINE */}

      <Timeline/>

      {/* GALLERY */}

      <Gallery images={images}/>

      {/* EVENTS */}
      <KathaMap/>

      <div className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Katha Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item,i)=>(
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6"
            >

              <h3 className="text-xl font-bold text-orange-600">
                {item.title}
              </h3>

              <p className="text-gray-600">
                📍 {item.place}
              </p>

              <p className="text-gray-600">
                📅 {item.year}
              </p>

              <p className="text-gray-600">
                👥 {item.devotees}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}