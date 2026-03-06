"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "2500+", label: "Women Educated & Skilled" },
  { number: "40+", label: "Community Learning Camps" },
  { number: "15+", label: "Rural Areas Covered" },
  { number: "100+", label: "Katha Sessions Conducted" },
];

const focusAreas = [
  {
    title: "Women Education",
    description:
      "Providing literacy programs, digital education, and skill-based training to empower women toward financial independence.",
  },
  {
    title: "Community Development",
    description:
      "Grassroots NGO initiatives focusing on rural upliftment, health awareness, and social inclusion.",
  },
  {
    title: "Katha & Cultural Literacy",
    description:
      "Using storytelling (Katha) as a transformative tool to educate, inspire confidence, and preserve cultural wisdom.",
  },
  {
    title: "Skill & Leadership Development",
    description:
      "Training programs to develop leadership, entrepreneurship, and vocational capabilities among women.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center justify-center text-white bg-[url('/kanha-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Women. Educating Communities. Transforming Futures.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Kanha Foundation is committed to sustainable women education,
            community upliftment, and cultural empowerment through Katha.
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            About Kanha Foundation
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Kanha Foundation is a women-focused NGO dedicated to education,
            empowerment, and community transformation. We work at the grassroots
            level to create equal opportunities for women and girls in rural and
            underserved communities. Through structured educational programs,
            leadership development, and traditional Katha sessions, we nurture
            confidence, knowledge, and social awareness.
          </motion.p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <motion.div
            className="border rounded-2xl p-12 shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower women through quality education, vocational skills,
              and cultural storytelling initiatives that promote independence,
              dignity, and leadership.
            </p>
          </motion.div>

          <motion.div
            className="border rounded-2xl p-12 shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A society where every woman has access to education, equal
              opportunity, and the confidence to shape her future and
              contribute meaningfully to her community.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center px-6">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-5xl font-bold">{stat.number}</h3>
              <p className="mt-3 text-gray-300">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Our Key Initiatives
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-semibold text-lg mb-4">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Join Us in Empowering Women & Building Stronger Communities
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-10 py-4 bg-white text-black rounded-full font-semibold"
        >
          Support Our Mission
        </motion.button>
      </section>

    </main>
  );
}