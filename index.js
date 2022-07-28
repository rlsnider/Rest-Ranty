//dependencies
require('dotenv').config()
const express = require('express')
const app= express()

app.use('/places', require('./controllers/places'))

//Home page
app.get('/', (req, res)=> {
    res.send('Hello world!')
})
//Wildcard route/error page
app.get('*', (req, res)=> {
    res.send('error404')
})
app.listen(process.env.PORT, ()=> {
    console.log('Wakey, Wakey')
})