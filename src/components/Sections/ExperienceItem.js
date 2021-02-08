import React from 'react'
import {Link} from 'gatsby'

function ExperienceItem({ children, company, url, position, fromDate, toDate, color, num }) {
    let itemTitle = url ? <Link to={url}>{company}</Link> :  company 
    
    return (
        <div className="experience flex">
            <div className={`count w-12 h-12 text-white font-bold text-center flex flex-row items-center justify-center transform rotate-45 bg-${color ? color : "primary"}`}>
                <div className="num transform -rotate-45 text-3xl">{num}</div>
            </div>
            <div className="py-4 px-8 flex-1">
                <h3 className="text-primary text-lg font-bold">{itemTitle}</h3>
                <p className="text-gray-400 text-sm">{position} - Desde {fromDate} hasta {toDate}</p>
                <p className="resume mb-0">{children}</p>
            </div>
        </div>
    )
}

export default ExperienceItem;