import React from "react";
import Layout from "../layouts/index";
import Image from "next/image";

// Icons
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const MePage = () => {
  return (
    <Layout isAbout>
      <section id="about" className="about-content mx-0">
        <h1 className="title d-block w-100 text-center mb-3 primary-color font-weight-bold">
          Sobre mí
        </h1>

        <div className="presentation mb-5">
          <h3 className="section-title mb-4">Presentación</h3>
          <p>
            Soy Técnico Superior en Desarrollo de Aplicaciones Web, con 4+ años
            de experiencia.
          </p>
          <p>
            Finalicé mis estudios en junio de 2013, momento desde el cual empecé
            a aprender de forma autodidacta PHP, mi actual lenguaje de
            programación favorito.
          </p>
          <p>
            Durante mi trayectoria profesional, me he ido especializando en el
            mundo del e-commerce. Empecé con Magento 1.9 y luego me inicié en
            Prestashop 1.6 hasta su versión 1.7 actual.
          </p>

          <p>
            Actualmente me encuentro buscando nuevas oportunidades profesionales
            en remoto.
          </p>

          <p>
            En mi tiempo libre, me dedico a aprender otras tecnologías
            totalmente ajenas al comercio electrónico, pues mi objetivo a
            medio-largo plazo es centrarme en proyectos a medida, especialmente
            con{" "}
            <a
              href="https://laravel.com/"
              title="Laravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Laravel
            </a>{" "}
            y{" "}
            <a
              href="https://reactjs.org/"
              title="React.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
            .
          </p>
        </div>

        <div className="professional-exp mb-5">
          <h3 className="section-title mb-4">Experiencia profesional</h3>

          <div className="company">
            <div className="company-header d-flex align-items-strech mb-3 mx-0">
              <div className="col-auto bg redegal d-flex align-items-center">
                <Image
                  className="company-logo mw-100"
                  layout="fill"
                  src="/img/redegal-logo.png"
                  alt="Logo Redegal"
                />
              </div>

              <div className="d-flex align-items-center">
                <div className="py-1">
                  <h4 className="company-title mb-0">
                    <span className="company-name">
                      <a
                        href="https://www.redegal.com/es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Redegal"
                        className="link-secondary-color"
                      >
                        Redegal
                        <IconContext.Provider
                          value={{
                            className:
                              "icon external-link-icon align-bottom pl-1",
                          }}
                        >
                          <FaExternalLinkAlt />
                        </IconContext.Provider>
                      </a>
                    </span>
                  </h4>
                  <p className="position small graya-color mb-0">
                    Programadora Senior Prestashop - Remoto 100% - Desde abril
                    de 2018 hasta junio de 2019
                  </p>

                  <div className="border-0">
                    <div className="px-0 pb-0">
                      <div className="tasks">
                        <p className="mb-0">Tareas:</p>
                        <ul className="mb-0">
                          <li>
                            Mantenimiento y mejora de funcionalidades y módulos
                            ya desarrollados e implementados antes de mi
                            incorporación.
                          </li>
                          <li>
                            Desarrollo de proyectos Prestashop 1.7.x nuevos
                            desde cero, implementando git flow y deployer php.
                          </li>
                          <li>
                            Desarrollo de módulos personalizados a medida para
                            cumplir las necesidades específicas de cada cliente.
                          </li>
                          <li>
                            Desarrollo y mejora de módulos de conexión con ERPs
                            (concretamente con Microsoft Dynamics Navs) tanto
                            para tiendas B2C como B2B.
                          </li>
                          <li>Soporte directo a clientes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator">
              <div className="col-auto h-100">
                <div className="w-200px">&nbsp;</div>
              </div>
              <div className="line h-100">
                <div className="fill h-100">&nbsp;</div>
              </div>
            </div>
          </div>

          <div className="company">
            <div className="company-header d-flex align-items-strech mb-3 mx-0">
              <div className="col-auto bg wetaca d-flex align-items-center">
                <Image
                  className="company-logo mw-100"
                  layout="fill"
                  src="/img/wetaca-logo.png"
                  alt="Logo Wetaca"
                />
              </div>

              <div className="d-flex align-items-center">
                <div className="py-1">
                  <h4 className="company-title mb-0">
                    <span className="company-name">
                      <a
                        href="https://wetaca.com/"
                        title="Wetaca"
                        className="link-secondary-color"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wetaca
                        <IconContext.Provider
                          value={{
                            className:
                              "icon external-link-icon align-bottom pl-1",
                          }}
                        >
                          <FaExternalLinkAlt />
                        </IconContext.Provider>
                      </a>
                    </span>
                  </h4>
                  <p className="position small graya-color mb-0">
                    Programadora Web - Remoto 2 días a la semana - Desde
                    noviembre de 2017 hasta abril de 2018
                  </p>

                  <div className="border-0">
                    <div className="px-0 pb-0">
                      <div className="tasks">
                        <p className="mb-0">Tareas:</p>
                        <ul className="mb-0">
                          <li>
                            Mantenimiento y mejora de funcionalidades y módulos
                            ya instalados antes de mi incorporación.
                          </li>
                          <li>
                            Análisis y migración de la tienda online de Wetaca
                            de Prestashop 1.6 a Prestashop 1.7.
                          </li>
                          <li>Creación de landings de menús semanales.</li>
                          <li>
                            Modificación del Core de Prestashop para lograr las
                            funcionalidades deseadas.
                          </li>
                          <li>
                            Creación de módulos para ofrecer nuevos servicios al
                            cliente.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator">
              <div className="col-auto h-100">
                <div className="w-200px">&nbsp;</div>
              </div>
              <div className="line h-100">
                <div className="fill h-100">&nbsp;</div>
              </div>
            </div>
          </div>

          <div className="company">
            <div className="company-header d-flex align-items-strech mb-3 mx-0">
              <div className="col-auto bg cbi d-flex align-items-center">
                <Image
                  className="company-logo mw-100"
                  layout="fill"
                  src="/img/cbi-logo.png"
                  alt="Logo CBI"
                />
              </div>

              <div className="d-flex align-items-center">
                <div className="py-1">
                  <h4 className="company-title mb-0">
                    <span className="company-name">
                      <a
                        href="https://cbiconsulting.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Cbi"
                        className="link-secondary-color"
                      >
                        Cambridge Business Initiatives
                        <IconContext.Provider
                          value={{
                            className:
                              "icon external-link-icon align-bottom pl-1",
                          }}
                        >
                          <FaExternalLinkAlt />
                        </IconContext.Provider>
                      </a>
                    </span>
                  </h4>
                  <p className="position small graya-color mb-0">
                    Programadora Web - Presencial - Desde octubre de 2014 hasta
                    octubre de 2017
                  </p>

                  <div className="border-0">
                    <div className="px-0 pb-0">
                      <div className="tasks">
                        <p className="mb-0">Tareas:</p>
                        <ul className="mb-0">
                          <li>
                            Desarrollo y mantenimiento de{" "}
                            <a
                              href="http://elmercadodemaria.com/"
                              title="El Mercado de María"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              El Mercado de María
                            </a>
                            , tienda online de muebles y decoración; desde la
                            programación y la maquetación de la tienda hasta la
                            gestión y atención al cliente.
                          </li>
                          <li>
                            Colaboración en el desarrollo de algunos módulos de
                            la plataforma{" "}
                            <a
                              href="https://cbiconsulting.es/sygris"
                              title="Sygris"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Sygris
                            </a>
                            .
                          </li>
                          <li>
                            Desarrollos completos a medida y encuestas online
                            para grandes clientes corporativos como Mapfre,
                            Repsol, Telefónica, etc.; incluyendo, además del
                            desarrollo y maquetación, la atención y el soporte a
                            estos clientes.
                          </li>
                          <li>
                            Gestión y desarrollo completo de varios proyectos
                            Wordpress.
                          </li>
                          <li>
                            Realización de diversas "landings" y mails HTML para
                            un cliente externo.
                          </li>
                          <li>
                            Creación de "crawlers" para optimizar y automatizar
                            la actualización de stocks según el stock de
                            nuestros proveedores, scripts de
                            importación/exportación de productos en el sistema,
                            etc.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="public-works mb-5">
          <h3 className="section-title mb-4">Mis trabajos públicos</h3>
          <div className="works card-deck align-items-stretch">
            <div className="col-12 col-md-5 col-lg-3 px-0 mt-1">
              <Image
                className="object-cover company-logo mw-100"
                layout="fill"
                src="/img/mispapissecasan.jpg"
                alt="mispapissecasan.com"
              />
              <div>
                <div className="font-weight-bold">mispapissecasan.com</div>
                <div className="pb-2">2017 - Web personal</div>
                <div tag="div">
                  <p className="project-desc">Web-cuenta atrás para mi boda.</p>
                  <p className="project-techs">
                    Realizada con:{" "}
                    <a
                      href="https://laravel.com/"
                      title="Laravel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Laravel
                    </a>
                    ,{" "}
                    <a
                      href="https://reactjs.org/"
                      title="React.js"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React.js
                    </a>{" "}
                    y{" "}
                    <a
                      href="https://firebase.google.com/"
                      title="Firebase"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Firebase
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://mispapissecasan.com/"
                  className="btn outline-btn outline-primary float-right py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-3 px-0 mt-1">
              <Image
                className="object-cover company-logo mw-100"
                layout="fill"
                src="/img/leticiaortizescritora.png"
                alt="leticiaortizescritora.com"
              />
              <div>
                <div className="font-weight-bold">
                  leticiaortizescritora.com
                </div>
                <div className="pb-2">
                  2019 - Landing para venta de nuevo libro
                </div>
                <div>
                  <p className="project-desc">
                    Sencilla <em>landing</em> para la venta del nuevo libro de
                    una buena escritora, Leticia Ortiz, y mejor aún amiga.
                  </p>
                  <p className="project-techs">
                    Realizada con:{" "}
                    <a
                      href="https://www.gatsbyjs.org/"
                      title="GatsbyJS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GatsbyJS
                    </a>
                    ,{" "}
                    <a
                      href="https://www.netlify.com/"
                      title="Netlify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netlify
                    </a>{" "}
                    y{" "}
                    <a
                      href="https://tailwindcss.com/"
                      title="Tailwind CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tailwind CSS
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://leticiaortizescritora.com/"
                  className="btn outline-btn outline-primary float-right py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-3 px-0 mt-1">
              <Image
                className="object-cover company-logo mw-100"
                layout="fill"
                src="/img/raquelyandrei.png"
                alt="raquelyandrei.com"
              />
              <div>
                <div className="font-weight-bold">raquelyandrei.com</div>
                <div className="pb-2">
                  2019 - Web-cuenta atrás para la boda de mis primos
                </div>
                <div>
                  <p className="project-techs">
                    Realizada con:{" "}
                    <a
                      href="https://www.gatsbyjs.org/"
                      title="GatsbyJS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GatsbyJS
                    </a>
                    ,{" "}
                    <a
                      href="https://www.netlify.com/"
                      title="Netlify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netlify
                    </a>{" "}
                    y{" "}
                    <a
                      href="https://tailwindcss.com/"
                      title="Tailwind CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tailwind CSS
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://raquelyandrei.com/"
                  className="btn outline-btn outline-primary float-right py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default MePage;
