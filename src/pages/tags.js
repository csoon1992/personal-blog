import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../layouts/blog'

const AllTagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <div id="tags-content">
            <Helmet title={title} />
            <h1 className="mb-4">Todas las etiquetas</h1>

            <div className="tag-list">
                {group.map(tag => (
                    <div className="tag mb-3">
                        <div className="tag-content py-2 px-4" key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="d-block">
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    </Layout>
)

AllTagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default AllTagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`