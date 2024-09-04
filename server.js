// Express.js palvelin //
const path = require('path')
const express = require('express')
const app = express()

//-------------------------------------------------------
// API rajapinta joka palauttaa suosittelijat

const recommenders = require('./recommenders.json')

// Jos pyyntö tulee localhost:3000/api/recommenders
app.get('/api/remommenders', (req, res) => {
    res.json(recommenders)
    })


//-------------------------------------------------------

// STAATTINEN WEB PALVELIN //

// Tehdään polkumääritys front kansioon 
const polku = path.join(__dirname, './front')

// Määritellään, että front kansiossa on tiedostosisältö
// jota palvelin käyttää kun se saa http requestin clientiltä
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on http://localhost:3000')
})