module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-preact/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"xxxxxxxxxxxxxxxxxx","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/assets/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-remark-images","id":"dcc5482e-3c13-53a4-9de3-f871bb9a928f","name":"gatsby-remark-images","version":"6.13.0","modulePath":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":640},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01","commonmark":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":640},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
