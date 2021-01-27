module.exports = {
  pathPrefix: `/files`,
  siteMetadata: {
    title: "Cristina Soler",
    subtitle: "Desarrolladora web",
    technologies: [
      {
        label: "Gatsby",
        icon: "techs/gatsby.svg",
        link: "https://www.gatsbyjs.org",
      },
      {
        label: "Netlify",
        icon: "techs/netlify.svg",
        link: "https://www.netlify.com/",
      },
      {
        label: "React.js",
        icon: "techs/reactjs.svg",
        link: "https://reactjs.org/",
      },
      {
        label: "GraphQL",
        icon: "techs/graphql.svg",
        link: "https://graphql.org/",
      },
    ],
    disqus: "cristinasoler", // put your disqus ID here
    author: {
      name: "Cristina Soler",
      email: "csoon1992@gmail.com",
      github: "https://github.com/csoon1992",
    },
    blogMenu: [
      {
        label: "Artículos",
        link: "/blog/",
      },
      {
        label: "Sobre mí",
        link: "/about/",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135936584-1",
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-component",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400`],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cristina Soler",
        short_name: "Cristina Soler",
        start_url: "/",
        background_color: "#EFFFE9",
        theme_color: "#2EC4B6",
        icon: "static/files/me.jpeg",
      },
    },
  ],
};
