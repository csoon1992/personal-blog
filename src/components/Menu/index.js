import React from 'react';
import Link from 'gatsby-link';

/**
 * Menu Component
 * --------------
 * If this.props.onlyIcons not exists, generate a menu using the properties link and label
 * If this.props.onlyIcons exists, generate a menu using the properties link, label and icon
 */
class Menu extends React.Component {
    render() {
        const rel = this.props.rel || '';

        const menu = (
            <ul className='menu list-unstyled'>
                {this.props.items.map((item, i) => { 
                    const internal = /^\/(?!\/)/.test(item.link);
                    console.log(item.link, internal)
                    let link = <Link to={item.link} title={item.label} rel={rel}>
                        <img src={`../../../static/files/${item.icon}`} alt={item.label}/>
                    </Link>

                    if (!internal) {
                        link = <a href={item.link} title={item.label} rel={rel}>
                            <img src={`../../../static/files/${item.icon}`} alt={item.label}/>
                        </a> 
                    }

                    if(!this.props.onlyIcons) {
                        link = <Link to={item.link} rel={rel}>{item.label}</Link> 
                    }

                    return (
                        <li className='item' key={i}>
                            {link}
                        </li>
                    )
                })}
            </ul>
        );

        return(
            <ul className='menu list-unstyled'>
                {menu}
            </ul>
        )
    }
}

export default Menu;