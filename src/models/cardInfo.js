const {Schema, model}= require('mongoose');

const infoSchema = new Schema({

	titulo: String,
	image: String,
	description: String,
	ubicacion:String,
	climaIdeal: String,
	motivo: String,
	timepoDeCrecimiento:String,
	momentoDecosecha:String,
	frecuenciaDeRiego:String

},{
	timestamps: true	
});

const InfoModel = model(
	'Info',
	infoSchema
);

module.exports = InfoModel;
