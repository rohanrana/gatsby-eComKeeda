import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function SEO({ title, description, image, keywords }) {
  // console.log("Keywprds", keywords)
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultKeywords,
            defaultDescription,
            defaultImage,
            url,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${image ? image : url + defaultImage}`,
          keywords: keywords || defaultKeywords,
        }
        return (
          <div>
            <Helmet>
              <title>{seo.title}</title>
              <meta name="image" content={seo.image} />
              <meta name="description" content={seo.description} />
              <meta name="keywords" content={seo.keywords} />
              <meta name="robot" content="index,follow" />
              <html lang="en" />
            </Helmet>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        defaultKeywords: keywords
        url
      }
    }
  }
`
