import React from "react";

function SectionTitle({ title }) {
  return (
    <h2 className="text-center font-bold text-4xl mb-12">
      {title}
      <span className="block mx-auto bg-primary mt-3 h-1 w-20">&nbsp;</span>
    </h2>
  );
}

function SectionSubtitle({ title }) {
  return (
    <h3 className="text-center font-bold text-3xl mb-6 text-primary">
      {title}
    </h3>
  );
}

export { SectionTitle, SectionSubtitle };
