import React from 'react'
import { SectionTitle, SectionSubtitle } from '../SectionUtilities'
import ExperienceItem from './ExperienceItem'
import ExperienceTimeline from './ExperienceTimeline'

function Experiences() {
    return (
        <div id="experiences" className="section">
            <div className="container mx-auto ">
                <SectionTitle title="Experiencia profesional" />

                <ExperienceTimeline />

                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-2">
                    <ExperienceItem
                        company="Magister"
                        url="https://web.magister.com/"
                        position="Web developer"
                        fromDate="septiembre de 2014"
                        toDate="octubre de 2014"
                        color="magister-color"
                        num="1"
                    >
                        <p>Un año después de finalizar mis estudios decidí irme de mi ciudad y encontré mi primer empleo en Madrid. Realicé alguna modificación para su web con Wordpress y PHP y, tras finalizar el mes de prueba, me fui. No era ni lo que buscaba ni lo que necesitaba para crecer profesionalmente.</p>
                    </ExperienceItem>
                
                    <ExperienceItem
                        company="CBI"
                        url="https://cbiconsulting.es/"
                        position="Web developer"
                        fromDate="octubre de 2014"
                        toDate="octubre de 2017"
                        color="cbi-color"
                        num="2"
                    >
                        <p>Colaboré en todo el proceso de preparación y lanzamiento de "El Mercado de María", tienda online de muebles y decoración sobre Magento 1.9. Desarrollé varios scripts PHP para automatizar procesos de actualización de stocks y productos y realicé proyectos (desde la planificación hasta la publicación y soporte al cliente final) para grandes clientes corporativos como Mapfre, Repsol y Telefónica. Maquetación de sitios completos y landings y mails para Sage One.</p>
                    </ExperienceItem>

                    <ExperienceItem
                        company="Wetaca"
                        url="https://wetaca.com/"
                        position="Web developer"
                        fromDate="noviembre de 2017"
                        toDate="abril de 2018"
                        color="wetaca-color"
                        num="3"
                    >
                        <p>Para poder continuar creciendo profesionalmente, en 2017 me incorporo al equipo de Wetaca, una startup de tuppers de comida casera a domicilio. Mi misión era la mejora y mantenimiento de la web actual a la vez que preparaba la migración de Prestashop 1.6 a Prestashop 1.7. Maquetación de landings semanales.</p>
                    </ExperienceItem>
                    
                    <ExperienceItem
                        company="Redegal"
                        url="https://www.redegal.com/es/"
                        position="Senior Prestashop developer"
                        fromDate="abril de 2018"
                        toDate="junio de 2019"
                        color="redegal-color"
                        num="4"
                    >
                        <p>En 2018 no pude resistirme a esta oferta, ya que era 100% remoto y podría volver a mi ciudad. Mejora, mantenimiento y resolución de numerosas incidencias con trato directo con el cliente de los proyectos existentes (Prestashop y WordPress). Desarrollo de módulos personalizados desde cero, incluído uno para conectar Prestashop con un ERP (Navision).</p>
                    </ExperienceItem>
                
                    <ExperienceItem
                        company="Bebé"
                        position="Junior mommy"
                        fromDate="junio de 2019"
                        toDate="enero de 2021"
                        color="baby-color"
                        num="5"
                    >
                        <p>Gestación, llegada y cuidados del nuevo miembro de la familia: Lucía. Cuando me enteré que estaba esperando a mi pequeña terremoto estaba desempleada desde hacía días. No me pareció ético comenzar a trabajar en una nueva empresa y a los poquitos meses solicitar la baja por maternidad. Por tanto, decidí disfrutar de mi embarazo y, posteriormente, del primer año de vida de mi hija.</p>
                    </ExperienceItem>
                    
                </div>
            </div>
        </div>
    )
}

export default Experiences;