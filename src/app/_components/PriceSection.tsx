import React from "react";
import { IconType } from "react-icons";

export default async function PriceSection() {
  return (
    <div className="flex flex-col w-full gap-24">
      <h2 className="font-bold text-4xl w-full text-center">PRICING</h2>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <PricingCard
          title="Standard"
          price={200}
          includes={[
            "Free Wi-Fi",
            "Daily housekeeping",
            "Complimentary breakfast",
            "Access to fitness center",
          ]}
          description="
Enjoy a comfortable stay with all the essentials to make your visit pleasant and relaxing."
          backgroundColor={""}
        />
        <PricingCard
          title="Premium"
          price={400}
          includes={[
            "All Standard amenities",
            "Ocean view room",
            "Access to spa and sauna",
            "Room service 24/7",
            "Late checkout",
          ]}
          description="
Upgrade your experience with stunning views and exclusive access to premium hotel facilities."
          backgroundColor={""}
        />
        <PricingCard
          title="Luxury"
          price={800}
          includes={[
            "All Premium amenities",
            "Private balcony",
            "Personal butler service",
            "Luxury suite with jacuzzi",
            "Complimentary airport transfer",
            "Exclusive lounge access",
          ]}
          description="
Indulge in the ultimate luxury with personalized services and exclusive comforts for a memorable stay."
          backgroundColor={""}
        />
      </div>
    </div>
  );
}

async function PricingCard({
  title,
  description,
  price,
  includes,
  backgroundColor,
}: {
  title: string;
  description: string;
  price: number;
  includes: string[];
  backgroundColor: string;
}) {
  return (
    <div
      className={`md:max-w-[400px] flex flex-col gap-4 w-full bg-grey-500  p-12 py-16 rounded-lg border-2 ${backgroundColor}`}
    >
      <h3 className="font-bold  text-xl">{title}</h3>
      <div className="space-y-1">
        <div className="w-full text-4xl">{price} / night</div>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="space-y-1 text-sm">
        {includes.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
