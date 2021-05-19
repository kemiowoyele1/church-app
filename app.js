const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');
const app = express();

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


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
app.listen(3000)