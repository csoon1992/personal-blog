import React from 'react'
import {Link} from 'gatsby'

function ExperienceItem({ children, company, url, position, fromDate, toDate }) {
    let itemTitle = url ? <Link to={url}>{company}</Link> :  company 
    
    return (
        <div className="experience py-4 px-8">
            <h3 className="text-primary text-lg font-bold">{itemTitle}</h3>
            <p className="text-gray-400 text-sm">{position} - Desde {fromDate} hasta {toDate}</p>
            <p className="resume">{children}</p>
        </div>
    )
}

export default ExperienceItem;