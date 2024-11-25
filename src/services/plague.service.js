const plagueModel = require("../models/plague")

async function createPlague(newPlague){
    return await plagueModel.create(newPlague);
}
async function getPlague(){
    return await plagueModel.find();
}
async function getAllPlagueById(idPlague) {
    return await plagueModel.find({_id: idPlague});
}
async function updatePlagueById(idPlague, infoPlague){
    return await plagueModel.findOneAndUpdate({_id: idPlague}, infoPlague, {new: true})
}
async function deletePlagueById(idPlague) {
    return await plagueModel.findByIdAndDelete({_id: idPlague});
}

module.exports = {
    createPlague,
    getPlague,
    getAllPlagueById,
    updatePlagueById,
    deletePlagueById
}