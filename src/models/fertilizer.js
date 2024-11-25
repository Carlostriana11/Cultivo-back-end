const {Schema, model} = require('mongoose')

const fertilizerSchema = new Schema({
    
    titulo: String,
    image:String,
    Description: String

},{
    timestamps: true
});

const fertilizerModel = model(
    'fertilizer',
    fertilizerSchema
);

module.exports = fertilizerModel;