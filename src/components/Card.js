import React from "react";
import { GradientPrimaryRoundedLink } from "./SectionUtilities";

function Card({ data }) {
  return (
    <div className="card pb-6 flex flex-col rounded-xl bg-dark-low">
      <div>
        <img src={data.image} alt={data.name} className="w-100 rounded-t-xl" />
      </div>

      <div className="p-6 flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div className="font-bold text-lg text-primary">{data.name}</div>
          <div className="pb-2 text-gray-400">{data.subtitle}</div>
          <div className="pb-2">{data.description || ""}</div>
        </div>

        <div className="mt-8 text-right">
          <GradientPrimaryRoundedLink url={data.url} target="_blank">
            {data.buttonText || "Visitar"}
          </GradientPrimaryRoundedLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
