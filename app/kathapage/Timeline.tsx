const timeline = [
  { year: "2022", place: "Prayagraj" },
  { year: "2023", place: "Varanasi" },
  { year: "2024", place: "Ayodhya" },
  { year: "2025", place: "Lucknow" },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Katha Timeline
      </h2>

      {timeline.map((item, i) => (
        <div key={i} className="border-l-4 border-orange-500 pl-6 mb-6">
          <h3 className="text-xl font-bold">{item.year}</h3>
          <p className="text-gray-600">
            Katha Organized in {item.place}
          </p>
        </div>
      ))}

    </div>
  );
}