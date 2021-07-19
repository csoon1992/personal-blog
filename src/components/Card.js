import React from "react";
import { GradientPrimaryRoundedLink } from "./SectionUtilities";
import Image from "next/image";

function Card({ data }) {
  return (
    <div className="card pb-6 flex flex-1 flex-row lg:flex-col rounded-xl bg-dark">
      <div className="relative flex-1 lg:block lg:mb-4">
        <Image
          src={data.image}
          alt={data.name}
          className="object-cover"
          layout="fill"
          sizes="33vw"
        />
      </div>

      <div className="px-6 lg:py-6 flex flex-1 flex-col">
        <div className="flex lg:flex-1 flex-col">
          <div className="font-bold text-xl lg:text-lg text-primary">
            {data.name}
          </div>
          <div className="pb-2 text-gray-400">{data.subtitle}</div>
          <div className="pb-2">{data.description || ""}</div>
        </div>

        <div className="lg:mt-8 lg:text-right">
          <GradientPrimaryRoundedLink url={data.url} target="_blank">
            {data.buttonText || "Visitar"}
          </GradientPrimaryRoundedLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
