import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div>

      <div className="uppe-blog">
      <div className="uppeDetailsBlog">
      <h2 className="section-heroline">About</h2>
      </div>
      </div>

      <div className="content">
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
          <div className="wrapper-blog-post">
          <h1>I'm William. A product designer from Sweden.</h1>
          <p>Designer at Plentific, alumni of the Interactive Art Director programme at Hyper Island in Stockholm, Sweden (where I graduated "With Distinction"). Bachelor Degree in PR & Communication from University of Gothenburg.</p>
          <p>Hip hop addicted, rookie pasta-goes-with-anything chef and amateur football player. I tell myself I'm decent at football, but deep down I know I'm just watching a lot, perhaps not playing as well as much as I'm watching it.</p>
          <p>Born 1991 and raised in the mud from Göta River in Gothenburg. Calm and enamored. I try to consistently evolve my hobbies & passions, and the greatest one is design.</p>
          <p>Today that passion has given me a position as Product designer at Tink, a fintech company in Stockholm. Previously I worked as Lead Designer for Plentific, a search market for people to find a Professional for their next home improvement project.</p>
          <h1>Get in touch</h1>
          <form name="contact" netlify>
          <p>
          <label>NAME <input type="text" name="name" /></label>
          </p>
          <p>
          <label>EMAIL <input type="email" name="email" /></label>
          </p>
          <p>
          <button type="submit">Send</button>
          </p>
          </form>
          </div>

      </div>
      </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
