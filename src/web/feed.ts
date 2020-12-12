import express from 'express'

const router = express.Router()

router.get('/', (_, res) => {
  res.render('index', {
    title: 'Welcome to selfish',
    meta: {
      description: 'this is description'
    },
    jsfoot: [
      { path: 'main.js' },
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js',
        integ: 'sha512-/DXTXr6nQodMUiq+IUJYCt2PPOUjrHJ9wFrqpJ3XkgPNOZVfMok7cRw6CSxyCQxXn6ozlESsSh1/sMCTF1rL/g=='
      }
    ],
    nav: {
      test: 'hey'
    },
    name: 'Foo',
    page: 'Home'
  })
})

export default router
