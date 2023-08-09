const express = require('express');
const pets = require('./petlist.js')
const app = express()
const path = require('path');

app.use('/public',express.static(path.join(__dirname + '/public')))

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
})

// all pets - setup get request
//import pet info
// return pet info

app.get('/pets', (req, res) => {
  res.send(pets);
})

// pet by id
// get name from params
// return the object with name?
// loop through array and return includes?

app.get('/pets/:name', (req, res) => {
  const petArray = [];
  const petName = req.params.name;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].name === petName) {
      petArray.push(pets[i]);
    }
  }
  res.send(petArray);
})

// same but for owner name w query

app.get('/pets-by-owner', (req, res) => {
  const petArray = [];
  const ownerName = req.query.name;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].owner === ownerName) {
      petArray.push(pets[i]);
    }
  }
  res.send(petArray);
})


const PORT = 3000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})