"use client";

import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="bg-orange-50 py-16">
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
          <p>Years Experience</p>
        </div>

      </div>
    </div>
  );
}