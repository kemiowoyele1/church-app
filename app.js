const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config');
const app = express();

// import routes
const postsRoute = require('./routes/posts');


//middlewares
app.use('/posts', postsRoute)
app.use(bodyParser.json());
app.use(cors)
//routes
app.get('/', (req,res) =>{
    res.send('We are on home')
})


//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true}, () => {

console.log('connected to database')
})
//listening to the server
const port = process.env.PORT || 3000
app.listen(3000)
