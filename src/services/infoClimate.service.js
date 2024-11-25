const infoClimaModel = require("../models/infoclimate");

async function createInfoClimate( newInfo ){
    return await infoClimaModel.create( newInfo);
}

async function getAllInfoClimate(){
    return await infoClimaModel.find();
}

async function getAllInfoClimateById(infoId){
    return await infoClimaModel.find({_id: infoId})
}

async function updateAllInfoClimate(infoId, UpdateInfo){
    return await infoClimaModel.findOneAndUpdate({_id: infoId}, UpdateInfo, {new:true})
}

async function deleteAllInfoClimate(idInfo){
    return await infoClimaModel.findByIdAndDelete(idInfo)
}


module.exports ={
    createInfoClimate,
    getAllInfoClimate,
    getAllInfoClimateById,
    updateAllInfoClimate,
    deleteAllInfoClimate
}