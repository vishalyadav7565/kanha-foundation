import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images?.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="gallery"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}