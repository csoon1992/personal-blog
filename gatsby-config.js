module.exports = {
  siteMetadata: {
    title: 'Cristina Soler',
    subtitle: 'Desarrolladora web',
    technologies: [
      {
        label: 'Gatsby',
        icon: 'icon',
        link: 'https://www.gatsbyjs.org'
      },
      {
        label: 'Netlify',
        icon: 'icon',
        link: 'https://www.netlify.com/'
      },
      {
        label: 'React.js',
        icon: 'icon',
        link: 'https://reactjs.org/'
      },
      {
        label: 'GraphQL',
        icon: 'icon',
        link: 'https://graphql.org/'
      },
      {
        label: 'Sass',
        icon: 'icon',
        link: 'https://sass-lang.com/'
      }
    ],
    disqus: 'cristinasoler',// put your disqus ID here
    author: {
      name: 'Cristina soler',
      email: 'csoon1992@gmail.com',
      github: 'https://github.com/csoon1992'
    },
    blogMenu: [
      {
        label: 'Articles',
        path: '/blog/'
      },
      {
        label: 'About me',
        path: '/about/'
      },
      {
        label: 'Contact me',
        path: '/contact/'
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/examples`,
        name: 'examples'
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
          'material icons',
          'Montserrar:400',
        ]
      }
    }
  ]
}
