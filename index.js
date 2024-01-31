require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/tweet', (req, res) => {
    res.send('abhay jatthu')
})
app.get('/login', (req, res) => {
    res.send('abhay  mere betey')
})
app.get('/youtube', (req, res) => {
    res.send('abhay gandu')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})