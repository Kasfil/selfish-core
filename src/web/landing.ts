import express from 'express'
import CSPContent from 'middleware/csp'

const router = express.Router()

router.get('/', CSPContent, (_, res) => {
  res.render('landing/landing', {
    title: 'Selfish - tawarkan dengan kebanggaan',
    meta: {
      description: 'Meta package'
    }
  })
  res.end()
})

export default router
