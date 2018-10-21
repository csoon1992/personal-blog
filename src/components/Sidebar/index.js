import React from 'react';
import Link from 'gatsby-link';
import profilePic from '../../../static/files/me.jpeg';


class Sidebar extends React.Component {
    render() {
        return(
            <div id="sidebar">
                Sidebar here
            </div>
        );
    }
}

export default Sidebar;

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
      path
    }
    author {
      name
      email
      github
    }
  }
`;
