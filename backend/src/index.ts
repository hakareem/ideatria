import express from 'express'

const app = express()

app.get('/main', (req, res) => {
  res.send('Main Page')
})

app.listen(3000, () => {
  console.info('server is running on http://localhost:3000')
})
