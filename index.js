const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Customers of the Shopping App')
})

app.listen(port, () => {
  console.log(`app running on ${port}`)
})