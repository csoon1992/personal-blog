import React from 'react';

const Blockquote = ({children}) => (
    <blockquote className="mdc blockquote m-4 p-2 font-italic">
        {children}
    </blockquote>
);

export default Blockquote;