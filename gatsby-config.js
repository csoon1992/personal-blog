module.exports = {
  pathPrefix: `/files`,
  siteMetadata: {
    title: "Cristina Soler",
    subtitle: "Desarrolladora web",
    technologies: [
      {
        id: "gatsby",
        label: "Gatsby",
        icon: "techs/gatsby.svg",
        link: "https://www.gatsbyjs.org",
      },
      {
        id: "netlify",
        label: "Netlify",
        icon: "techs/netlify.svg",
        link: "https://www.netlify.com/",
      },
      {
        id: "reactjs",
        label: "React.js",
        icon: "techs/reactjs.svg",
        link: "https://reactjs.org/",
      },
      {
        id: "graphql",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/files`,
        name: "files",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {},
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
    "gatsby-plugin-postcss",
    "gatsby-plugin-anchor-links",
  ],
};
