import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import csrf from 'csurf'
import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import serveStatic from 'serve-static'

import { Configs } from 'configs/configs'
import { LogStream } from 'configs/requestLogger'
import { Dirs } from 'configs/directory'
import RenderEngine from 'configs/views'

// Route file
import Feed from 'web/feed'

/**
 * creating app instance
 */
const app = express()
const port = Configs.port

/**
 * Configure view engine
 */
app.engine('eta', RenderEngine)
app.set('view engine', 'eta')
app.set('views', Dirs.views)

/**
 * Middleware collection
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())
app.use(cors(Configs.cors))
app.use(cookieParser(Configs.cookie.secret))
app.use(csrf({ cookie: true }))

/**
 * Logger middleware
 *
 * if app is in production, write log to file stream with rotating-
 * file-stream library in log/request. else write to stdout.
 */
if (Configs.env !== 'production') {
  app.use(logger('tiny'))
} else {
  app.use(logger('combined', { stream: LogStream }))
}

/**
 * Serve static file
 */
app.use('/static', serveStatic(Dirs.static))

/**
 * Route block
 */
app.use('/', Feed)

app.listen(port, () => {
  console.log('Selfish Core running on http://localhost:%i', port)
})

// Export for testing
export default app
