const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // To Do : redirect to home page
})

app.get('/home', (req, res) => {
    // To Do : homepage (vitrine)
})

app.get('/app', (req, res) => {
    // To Do : WebApp
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
