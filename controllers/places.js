const router = require('express').Router()
const places = require('../models/places.js')


//Get /places
router.get('/', (req, res) => {
      
    res.render('places/index', { places })
})
router.get('/new', (req, res)=> {
  res.render('places/new')
})
//Post from "new" form to places index
router.post('/', (req, res)=> {
  if(!req.body.pic){
    req.body.pic= 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
//Edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN (id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    let data ={
      place: places[id],
      id:id
    }
    res.render('places/edit', data)
  }
})

//Show an individual page
router.get('/:id', (req, res)=> {
  console.log("just hit the show route")
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else{
    res.render('places/show', { place: places[id], id })
  }
 
})



//PUT
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    if(!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
      req.body.city = 'Anytown'
    }
    if(!req.body.state) {
      req.body.state = 'USA'
    }
    //Save new data into places.id
    places[id] = req.body
    res.redirect(`/places/${req.params.id}`)
  }
})

//DELETE 
router.delete('/:id', (req, res)=> {
  let id = Number(req.params.id)

  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
}
})

module.exports = router