const express = require('express');
const app = express();

const cors = require('cors');
const {dbConnection} = require('./config/mongo.confing');
require("dotenv").config()
const PORT = process.env.PORT

app.use( cors() )
app.use( express.json())

app.use('/api/info', require('./routes/card.routes'))


dbConnection();

app.listen(PORT,function(){
	console.log(`servidor corriendo en http://localhost:${PORT}`);
});
