import React from 'react';

const Link = ({children, href}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mdc link">
        {children}
    </a>
);

export default Link;