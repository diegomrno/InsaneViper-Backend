const express = require('express')
const app = express()
const port = 3000

import Logger from "./src/features/core/logger.js";

app.use(Logger);

app.get('/', (req, res) => {
    // To Do : redirect to home page
    res.send('Hello World');
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
