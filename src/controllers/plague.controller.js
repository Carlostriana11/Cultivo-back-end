const { createPlague, getPlague, getAllPlagueById, updatePlagueById, deletePlagueById } = require("../services/plague.service");

async function createOnePlague(req, res) {
    const newPlague = req.body
    
    try {
        const data = await createPlague(newPlague);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok:false,
            msg:'Error al crear la Informacion de la plaga'
        })
    }
}
async function getAllPlague(req, res) {

    try {
        const data = await getPlague();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al optener toda la informacion de las plagas"
        })
    }
}
async function getPlagueById(req, res) {
    const idPlague = req.params.id
    try {
        const data = await getAllPlagueById(idPlague);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al optener la infromacion por ID"
        })        
    }
}
async function updatePlague(req, res) {
    const idPlague = req.params.id
    const newInfo = req.body
    try {
        const data = await updatePlagueById(idPlague, newInfo);
        res.json({
            ok:true,
            data
        });
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al actualizar la informacion por el ID"
        })
    }
}
async function deletePlague(req, res) {
    const idPlague = req.params.id
    try {
        const data = await deletePlagueById(idPlague);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al eliminar la informacion de la plaga por ID"
        })
    }
}

module.exports = {
    createOnePlague,
    getAllPlague,
    getPlagueById,
    updatePlague,
    deletePlague
}