const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Stores the `shoes.js` routes in a variable
const shoes = require('./routes/api/shoes')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Points app to use `shoes.js` routes [stored in const shoes]
    //whenever `/api/shoes` is called on the backend
app.use('/api/shoes', shoes)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))