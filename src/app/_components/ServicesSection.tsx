import React from "react";
import { IconType } from "react-icons";
import { FaTv } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { MdBathroom } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LiaHotTubSolid } from "react-icons/lia";


export default async function ServicesSection() {
  return (
    <div className="flex flex-col gap-24">
      <h2 className="font-bold text-4xl w-full text-center">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        <ServiceCard
          Icon={IoWifiOutline}
          title="Wifi"
          description="Our guests can use Wi-Fi for free throughout the hotel territory."
        />
        <ServiceCard
          Icon={TbAirConditioning}
          title="Air Conditioning"
          description="Air conditioner is available at every room of our hotel."
        />
        <ServiceCard
          Icon={MdBathroom}
          title="Private Bathroom"
          description="Private bathroom and toilets are to your service, no additional payment is required."
        />
        <ServiceCard
          Icon={FaTv}
          title="Flat-screen TV"
          description="Watch your favorite channels even when you are on a business trip."
        />
        <ServiceCard
          Icon={IoBedOutline}
          title="Large Bed"
          description="Large double bed will make your sleep sound and refreshing."
        />
        <ServiceCard
          Icon={LiaHotTubSolid}
          title="Jacuzzi"
          description="Unwind and relax in our luxurious Jacuzzi, perfect for soothing your body after a long day."
        />
      </div>
    </div>
  );
}

async function ServiceCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: IconType;
}) {
  return (
    <div className="flex flex-col items-center gap-2  text-center">
      <div>
        <Icon size={72} />
      </div>
      <div className="space-y-1">
        <h4 className="font-medium  text-xl">{title}</h4>
        <p className="text-sm font-normal text-gray-500 max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
}
