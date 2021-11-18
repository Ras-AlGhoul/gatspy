import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ProductPreview from '../components/product-preview';

class ProductIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProducts.nodes')
    console.log('asdasdasd',products)
    return (
      <Layout location={this.props.location}>
        <ProductPreview products={products} />
      </Layout>
    )
  }
}

export default ProductIndex

export const pageQuery = graphql`
  query ProductIndexQuery {
    allContentfulProducts {
      nodes {
        title
        slug
        productImg { 
            gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        price
      }
    }
  }
`