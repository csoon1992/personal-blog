
const _ = require('lodash');
const path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {

  const blogPostTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  return graphql(`
    {
      allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
              image
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    // Create post detail pages
    posts.forEach(({ node }) => {
      // Create post detail pages
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      })
    })

    // Tags pages
    let tags = [];
    // Iterate through each post, putting all found tags into `tags` array
    posts.forEach(edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
    });
    
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`;

        createPage({
          path: tagPath,
          component: tagTemplate,
          context: {
            tag
          }
        });
    });
  })
}
