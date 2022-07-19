const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000

const routes = require('./routes/index')
routes(app)

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app