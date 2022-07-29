const router = require('express').Router()

// router.get('/', (req, res)=> {
//     res.send('Get /places')
//})
//Get /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/public/images/H-Thai-ML.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/public/images/coffee-g3ddd1dba3_1920.jpg'
      }]
      
    res.render('places/index', { places })
})
router.get('/new', (req, res)=> {
  res.render('places/new')
})
//Post from "new" form to places index
router.post('/', (req, res)=> {
  console.log(req.body)
  res.send('POST /places')
})
module.exports = router