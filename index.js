require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')


// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))



// Routes
app.get('/', (req, res) => {
    res.render('home')
})
// 404 page
app.get('*', (req, res) => {
    res.render('error404')
  })
  

app.listen(process.env.PORT)