var plugins = [{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"xxxxxxxxxxxxxxxxxx","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n\t\t\t\t{\n\t\t\t\t  site {\n            siteMetadata {\n              title\n              description\n              siteUrl\n              site_url: siteUrl\n            }\n\t\t\t\t  }\n\t\t\t\t}\n\t\t\t  ","feeds":[{"query":"\n\t\t\t\t\t{\n            allMdx(sort: {fields: [frontmatter___date], order: DESC}) {\n              nodes {\n                slug\n                frontmatter {\n                  title\n                  date\n                }\n                body\n                excerpt\n              }\n            }\n\t\t\t\t\t}\n\t\t\t\t  ","output":"/rss.xml","title":"Your Site's RSS Feed","match":"^/blog/"}]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"icon":"src/assets/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-plugin-mdx/gatsby-ssr.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-remark-images","id":"dcc5482e-3c13-53a4-9de3-f871bb9a928f","name":"gatsby-remark-images","version":"6.14.0","modulePath":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":640},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01","commonmark":false},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
