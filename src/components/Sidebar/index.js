import React from 'react';
import { Collapse } from 'reactstrap'
import Link from 'gatsby-link';
import mePhoto from '../../../static/files/me.jpeg';
import Menu from '../Menu';
import {graphql} from 'gatsby'

// Icons
import {IconContext} from 'react-icons';
import {FaHeart} from 'react-icons/fa';
import {MdMenu} from 'react-icons/md';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this
            .toggleNavbar
            .bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {subtitle, technologies, blogMenu, author} = this.props.siteMetadata;

        const sidebarHeader = (
            <div
                className="sidebar-header d-flex align-items-center justify-content-between">
                <Link to='/' className='no-underline header-link d-flex align-items-center'>
                    <img
                        src={mePhoto}
                        alt={author.name}
                        className='profile-photo rounded-circle'
                        width='90'
                        height='90'/>
                    <div className="title px-2">
                        <h2 className="main-title text-primary mb-1">{author.name}</h2>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </Link>
                
                <div className="toggle-menu" onClick={this.toggleNavbar}>
                    <IconContext.Provider
                        value={{
                        className: 'icon'
                    }}>
                        <MdMenu/>
                    </IconContext.Provider>
                </div>
            </div>
        );

        return (
            <div id="sidebar" className="h-100 w-100">
                <div className="sticky-top p-md-4">
                    {sidebarHeader}

                    <Collapse className="sidebar-content text-center letter-spacing-2" isOpen={!this.state.collapsed}>
                        <div className="sidebar-menu mb-4">
                            <Menu items={blogMenu} classes='text-uppercase pb-2'/>
                        </div>

                        <div className="sidebar-techs">
                            <div className="mb-1">Hecho con:</div>
                            <IconContext.Provider
                                value={{
                                className: 'icon love',
                                color: '#cb3837'
                            }}>
                                <FaHeart/>
                            </IconContext.Provider>
                            <Menu
                                menuClass="d-inline-block ml-3"
                                items={technologies}
                                onlyIcons={true}
                                rel='noopener noreferrer'/>
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default Sidebar;

// GraphQL query component
export const componentQuery = graphql `
  fragment sidebarFragment on siteMetadata_2 {
    title
    subtitle
    technologies {
        label
        icon
        link
    }
    blogMenu {
      label
      link
    }
    author {
      name
      email
      github
    }
  }
`;
