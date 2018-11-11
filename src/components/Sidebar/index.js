import React from 'react';
import Link from 'gatsby-link';
import mePhoto from '../../../static/files/me.jpeg';
import Menu from '../Menu';
import { graphql } from 'gatsby'


class Sidebar extends React.Component {
    render() {
        const { subtitle, technologies, blogMenu, author } = this.props.siteMetadata;
        const { isPost } = this.props;
        
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

        let blogPost = null;
        
        if (isPost) {
            blogPost = <div className="blogpost">Contenido que solo se mostrará aquí si se está visualizando un post.</div>
        }

        return(
            <div id="sidebar" className="h-100">
                {sidebarHeader}
                
                <div className="sidebar-content text-center letter-spacing-2">
                    <div className="sidebar-menu mb-4">
                        <Menu items={blogMenu} classes='text-uppercase pb-2' />
                    </div>

                    {blogPost}

                    <div className="sidebar-techs">Hecho con:
                        <Menu items={technologies} onlyIcons={true} rel='noopener noreferrer' />
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
