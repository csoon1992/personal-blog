import React from "react";
import { SectionTitle } from "../SectionUtilities";
import Tabs from "../Tabs";

function About() {
  return (
    <div id="about" className="section">
      <div className="container mx-auto py-12">
        <SectionTitle title="Sobre mí" />

        <Tabs.Tabs>
          <Tabs.Button>Intro</Tabs.Button>
          <Tabs.Panel>
            <p>
              Técnico Superior en Desarrollo de Aplicaciones Web desde 2013.
            </p>

            <p>
              Mientras buscaba mi primer trabajo, “jugué” un poquito con varios
              frameworks PHP como fueron Cakephp, Symfony y FuelPHP.
            </p>

            <p>
              En 2014 conseguí mi primer trabajo como programadora y desde ese
              momento hasta junio de 2019 he estado trabajando continuamente,
              aunque en distintas empresas, todas ellas enfocadas al mundo
              e-commerce: comencé con{" "}
              <span className="font-bold">Magento 1.9</span> y después estuve
              con <span className="font-bold">Prestashop</span> (versiones 1.6 y
              1.7), plataforma e-commerce en la que mejor me desempeño
              actualmente.
            </p>

            <p>
              Soy capaz de llevar a cabo proyectos web de principio a fin yo
              sola, incluyendo, además de la programación (tanto front como
              back), la atención y el soporte al cliente final, tal y como he
              hecho con proyectos realizados a grandes clientes corporativos
              como <span className="italic">Mapfre</span>,{" "}
              <span className="italic">Telefónica</span> y{" "}
              <span className="italic">Repsol</span>, entre otros.
            </p>
          </Tabs.Panel>

          <Tabs.Button>Objetivos profesionales</Tabs.Button>
          <Tabs.Panel>
            <p>
              Aunque en todas las empresas en las que he estado me he dedicado a
              tiendas online la mayor parte del tiempo, no me gustaría quedarme
              “estancada” en el mundo e-commerce. Es por ello por lo que en mi
              tiempo libre intento conocer nuevas tecnologías y herramientas ya
              que mi objetivo es conseguir un perfil más enfocado al desarrollo
              a medida.
            </p>

            <p>
              Hasta ahora he trabajado tanto en tareas de front como de back,
              pero no lo suficiente como para considerarme fullstack aún. Como
              me dijo un antiguo profesor: no soy brillante en nada pero toco de
              todo, soy bastante organizada y tengo gran capacidad de
              aprendizaje.
            </p>

            <p>
              Aunque no descarto ninguna opción, me atraen más las empresas
              pequeñitas que están casi empezando y poder crecer junto a sus
              integrantes.
            </p>

            <p>
              Además, me encantaría dar con una empresa donde prime la
              transparencia, la igualdad y la humildad.
            </p>
          </Tabs.Panel>
        </Tabs.Tabs>
      </div>
    </div>
  );
}

export default About;
