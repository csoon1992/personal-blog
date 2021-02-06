import React from 'react'
import { SectionTitle } from '../SectionUtilities'
import ExperienceItem from './ExperienceItem'
import ExperienceBar from './ExperienceBar'

function ExperienceTimeline() {
    const experienceYears = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    return (
        <div id="#experiences" className="section">
            <SectionTitle title="Experiencia profesional" />

            <div className="container mx-auto grid grid-cols-8 gap-x-4 gap-y-0">
                <div className="experience border-2 border-magister-color col-start-1 col-end-4">
                    <ExperienceItem
                        company="Magister"
                        url="https://web.magister.com/"
                        position="Web developer"
                        fromDate="septiembre de 2014"
                        toDate="octubre de 2014"
                    >
                        <p className="m-0">Modificaciones en la web corporativa con WordPress y PHP.</p>
                        <p>Tras finalizar el mes de prueba me fui. No era ni lo que buscaba ni lo que necesitaba para crecer profesionalmente.</p>
                    </ExperienceItem>
                </div>

                <div className="experience border-2 border-wetaca-color col-start-4 col-end-7">
                    <ExperienceItem
                        company="Wetaca"
                        url="https://wetaca.com/"
                        position="Web developer"
                        fromDate="noviembre de 2017"
                        toDate="abril de 2018"
                    >
                        <p>Incorporación al equipo de Wetaca, una startup de tuppers de comida casera a domicilio. Mejora y mantenimiento de la web actual a la vez que preparaba la migración de Prestashop 1.6 a Prestashop 1.7. Maquetación de landings semanales.</p>
                    </ExperienceItem>
                </div>

                <div className="experience border-2 border-baby-color col-start-7 col-end-9">
                    <ExperienceItem
                        company="Bebé"
                        position="Junior mommy"
                        fromDate="junio de 2019"
                        toDate="enero de 2021"
                    >
                        <p>Gestación, llegada y cuidados del nuevo miembro de la familia: Lucía.</p>
                    </ExperienceItem>
                    
                </div>

                <div className="top-fill-wrapper col-span-8">
                    <div className="grid grid-cols-8">
                        <div className="magister-bar">
                            <div className="grid grid-cols-12">
                                <ExperienceBar itemClass="bg-magister-color col-start-10 col-end-11" />
                            </div>
                        </div>

                        <div className="wetaca-bar col-start-4 col-end-6">
                            <div className="grid grid-cols-24">
                                <ExperienceBar itemClass="bg-wetaca-color col-start-11 col-end-17" />
                            </div>
                        </div>

                        <div className="baby-bar col-start-6 col-end-9">
                            <div className="grid grid-cols-36">
                                <ExperienceBar itemClass="bg-baby-color col-start-6 col-end-26" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-8">
                    <div className="grid grid-cols-8 gap-1">
                        {experienceYears.map((year) => 
                            <div className="bg-black text-white text-center text-lg">{year}</div>
                        )}
                    </div>
                </div>
                
                <div className="bottom-fill-wrapper col-span-8">
                    <div className="grid grid-cols-2">
                        <div className="cbi-bar">
                            <div className="grid grid-cols-4">
                                <div className="grid grid-cols-48 col-span-4">
                                    <ExperienceBar itemClass="bg-cbi-color col-start-11 col-end-47" />
                                </div>
                            </div>
                        </div>

                        <div className="redegal-bar">
                            <div className="grid grid-cols-4">
                                <div className="grid grid-cols-24 col-span-2">
                                    <ExperienceBar itemClass="bg-redegal-color col-start-5 col-end-19" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="experience border-2 border-cbi-color col-start-1 col-end-4">
                    <ExperienceItem
                        company="CBI"
                        url="https://cbiconsulting.es/"
                        position="Web developer"
                        fromDate="octubre de 2014"
                        toDate="octubre de 2017"
                    >
                        <p>Colaboración en el desarrollo de "El Mercado de María", tienda online de muebles y decoración realizada sobre la plataforma Magento 1.9. Desarrollo de varios scripts PHP para automatizar procesos de actualización de stocks y productos. Desarrollo de proyectos desde cero para grandes clientes corporativos como Mapfre, Repsol y Telefónica.</p>
                    </ExperienceItem>
                </div>

                <div className="experience border-2 border-redegal-color col-start-4 col-end-7">
                    <ExperienceItem
                        company="Redegal"
                        url="https://www.redegal.com/es/"
                        position="Senior Prestashop developer"
                        fromDate="abril de 2018"
                        toDate="junio de 2019"
                    >
                        <p>Mejora y mantenimiento de los proyectos existentes. Desarrollo de módulos personalizados desde cero, incluído uno para conectar Prestashop con un ERP (Navision). Resolución de numerosas incidencias con trato directo con el cliente tanto en proyectos Prestashop como en proyectos WordPress.</p>
                    </ExperienceItem>
                </div>

            </div>
        </div>
    )
}

export default ExperienceTimeline;