import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-preview.module.css'

const ProductPreview = ({ products }) => {
  if (!products) return null
  if (!Array.isArray(products)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {products.map((product) => {
          return (
            <li key={product.slug}>
              <h1>{product.title}</h1>
              <Link to={`/products/${product.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={product.productImg.gatsbyImageData} />
                <h3>{product.price} $</h3>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description.childMarkdownRemark.html,
                }}
              />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ProductPreview;