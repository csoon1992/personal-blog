import React from "react";
import { GradientPrimaryRoundedLink } from "../SectionUtilities";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

function Hero() {
  return (
    <div id="hero" className="section w-full h-screen flex flex-col">
      <div className="container flex-1 grid grid-cols-5 gap-20 justify-end items-center mx-auto">
        <div className="col-span-2 h-full">
          <div className="p-8 w-full h-full relative">
            <Image
              src="/img/intro-me.png"
              alt="Cristina Soler"
              layout="fill"
              objectFit="contain"
              className="profile-photo absolute bottom-0 z-0 h-full"
              style={{ minHeight: "0" }}
            />
            <style jsx>{`
              .profile-photo {
                height: 100%;
              }
            `}</style>
          </div>
        </div>

        <div className="content col-span-3 col-start-3 col-end-5">
          <div className="links">
            <SocialLinks />
          </div>

          <div>
            <h2 className="text-5xl font-bold my-4">
              Soy <span className="text-primary">Cristina</span> Soler
            </h2>
            <div className="text-2xl">
              Programadora web especializada en el mundo del comercio
              electrónico con muchas inquietudes sobre el desarrollo a medida.
            </div>

            <div className="mt-8">
              <GradientPrimaryRoundedLink
                url={"/files/CV_Cristina.pdf"}
                download={true}
              >
                Descargar CV
              </GradientPrimaryRoundedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
