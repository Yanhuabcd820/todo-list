const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('this is a todo list')
})
app.listen(3000, () => {
  console.log('run on http://localhost:3000')
})