module.exports = {
  siteMetadata: {
    title: `Department of Mathematics, IIT Hyderabad`,
    description: `The Department of Mathematics was one of the six departments that was founded along with the Institute in 2008`,
    author: `Anurag`,
  },
  assetPrefix: "assets",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/favicon`,
      },
    },
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        fileTypes: ["js", "map"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Department of Mathematics`,
        short_name: `Dmaths`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `standalone`,
        icon: `src/favicon/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            "src": "favicons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]        
      },
    },
    `gatsby-plugin-offline`,
  ],
}
