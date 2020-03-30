import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import JoinUsTemplate from '../components/JoinUsTemplate'
import Layout from '../components/Layout'

const JoinUsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const { markdownRemark: post } = data

    return (
        <Layout>
            <JoinUsTemplate
                title={frontmatter.title}
                meta_title={frontmatter.meta_title}
                meta_description={frontmatter.meta_description}
                content={post.html}
            />
        </Layout>

    )
}

// PricingPage.propTypes = {
//     data: PropTypes.shape({
//         markdownRemark: PropTypes.shape({
//             frontmatter: PropTypes.object,
//         }),
//     }),
// }

export default JoinUsPage

export const joinUsPageQuery = graphql`
  query JoinUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
