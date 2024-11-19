const express = require('express')
const app = express()
const port = 3000


app.set("view engine", "ejs")

app.get('/', (req, res) => {
  const siteName = "Rasel Shikder"
  const siteDetails = "It's a website of mern stack Developer"
  res.render("index", {siteName: siteName, siteDetails: siteDetails})
})

app.get('/blog/:slug', (req, res) => {
  const siteName = "Rasel Shikder"
  const siteDetails = "It's a mern stack Developer"
  res.render("index", {siteName: siteName, siteDetails: siteDetails})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})