import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/main', (req, res) => {

  res.send('Main Page')
})

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter  
}))

app.listen(3000, () => {
  console.info('server is running on http://localhost:3000')
})
