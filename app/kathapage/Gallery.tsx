import Image from "next/image";

export default function Gallery({images}) {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Katha Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {images.map((img,i)=>(
          <Image
            key={i}
            src={img}
            width={300}
            height={200}
            alt="katha"
            className="rounded-xl shadow-lg"
          />
        ))}

      </div>

    </div>
  );
}