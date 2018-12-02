import React from 'react';
import Link from 'gatsby-link';
import { withPrefix } from 'gatsby'

/**
 * Menu Component
 * --------------
 * If this.props.onlyIcons not exists, generate a menu using the properties link and label
 * If this.props.onlyIcons exists, generate a menu using the properties link, label and icon
 */
class Menu extends React.Component {
    render() {
        const classes = this.props.classes || 'item';
        const menuClass = this.props.menuClass || '';

        const menu = (
            <ul className={ `menu list-unstyled ${menuClass}` }>
                {this.props.items.map((item, i) => { 
                    const internal = /^\/(?!\/)/.test(item.link);
                   
                    let link = <Link to={item.link} title={item.label} activeClassName="active">
                        <img src={withPrefix(`/files/${item.icon}`)} alt={item.label}/>
                    </Link>

                    if (!internal) {
                        link = <a href={item.link} title={item.label}>
                            <img src={withPrefix(`/files/${item.icon}`)} alt={item.label}/>
                        </a> 
                    }

                    if(!this.props.onlyIcons) {
                        link = <Link to={item.link}>{item.label}</Link> 
                    }

                    return (
                        <li className={classes} key={i}>
                            {link}
                        </li>
                    )
                })}
            </ul>
        );

        return(
            menu
        )
    }
}

export default Menu;