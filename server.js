require('dotenv').config();
const express = require("express");
const config = require('./src/config/config');

const app = express();

app.listen(config.app_port);

console.log("Server bezi na porte 3000.");
console.log(config.app_port);

app.use(express.json({
    type:['application/json', 'text/plain']
}));