import React from "react";
import { GradientPrimaryRoundedLink } from "./SectionUtilities";
import Image from "next/image";

function Card({ data }) {
    let cardButton = <div className="mt-8 text-right">
        <GradientPrimaryRoundedLink
            url={data.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {data.buttonText || "Visitar"}
        </GradientPrimaryRoundedLink>
    </div>;

   if (data.disabled) {
       cardButton = <div className="mt-8 text-right text-sm italic text-slate-300">
           No disponible
       </div>
   }

  return (
    <div className="card pb-6 flex flex-col rounded-xl bg-dark-400">
      <div className="relative flex-1 lg:block lg:mb-4">
        <Image
          src={data.image}
          alt={data.name}
          className="object-cover w-full rounded-t-xl"
          width={400}
          height={336}
          layout="responsive"
        />
      </div>

      <div className="p-6 flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div className="font-bold text-lg text-primary">{data.name}</div>
          <div className="pb-2 text-gray-100">{data.subtitle}</div>
          <div className="pb-2">{data.description || ""}</div>
        </div>

          {cardButton}
      </div>
    </div>
  );
}

export default Card;
