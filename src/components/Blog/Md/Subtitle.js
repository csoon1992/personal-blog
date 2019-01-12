import React from 'react';
import slugify from 'slugify';

const Subtitle = ({children}) => (
    <h2 className="mdc subtitle mt-4 mb-2" name={slugify(children[0], {lower: true})}>
        {children}
    </h2>
);

export default Subtitle;