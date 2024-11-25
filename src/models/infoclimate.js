const {Schema, model} = require('mongoose')

const infoClimaSchema = new Schema({
    
    title:String,
    descriptionLluvia: String,
    descriptionCalido: String,
    descriptionSeco: String
},{
    timestamps: true
});

const infoClimaModel = model(
        "Clima",
        infoClimaSchema
);

module.exports = infoClimaModel