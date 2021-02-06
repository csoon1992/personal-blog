import React from 'react'

function ExperienceBar({itemClass}) {
    return (
        <div className={`filled h-8 ${itemClass ? itemClass : ""}`}>&nbsp;</div>
    )
}

export default ExperienceBar