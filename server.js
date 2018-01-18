const express = require('express')
const path = require('path')
const app = express()

const dist = path.resolve("dist")

app.use(express.static(dist))
app.use((req, res) => res.sendFile(`${dist}/index.html`))

app.listen(3000, function () {
  console.log('listening on 3000')
})