import React from 'react';
import Link from 'gatsby-link';
import mePhoto from '../../../static/files/me.jpeg';
import Menu from '../Menu';
import { graphql } from 'gatsby'

// Icons
import { IconContext } from 'react-icons';
import { FaHeart } from 'react-icons/fa';

class Sidebar extends React.Component {
    render() {
        const { subtitle, technologies, blogMenu, author } = this.props.siteMetadata;
        
        const sidebarHeader = (
            <div className="sidebar-header">
                <Link to='/' className='no-underline header-link d-flex align-items-center'>
                    <img 
                        src={mePhoto}
                        alt={author.name}
                        className='profile-photo rounded-circle'
                        width='90'
                        height='90'
                    />
                    <div className="title px-2">
                        <h1 className="main-title text-primary mb-1">{author.name}</h1>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </Link>
            </div>
        );

        return(
            <div id="sidebar" className="h-100 w-100">
                <div className="sticky-top p-4">
                    {sidebarHeader}
                    
                    <div className="sidebar-content text-center letter-spacing-2">
                        <div className="sidebar-menu mb-4">
                            <Menu items={blogMenu} classes='text-uppercase pb-2' />
                        </div>

                        <div className="sidebar-techs">
                            <div className="mb-1">Hecho con:</div>
                            <IconContext.Provider value={{ className: 'icon love', color: '#cb3837'}}>
                                <FaHeart />
                            </IconContext.Provider>
                            <Menu menuClass="d-inline-block ml-3" items={technologies} onlyIcons={true} rel='noopener noreferrer' />
                        </div>
                    </div>
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
