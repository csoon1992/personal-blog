import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby'

function MenuLink({ to, title, active, anchor, className = "" }) {
    let linkClass = "menu-item uppercase font-black " + className;

    if (active == "true") {
        linkClass+=" underline text-primary"
    }

    let link = <Link to={to} className={linkClass}>{title}</Link>

    if (anchor) {
        link = <AnchorLink to={to} className={`string ${linkClass}`}>
            {title}
        </AnchorLink>
    }
    
    return link;
}

export default MenuLink;