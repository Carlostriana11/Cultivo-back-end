const {Schema, model} = require('mongoose')

const plagueSchema = new Schema({

    titulo: String,
	image: String,
	description: String,
	ubicacion:String,
	climaDondeSeUbica: String,
	comoContrarrestarConsejo1:String,
	comoContrarrestarConsejo2:String,
	comoContrarrestarConsejo3:String
},{
    timestamps: true
});

const plagueModel = model(
    'Plague',
    plagueSchema
)

module.exports = plagueModel