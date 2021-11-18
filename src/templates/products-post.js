import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './blog-post.module.css'

class productPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProducts')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    console.log(post.price, post);
    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={`http:${post.productImg.resize.src}`}
        />
        <Hero
          image={post.productImg?.gatsbyImageData}
          title={post.title}
          content={post.description?.childMarkdownRemark?.excerpt}
        />
        <div className={styles.container}>
            <h3>{post.price} $</h3>
          <span className={styles.meta}>
            {post.body?.childMarkdownRemark?.timeToRead}
          </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/products/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/products/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default productPostTemplate

export const pageQuery = graphql`
  query productsPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulProducts(slug: { eq: $slug }) {
      slug
      title
      price
     productImg {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulProducts(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulProducts(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`