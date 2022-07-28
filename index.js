//dependencies
require('dotenv').config()
const express = require('express')
const app= express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//Home page
app.get('/', (req, res)=> {
    console.log('home page')
    res.render('home')
})
//Wildcard route/error page
app.get('*', (req, res)=> {
    console.log('error page')
    res.render('error404')
})
app.listen(process.env.PORT, ()=> {
    console.log('Wakey, Wakey')
})