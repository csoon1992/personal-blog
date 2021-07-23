import React from "react";
import { GradientPrimaryRoundedLink } from "./SectionUtilities";
import Image from "next/image";

function Card({ data }) {
  return (
    <div className="card pb-6 flex flex-col rounded-xl bg-dark-400">
      <div className="relative flex-1 lg:block lg:mb-4">
        <img src={data.image} alt={data.name} className="w-full rounded-t-xl" />
      </div>

      <div className="p-6 flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div className="font-bold text-lg text-primary">{data.name}</div>
          <div className="pb-2 text-gray-100">{data.subtitle}</div>
          <div className="pb-2">{data.description || ""}</div>
        </div>

        <div className="mt-8 text-right">
          <GradientPrimaryRoundedLink
            url={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.buttonText || "Visitar"}
          </GradientPrimaryRoundedLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
