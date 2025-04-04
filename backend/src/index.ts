import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'

const app = express()

app.get('/main', (req, res) => {
  res.send('Main Page')
})

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: trpcRouter  
}))

app.listen(3000, () => {
  console.info('server is running on http://localhost:3000')
})
