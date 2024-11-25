const { createInfoClimate, getAllInfoClimate, getAllInfoClimateById, updateAllInfoClimate, deleteAllInfoClimate } = require("../services/infoClimate.service");

async function createClimate(req, res) {
    const newInfo = req.body;

    try {
        const infoRegistered = await createInfoClimate(newInfo)
        res.json({
            ok:true,
            data: infoRegistered
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg: "Error al registar la informacion del clima"
        })
    }
} 

async function getclimate(req, res) {
    try {
        const data = await getAllInfoClimate();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg: "Error al optener la infromacion del clima"
        })
    }
}
async function getClimateById(req, res){
    const id = req.params.id;
    try {
        const data = await getAllInfoClimateById(id);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al ooptener la informacion del clima por ID"
        })
    }
}
async function updateClimate(req, res){
    const id = req.params.id;
    const inputData = req.body;
    try {
        const data  = await updateAllInfoClimate(id, inputData);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg: "Error al actualizar la informacion del clima"
        })
    }
}

async function deleteClimate(req, res) {
    const id = req.params.id;
    try {
        const data = await deleteAllInfoClimate(id);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok:true,
            msg:"Error al eliminar la informacion del clima"
        })
    }
}

module.exports = {
    createClimate,
    getclimate,
    getClimateById,
    updateClimate,
    deleteClimate
}