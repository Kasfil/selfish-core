import express from 'express'
import cspContent from 'middleware/csp'

const router = express.Router()

router.get('/', cspContent, (_, res) => {
  res.render('index', {
    title: 'Welcome to selfish',
    meta: {
      description: 'this is description'
    },
    nav: {
      test: 'hey'
    },
    name: 'Foo',
    page: 'Home'
  })
})

export default router
