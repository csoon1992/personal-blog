import React from "react";
import { GradientPrimaryRoundedLink } from "../SectionUtilities";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import "@fontsource/montserrat/300.css";
import Typist from "react-text-typist";

function Hero() {
  return (
    <section id="hero" className="section w-full md:h-screen flex flex-col">
      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-2xl flex-1 md:grid grid-cols-5 gap-20 justify-end items-center mx-auto pb-8 md:pb-0">
        <div className="col-span-2 h-full hidden md:block">
          <div className="p-8 w-full h-full relative">
            <Image
              src="/img/intro-me.png"
              alt="Cristina Soler"
              layout="fill"
              objectFit="contain"
              className="profile-photo md:absolute bottom-0 z-0 h-full"
              style={{ minHeight: "0" }}
            />
          </div>
        </div>

        <div className="content col-span-3 col-start-3 col-end-5">
          <div className="links hidden md:block">
            <SocialLinks />
          </div>

          <div className="mt-8 text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-medium my-4">
              <Typist
                sentences={["Soy "]}
                loop={false}
                hideCursorOnFinish={true}
                typingSpeed={100}
                cursorClassName={"text-primary"}
                pauseTime={0}
              />
              <Typist
                sentences={["Cristina "]}
                loop={false}
                hideCursorOnFinish={true}
                typingSpeed={100}
                startDelay={400}
                className={"text-primary"}
                cursorClassName={"text-primary"}
                pauseTime={0}
              />
              <Typist
                sentences={["Soler"]}
                loop={false}
                hideCursorOnFinish={true}
                typingSpeed={100}
                startDelay={1300}
                cursorClassName={"text-primary"}
                pauseTime={0}
              />
            </h2>
            <div className="text-lg md:text-2xl font-light">
              Programadora web especializada en el mundo del comercio
              electrónico con PrestaShop y con muchas inquietudes sobre el
              desarrollo a medida.
            </div>

            <div className="mt-8">
              <GradientPrimaryRoundedLink
                url={"/files/CV_Cristina.pdf"}
                download={true}
                keepInMobile={true}
              >
                Descargar CV
              </GradientPrimaryRoundedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
