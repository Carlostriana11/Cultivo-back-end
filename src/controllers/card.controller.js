const { createCardInfo, getAllInfo, updateAllInfo, deleteAllInfo, getAllInfoById } = require("../services/card.service")

async function createInfo(req, res){
    const newInfo = req.body

    try {
        const infoRegistered = await createCardInfo(newInfo)
        res.json({
            ok:true,
            data: infoRegistered
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg:'Error al registrar la informacion'
        });
    }
}
async function getInfo(req, res){
    try {
        const data = await getAllInfo();
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok:false,
            msg: "Error al optener la informacion"
        })
    }
}
async function getInfoById(req, res){

    const id = req.params.id;
    try {
        const data = await getAllInfoById(id);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok:false,
            msg:"Error al optener la informacion por ID"
        })
    }
}
async function updateInfo(req, res){
    const id = req.params.id
    const inputData = req.body
    try {
        const data = await updateAllInfo(id, inputData);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al actualizar la informacion"
        })
    }
}
async function deleteInfo(req, res){
    const id = req.params.id

    try {
        const data = await deleteAllInfo(id)
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            mgs:"Error al eliminar la informacion"
        })
    }
}
module.exports = {
    createInfo,
    getInfo,
    updateInfo,
    deleteInfo,
    getInfoById
}
