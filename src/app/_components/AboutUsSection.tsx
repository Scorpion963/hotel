import Image from "next/image";
import React from "react";

export default async function AboutUsSection() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 justify-between ">
      <div className="flex flex-col md:max-w-1/2 space-y-6">
        <h2 className="font-bold text-4xl">About us</h2>
        <p className="text-gray-500">
          Our hotel booking app makes it easy to find and reserve rooms in just
          a few taps. Designed for convenience, it puts room details, ratings,
          and instant booking all in one place. Download the app and book your
          stay with ease.
        </p>
      </div>
      <div className="md:max-w-[400px] w-full h-96 relative">
        <Image
          src="/images/about_us.jpg"
          fill={true}
          objectFit="cover"
          alt="image of a beatiful hotel"
        />
      </div>
    </div>
  );
}
