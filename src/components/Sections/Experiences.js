import React from "react";
import { SectionTitle } from "../SectionUtilities";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <section id="experiences" className="section">
      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-2xl mx-auto py-10 md:py-20">
        <SectionTitle title="Experiencia profesional" />

        <div className="mt-18 grid grid-cols lg:grid-cols-2 gap-x-8 gap-y-2">
          <ExperienceItem
            company="Magister"
            url="https://web.magister.com/"
            position="Web developer"
            fromDate="septiembre de 2014"
            toDate="octubre de 2014"
            color="bg-magister-color"
            num="1"
          >
            <p>
              Un año después de finalizar mis estudios decidí irme de mi ciudad
              y encontré mi primer empleo en Madrid. Realicé alguna modificación
              para su web con Wordpress y PHP y, tras finalizar el mes de
              prueba, me fui. No era ni lo que buscaba ni lo que necesitaba para
              crecer profesionalmente.
            </p>
          </ExperienceItem>

          <ExperienceItem
            company="CBI (ahora Sygris)"
            url="https://sygris.com/"
            position="Web developer"
            fromDate="octubre de 2014"
            toDate="octubre de 2017"
            color="bg-cbi-color"
            num="2"
          >
            <p>
              Colaboré en todo el proceso de preparación y lanzamiento de "El
              Mercado de María" (ya cerrada), tienda online de muebles y
              decoración sobre Magento 1.9. Desarrollé varios scripts PHP para
              automatizar procesos de actualización de stocks y productos y
              realicé proyectos (desde la planificación hasta la publicación y
              soporte al cliente final) para grandes clientes corporativos como
              Mapfre, Repsol y Telefónica. Maquetación de sitios completos y
              landings y mails para Sage One.
            </p>
          </ExperienceItem>

          <ExperienceItem
            company="Wetaca"
            url="https://wetaca.com/"
            position="Web developer"
            fromDate="noviembre de 2017"
            toDate="abril de 2018"
            color="bg-wetaca-color"
            num="3"
          >
            <p>
              Para poder continuar creciendo profesionalmente, en 2017 me
              incorporo al equipo de Wetaca, una startup de tuppers de comida
              casera a domicilio. Mi misión era la mejora y mantenimiento de la
              web actual a la vez que preparaba la migración de Prestashop 1.6 a
              Prestashop 1.7. Maquetación de landings semanales.
            </p>
          </ExperienceItem>

          <ExperienceItem
            company="Redegal"
            url="https://www.redegal.com/es/"
            position="Senior Prestashop developer"
            fromDate="abril de 2018"
            toDate="junio de 2019"
            color="bg-redegal-color"
            num="4"
          >
            <p>
              En 2018 no pude resistirme a esta oferta, ya que era 100% remoto y
              podría volver a mi ciudad. Mejora, mantenimiento y resolución de
              numerosas incidencias de los proyectos existentes (Prestashop y
              WordPress) con trato directo con el cliente. Desarrollo de módulos
              personalizados desde cero, incluído uno para conectar Prestashop
              con{" "}
              <a
                href="https://dynamics.microsoft.com/es-es/"
                title="Microsoft Dynamics 365"
                className="underline text-primary hover:text-primary-600"
              >
                Microsoft Dynamics 365
              </a>{" "}
              (anterior Microsoft Dynamics Navision).
            </p>
          </ExperienceItem>

          <ExperienceItem
            company="Bebé"
            position="Junior mommy"
            fromDate="junio de 2019"
            toDate="enero de 2021"
            color="bg-baby-color"
            num="5"
          >
            <p>
              Gestación, llegada y cuidados del nuevo miembro de la familia:
              Lucía. Cuando me enteré que estaba esperando a mi pequeña
              terremoto estaba desempleada desde hacía días. No me pareció ético
              comenzar a trabajar en una nueva empresa y a los poquitos meses
              solicitar la baja por maternidad. Por tanto, decidí disfrutar de
              mi embarazo y, posteriormente, del primer año de vida de mi hija.
            </p>
          </ExperienceItem>

          <ExperienceItem
            company="Grupo Trevenque"
            position="Senior Prestashop developer"
            fromDate="marzo de 2021"
            toDate="agosto de 2023"
            color="bg-trevenque-color"
            num="6"
          >
            <p>
              ¡Vuelta al trabajo! Tras casi 2 años alejada del mundo de la
              programación, decido reincorporarme y seguir creciendo
              profesionalmente. Mi función en esta empresa es desarrollar
              tiendas online con PrestaShop 1.7 y mantener las ya existentes en
              PrestaShop 1.6. Desarrollo de nuevos módulos a medida para
              distintos clientes y funcionalidades, incluido uno para conectar
              con{" "}
              <a
                href="https://www.galdon.com/"
                title="ERP Galdón"
                className="underline text-primary hover:text-primary-600"
              >
                Galdón
              </a> y otro para conectar con{" "}
              <a
                  href="https://www.azetadistribuciones.es/par/index.php"
                  title="Azeta"
                  className="underline text-primary hover:text-primary-600"
              >
                Azeta
              </a>, una distribuidora de libros procesando ficheros ONIX para adaptarlos a PrestaShop.
              <br/>
              He comenzado a montar proyectos con PrestaShop 8, así como proyectos en Laravel
               (con Docker en algunos casos).
              Una de las cosas que más me ha gustado es que he <i>mentorizado</i> a algunos compañeros <i>juniors</i>
              que entraron poco después de mí en la empresa y se aprende muchísimo, en ambos sentidos.
            </p>
          </ExperienceItem>

          <ExperienceItem
              company="Webimpacto"
              position="Senior Developer"
              fromDate="agosto de 2023"
              toDate="actualidad"
              color="bg-webimpacto-color"
              num="7"
          >
            <p>
              Tras algo más de 2 años en mi empresa anterior, decido cambiar de aires y unirme a Webimpacto, empresa top en el sector a la que le seguía la pista desde hacía años. El cambio fue motivado por la necesidad de formar parte de un equipo mayor donde tener algún referente con el que poder seguir creciendo profesionalmente.
            </p>
          </ExperienceItem>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
