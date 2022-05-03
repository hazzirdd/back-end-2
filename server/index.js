const express = require('express');
const cors = require('cors');

const app = express();

//Destrucure functions from my controller.js
const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js')

//Middleware - External code you want to run everytime your server starts 
app.use(express.json());
app.use(cors());

//Now we need to write out our endpoints
app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);



app.listen(4004, () => console.log('Port running on 4004'));