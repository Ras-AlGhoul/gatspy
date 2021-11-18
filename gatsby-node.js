const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }

    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  
  const posts = result.data.allContentfulBlogPost.nodes
  
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostSlug = index === 0 ? null : posts[index - 1].slug
        const nextPostSlug =
          index === posts.length - 1 ? null : posts[index + 1].slug
  
        createPage({
          path: `/blog/${post.slug}/`,
          component: blogPost,
          context: {
            slug: post.slug,
            previousPostSlug,
            nextPostSlug,
          },
        })
      })
    }
  
  const productPost = path.resolve('./src/templates/products-post.js')

  const productsResult = await graphql(
    `
      {
        allContentfulProducts {
          nodes {
            title
            slug
          }
        }
      }

    `
  )
  
  if (productsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful products`,
      productsResult.errors
    )
    return
  }

  const products = productsResult.data.allContentfulProducts.nodes

  if (products.length > 0) {
    products.forEach((product, index) => {
      const previousProductSlug = index === 0 ? null : products[index - 1].slug
      const nextProductSlug = index === products.length - 1 ? null : products[index + 1].slug

      createPage({
        path: `/products/${product.slug}/`,
        component: productPost,
        context: {
          slug: product.slug,
          previousProductSlug,
          nextProductSlug,
        },
      })
    })
  }
}
