//eslint-disable-next-line no-undef
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000 //eslint-disable-line no-undef

app.get('/version', (req, res) => {
  res.send('22') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) //eslint-disable-line no-console
})
