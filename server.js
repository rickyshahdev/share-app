const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
app.use(express.static('public'))




const peopleController = require('./controllers/festival.js');
app.use('/blog', peopleController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
