import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          title 
          description
          sitUrl
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const url = new URL(props.path || '/', defaults.sitUrl);


  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={url}/>



      <meta property="og:url" content={url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
    </Helmet>
  );
}
