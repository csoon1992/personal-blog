import React from 'react';
import Link from 'gatsby-link';
import mePhoto from '../../../static/files/me.jpeg';
import Menu from '../Menu';
import { graphql } from 'gatsby'

// Icons
import { IconContext } from 'react-icons';
import { FaGithubAlt } from 'react-icons/fa';


class Sidebar extends React.Component {
    render() {
        const { subtitle, technologies, blogMenu, author } = this.props.siteMetadata;
        
        const sidebarHeader = (
            <div className="sidebar-header mb-3">
                <Link to='/' className='no-underline header-link d-flex align-items-center'>
                    <img 
                        src={mePhoto}
                        alt={author.name}
                        className='profile-photo rounded-circle'
                        width='80'
                        height='80'
                    />
                    <div className="title px-2">
                        <h1 className="main-title text-primary mb-1">{author.name}</h1>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </Link>
            </div>
        );

        return(
            <div id="sidebar">
                {sidebarHeader}

                <div className="sidebar-networks mb-3 text-center">
                    <Link to={author.github} title='Github' className='network'>
                        <IconContext.Provider value={{ color: '#BBBBBB', size: '2rem', className: 'icon'}}>
                            <div>
                                <FaGithubAlt />
                            </div>
                        </IconContext.Provider>
                    </Link>
                </div>
                
                <div className="sidebar-menu mb-3">
                    <Menu items={blogMenu} />
                </div>

                <div className="sidebar-techs mb-3">Hecho con:
                    <Menu items={technologies} onlyIcons={true} rel='noopener noreferrer' />
                </div>
            </div>
        );
    }
}

export default Sidebar;

// GraphQL query component
export const conponentQuery = graphql`
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
