// commonjs syntax used here because this isn't going through babel
require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
const fs = require('fs')
const port = 5050
// read from our file system, will block until it finishes. Fine for startup of server, but don't block the thread often.
const baseTemplate = fs.readFileSync('./index.html')
// read in baseTemplate, create templating function using lodash's .template()
const template = _.template(baseTemplate)
// add .default bc we used ES6 module syntax in App, and here we're using commonjs
const App = require('./js/App').default

const server = express()

// static file serving => if anyone requests something from public, serve it to them with the proper headers
server.use('/public', express.static('./public'))

// for every request, we're going to use this particular function
server.use((req, res) => {
  // createServerRenderContext(): the way ReactRouter v4 does its server side rendering. 2 pass system
  const context = ReactRouter.createServerRenderContext()
  // body will be a long string that is the HTML output of our app, after its first render
  const body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context: context},
      React.createElement(App)
    )
  )

  res.write(template({body: body}))
  res.end()
})

/* createServerRenderContext()'s 2 pass system:
 * try to render once. if anywhere inside you have a redirect or you render a miss, it's going to return to this context 'hey, i had a redirect or miss'.
 * then it's up to me to render again,
 *   either to that redirect page, or to what happens on miss (404 page).
 *   if there's no redirect or 404, then it worked on the 1st time.
 * in sum:
 * did you have a redirect? did you have a 404?
 *   if so, do the correct thing
 *   if not, render the page.
 */

console.log('listening on ' + port)
server.listen(port)

