const InfoModel = require("../models/cardInfo");

async function createCardInfo( newInfo ){	
	return await InfoModel.create( newInfo );
}

async function getAllInfo(){
	return await InfoModel.find();
}
async function getAllInfoById(infoId){
	return await InfoModel.find({_id: infoId})
}
async function updateAllInfo(idInfo, updateInfo){
	return await InfoModel.findOneAndUpdate({_id: idInfo},updateInfo, {new:true})
}
async function deleteAllInfo(idInfo){
	return await InfoModel.findByIdAndDelete(idInfo)
}


module.exports = {
	createCardInfo,
	getAllInfo,
	updateAllInfo,
	deleteAllInfo,
	getAllInfoById
}
