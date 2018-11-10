module.exports = {
  siteMetadata: {
    title: 'Cristina Soler',
    subtitle: 'Desarrolladora web',
    technologies: [
      {
        label: 'Gatsby',
        icon: 'techs/gatsby.svg',
        link: 'https://www.gatsbyjs.org'
      },
      {
        label: 'Netlify',
        icon: 'techs/netlify.svg',
        link: 'https://www.netlify.com/'
      },
      {
        label: 'React.js',
        icon: 'techs/reactjs.svg',
        link: 'https://reactjs.org/'
      },
      {
        label: 'GraphQL',
        icon: 'techs/graphql.svg',
        link: 'https://graphql.org/'
      }
    ],
    disqus: 'cristinasoler',// put your disqus ID here
    author: {
      name: 'Cristina Soler',
      email: 'csoon1992@gmail.com',
      github: 'https://github.com/csoon1992'
    },
    blogMenu: [
      {
        label: 'Artículos',
        link: '/blog/'
      },
      {
        label: 'Sobre mí',
        link: '/about/'
      },
      {
        label: 'Contacto',
        link: '/contact/'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
        precision: 8
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material-icons',
          'Montserrar:400',
        ]
      }
    }
  ]
}
