import dotenv from 'dotenv'

import Path from 'path'

// load dotenv file
dotenv.config()

// get env file or use default value
const env = (envKey: string, defaultVal: string, asArray: boolean = false, separator: string = '|') => {
  // takes the value if exist unless give the default
  const envVal: string | undefined = process.env[envKey]
    ? process.env[envKey]
    : defaultVal

  // Check if it's wanted to parse as array
  if (asArray) {
    return envVal?.split(separator)
  }
  // or return as is
  return envVal
}

export const Configs = {
  /**
   * App Env
   */
  env: env('NODE_ENV', 'dev'),
  path: Path.join(__dirname, 'log', 'request'),

  // CORS configuration
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },

  // App configuration
  port: env('PORT', '8080'),

  // Content Security Policy
  csp: [
    'default-src \'none\'',
    'script-src \'self\' https://cdnjs.cloudflare.com',
    'connect-src \'self\'',
    'img-src \'self\'',
    'style-src \'self\' https://cdnjs.cloudflare.com',
    'base-uri \'self\'',
    'form-action \'self\''
  ],

  // Cookie configuration
  cookie: {
    secret: env('COOKIES_KEY', '', true, ';'),
    option: {
      /**
       * Cookies Domain flag attribute
       *
       * Set Domain flag attribute to cookies. This will set what domain
       * is this cookie affective. By default this attribute is not set.
       * then cookies set the domain request as it's value. read documentation
       * at https://tools.ietf.org/html/rfc6265#section-5.2.3 for more info
       *
       * @type string
       */
      domain: '.selfish.com',

      /**
       * Cookies SameSite flag attribute
       *
       * Set sameSite flag attribute to cookie. SameSite attribute will limit
       * the cookies to be attached in request. By default sameSite is not set.
       * possible value is true, false, "Strict", "Lax", or "None". read more info at
       * https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7
       *
       * @type boolean|string
       */
      sameSite: 'Strict',

      /**
       * Cookies httpOnly flag attribute
       *
       * HttpOnly attribute is a rules whether other http read the cookies
       * specially the javascript browser. By default httpOnly attribute is
       * not set. https://tools.ietf.org/html/rfc6265#section-5.2.6 for more
       * info.
       *
       * @type boolean
       */
      httpOnly: true,

      /**
       * Cookies maxAge flag attribute
       *
       * MaxAge attribute define the time when cookies should expired after
       * time by providing the life age in second. this attribute will
       * affiliate with expires flag attribute but not set in this configuration.
       * By default the cookie will not expired.
       * read https://tools.ietf.org/html/rfc6265#section-5.2.2 for more
       *
       * @type integer
       */
      maxAge: 60 * 60 * 60 * 24 * 3,

      /**
       * Cookies secure flag attribute
       *
       * secure attribute define is the cookies transmitted only by secure
       * connection. by default secure flag attribute is not set. read mor at
       * https://tools.ietf.org/html/rfc6265#section-5.2.5
       *
       * @type boolean
       */
      secure: true
    }
  }
}
