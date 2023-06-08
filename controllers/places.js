const router = require('express').Router()

// New
router.get('/new', (req, res) => {
  res.render('places/new')
})
// Index
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables.jpg' 
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffe~e, Bakery',
        pic: '/images/spices.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router