import React, {useEffect, useRef, useState} from "react";
import { GradientPrimaryRoundedLink } from "../SectionUtilities";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import "@fontsource/montserrat/300.css";
import Typed from "typed.js";

function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  const typedInstance = React.useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ['Soy <span class="text-primary">Cristina</span> Soler'],
      typeSpeed: 100,
      loop: false, // Evita el bucle si quieres que se escriba una sola vez
      onComplete: () => {
        setShowCursor(false);
      },
      showCursor: true, // Mostrar el cursor mientras se escribe
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (!showCursor) {
      const cursorElement = el.current?.nextSibling;
      if (cursorElement && cursorElement.className.includes('typed-cursor')) {
        cursorElement.style.display = 'none';
      }
    }
  }, [showCursor]);

  return (
    <section id="hero" className="section w-full md:h-screen flex flex-col">
      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-2xl flex-1 md:grid grid-rows-2 lg:grid-rows-none lg:grid-cols-5 gap-20 justify-end items-center mx-auto  py-20 lg:py-0 lg:pb-8">
        <div className="lg:col-span-2 h-full hidden md:block">
          <div className="p-8 w-full h-full relative">
            <Image
              src="/img/intro-me.png"
              alt="Cristina Soler"
              fill={true}
              style={{objectFit: "contain", minHeight: "0"}}
              className="profile-photo md:absolute bottom-0 z-0 h-full"
            />
          </div>
        </div>

        <div className="content lg:col-span-3 lg:col-start-3 lg:col-end-5">
          <div className="links hidden md:block">
            <SocialLinks />
          </div>

          <div className="mt-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-5xl font-medium my-4">
              <span ref={el} />
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
