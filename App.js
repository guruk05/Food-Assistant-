require ('dotenv').config();
const express = require('express');
const app = express();
const ask = require('./Controller').ask;

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

app.use(bodyParser.json(bodyParserJsonConfig()));

app.get('/',(req,res) =>
res.send('Hello World'))

app.post('/ask',ask)

app.listen(3000, () => 
console.log('You are connected in Port 3000')
)








