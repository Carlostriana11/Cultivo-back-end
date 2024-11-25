const fertilizerModel = require("../models/fertilizer");

async function createOneFertilizer( newInfo){
    return await fertilizerModel.create( newInfo);
}
async function getAllFertilizer() {
    return await fertilizerModel.find();
}
async function getAllFertilizerById(id) {
    return await fertilizerModel.find({_id: id});
}
async function updateFertilizerById(id, updateInfo) {
    return await fertilizerModel.findOneAndUpdate({_id:id}, updateInfo,{new:true});
}
async function deleteFertilizerByid(id) {
    return await fertilizerModel.findOneAndDelete({_id:id});
}
module.exports ={
    createOneFertilizer,
    getAllFertilizer,
    getAllFertilizerById,
    updateFertilizerById,
    deleteFertilizerByid
}