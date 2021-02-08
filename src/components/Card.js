import React from 'react'
import { Link } from 'gatsby'

function Card({data}) {
    return (
        <div className="card pb-6 flex flex-col border border-solid border-gray-200 rounded-xl shadow-xl">
            <div>
                <img
                src={data.image}
                alt="Boda Raquel & Andrei"
                className="w-100 rounded-t-xl" />
            </div>
            
            <div className="p-6 flex flex-1 flex-col">
                <div className="flex flex-1 flex-col">
                    <div className="font-bold text-lg text-primary">{data.name}</div>
                    <div className="pb-2 text-gray-400">{data.subtitle}</div>
                    <div className="pb-2">{data.description}</div>
                    <div className="project-techs">
                    
                    </div>
                </div>

                <div className="mt-8 text-right">
                    <Link to={data.url} className="py-4 px-8 rounded-full border border-solid border-primary text-primary bg-gradient-to-r hover:from-green-400 hover:to-primary hover:text-white hover:border-none">Visitar</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card;