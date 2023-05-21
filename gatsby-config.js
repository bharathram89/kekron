/* eslint-disable prettier/prettier */
const config = require("./config/config");
const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        mainUrl: config.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? config.localUrl
                : `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-WTT0CDWLRC", // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Defaults to https://www.googletagmanager.com
                origin: "goloadout.com",
                // Delays processing pageview events on route update (in milliseconds)
                delayOnRouteUpdate: 0,
              },
            },
          },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },

        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.title,
                short_name: config.shortName,
                theme_color: config.themeColor,
                background_color: config.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: config.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
    ],
};
