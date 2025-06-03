import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export default async function RoomsSection() {
  return (
    <div className="flex flex-col w-full gap-24">
      <h2 className="font-bold text-4xl w-full text-center">OUR ROOMS</h2>
      <div className="flex flex-col justify-center items-center md:flex-row gap-6">
        <RoomCard
          src="/images/standard.jpg"
          alt="Image of a single bed"
          title="Standard Single"
          description="A cozy and affordable option perfect for solo travelers or couples seeking comfort."
          rating={3}
        />
        <RoomCard
          src="/images/premium_3.jpg"
          alt="Image of a stylish premium room"
          title="Platinum Suite"
          description="Elegant design with premium amenities, ideal for guests who appreciate extra comfort and style."
          rating={4}
        />
        <RoomCard
          src="/images/penthouse.jpg"
          alt="Image of a luxury penthouse"
          title="Penthouse Suite"
          description="Our most luxurious suite with breathtaking views, spacious interiors, and top-tier service."
          rating={5}
        />
      </div>
    </div>
  );
}

async function RoomCard({
  src,
  title,
  description,
  alt,
  rating,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  rating: number;
}) {
  return (
    <div className="md:max-w-[400px] w-full flex flex-col">
      <div className="h-[32rem] relative bg-black">
        <Image src={src} fill={true} objectFit="cover" alt={alt} />
      </div>
      <div className="space-y-1 pt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex gap-1">
          {Array.from({ length: rating }, (_, i) => (
            <IoMdStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
