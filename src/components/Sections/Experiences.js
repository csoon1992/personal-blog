import React from 'react'
import { SectionTitle, SectionSubtitle } from '../SectionUtilities'
import ExperienceItem from '../Sections/ExperienceItem'

function Experiences() {
    return (
        <div id="experiences" className="section">
            <SectionTitle title="Experiencia profesional" />

            <div className="container mx-auto grid grid-cols-2 gap-12">
                <div>
                    <ExperienceItem
                        company="Redegal"
                        url="https://www.redegal.com/es/"
                        position="Senior Prestashop developer"
                        fromDate="abril de 2018"
                        toDate="junio de 2019"
                    >
                        <p>En 2018 no pude resistirme a esta oferta, ya que era 100% remoto y podría volver a mi ciudad de origen con mi familia. Entré al equipo de Prestashop. Mejora y mantenimiento de los proyectos existentes. Desarrollo de módulos personalizados desde cero, incluído uno para conectar Prestashop con un ERP (Navision). Resolución de numerosas incidencias con trato directo con el cliente tanto en proyectos Prestashop como en proyectos Wordpress.</p>
                    </ExperienceItem>

                    <ExperienceItem
                        company="Wetaca"
                        url="https://wetaca.com/"
                        position="Web developer"
                        fromDate="noviembre de 2017"
                        toDate="abril de 2018"
                    >
                        <p>Para poder continuar creciendo profesionalmente, en 2017 me incorporo al equipo de Wetaca, una startup de tuppers de comida casera a domicilio. Mi misión era la mejora y mantenimiento de la web actual a la vez que preparaba la migración de Prestashop 1.6 a Prestashop 1.7. Maquetación de landings semanales.</p>
                    </ExperienceItem>
                </div>

                <div>
                    <ExperienceItem
                        company="CBI"
                        url="https://cbiconsulting.es/"
                        position="Web developer"
                        fromDate="octubre de 2014"
                        toDate="octubre de 2017"
                    >
                        <p>Colaboré en todo el proceso de preparación y lanzamiento de "El Mercado de María", tienda online de muebles y decoración, realizada sobre la plataforma Magento 1.9. Desarrollo de varios scripts PHP para automatizar procesos de actualización de stocks y productos. Desarrollo de proyectos (desde la planificación hasta la publicación y soporte al cliente final) para grandes clientes corporativos como Mapfre, Repsol y Telefónica. Maquetación de sitios completos y landings y mails para Sage One.</p>
                    </ExperienceItem>

                    <ExperienceItem
                        company="Magister"
                        url="https://web.magister.com/"
                        position="Web developer"
                        fromDate="septiembre de 2014"
                        toDate="octubre de 2014"
                    >
                        <p>Un año después de finalizar mis estudios decidí irme de mi ciudad y encontré mi primer empleo en Madrid. Realicé alguna modificación para su web con Wordpress y PHP y, tras finalizar el mes de prueba, me fui. No era ni lo que buscaba ni lo que necesitaba para crecer profesionalmente.</p>
                    </ExperienceItem>
                </div>
            </div>
        </div>
    )
}

export default Experiences;