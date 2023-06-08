require('dotenv').config()
const express = require('express')
const app = express()


// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))



// Routes
app.get('/', (req, res) => {
    res.render('home')
})
// 404 page
app.get('*', (req, res) => {
    res.render('error404')
  })
  

app.listen(process.env.PORT)