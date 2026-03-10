"use client";

import Kathabout from "./katha/Kathabout";
import { motion } from "framer-motion";

const impactStats = [
  { number: "500+", label: "Girls Supported with Education" },
  { number: "120+", label: "Marriages Organized" },
  { number: "1000+", label: "Poor Families Helped" },
  { number: "50+", label: "Ramkatha Programs Conducted" },
];

const problems = [
  "Lack of education",
  "Financial hardship",
  "Early marriage pressure",
  "No support for marriage expenses",
];

const services = [
  {
    title: "Education Support for Poor Girls",
    desc: "We sponsor school education, books, uniforms, and learning resources for girls from poor families.",
  },
  {
    title: "Upbringing & Basic Needs",
    desc: "Food support, health assistance, clothing, and emotional care for underprivileged girls.",
  },
  {
    title: "Marriage Support",
    desc: "Helping poor families organize dignified marriages for their daughters.",
  },
  {
    title: "Support for Poor Families",
    desc: "Financial and social support for struggling families in rural communities.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-white bg-[url('/kanha-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Poor Girls with Education, Care & Marriage Support
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-full">
              Donate Now
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full">
              Sponsor a Girl
            </button>
            <button className="border px-6 py-3 rounded-full">
              Become Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT NGO */}
      <section className="py-20 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">About Our NGO</h2>
        <p className="text-gray-600 text-lg">
          We are a non-profit organization dedicated to supporting
          underprivileged girls and struggling families by providing education,
          care, and financial support.
        </p>
      </section>

      {/* WHY OUR WORK MATTERS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Our Work Matters</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {problems.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div className="border p-10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            To empower underprivileged girls through education and financial support.
          </p>
        </div>

        <div className="border p-10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p>
            A society where every girl has access to education and dignity.
          </p>
        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-14">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <h3 className="font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-black text-white py-20">

        <h2 className="text-3xl text-center font-bold mb-16">
          Our Impact
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {impactStats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold">{stat.number}</h3>
              <p className="mt-3 text-gray-300">{stat.label}</p>
            </div>
          ))}

        </div>

      </section>

      {/* KATHA ABOUT COMPONENT */}
      <Kathabout/>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-20">

        <h2 className="text-3xl font-bold mb-6">
          Together We Can Change a Daughter’s Life
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-black px-8 py-3 rounded-full">
            Donate Now
          </button>

          <button className="border px-8 py-3 rounded-full">
            Sponsor a Girl
          </button>

          <button className="border px-8 py-3 rounded-full">
            Volunteer Today
          </button>
        </div>

      </section>

    </main>
  );
}