import React from "react";
import Card from "../Card";
import { SectionTitle } from "../SectionUtilities";

const publicsWorks = [
  {
    url: "https://mispapissecasan.com/",
    name: "mispapissecasan.com",
    subtitle: "2017 - Web personal",
    description: "Web cuenta-atrás para mi boda.",
    image: "/img/mispapissecasan.jpg",
  },
  {
    url: "https://leticiaortizescritora.com/",
    name: "leticiaortizescritora.com",
    subtitle: "2019 - Landing para venta de nuevo libro",
    description:
      "Sencilla landing para la venta del nuevo libro de una buena escritora, Leticia Ortiz, y mejor aún amiga.",
    image: "/img/leticiaortizescritora.png",
  },
  {
    url: "https://raquelyandrei.com/",
    name: "raquelyandrei.com",
    subtitle: "2019 - Web-cuenta atrás",
    description: "Web cuenta-atrás para la boda de unos familiares.",
    image: "/img/raquelyandrei.png",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-2xl mx-auto py-20">
        <SectionTitle title="Mis trabajos públicos" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-sm lg:max-w-6xl mx-auto">
          {publicsWorks.map((work, index) => (
            <Card key={index} data={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
