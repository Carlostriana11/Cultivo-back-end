const express = require('express');
const app = express();

const cors = require('cors');
const {dbConnection} = require('./config/mongo.confing');
require("dotenv").config()
const PORT = process.env.PORT

app.use( cors() )
app.use( express.json())

app.use('/api/info', require('./routes/card.routes'))//Route used to access garden information, including details for cards and individual views
app.use('/api/climateinfo', require('./routes/infoClima.routes'))//Route used to access irrigation information based on climate conditions for gardens.
app.use('/api/fertilizer', require('./routes/fertilizer.routes'))
app.use('/api/plague', require('./routes/plague.routes'))
dbConnection();

app.listen(PORT,function(){
	console.log(`servidor corriendo en http://localhost:${PORT}`);
});
