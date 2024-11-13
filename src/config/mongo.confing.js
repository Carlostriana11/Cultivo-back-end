const mongoose = require('mongoose');

async function dbConnection(){

	try{
		await mongoose.connect(process.env.DB_URL, {})
		console.log('Base de datos inicializado exitosamente')
	}catch(error){
		console.log(error)
		throw new Error('Error al Inicializar la base de datos')
	}
}

module.exports ={
	dbConnection
}


