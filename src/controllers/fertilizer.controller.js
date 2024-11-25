const { createOneFertilizer, getAllFertilizer, getAllFertilizerById, updateFertilizerById, deleteFertilizerByid } = require("../services/fertilizaer.service");

async function createFertilizer(req, res){
    const info = req.body

    try {
        const data = await createOneFertilizer(info);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg: "Error al crear el fertilizante"
        })
    }
}
async function getFertilizer(req, res) {

    try {
        const data = await getAllFertilizer();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg: "Error al optener los fertilizantes"
        })
    }
}
async function getFertilizerById(req, res) {
    const id = req.params.id;
    try {
        const data = await getAllFertilizerById(id);
        res.json({
            ok:true,
            data
        });
    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg:"Error al optener la informacion por ID"
        })
    }
}
async function upateFertilizer(req, res) {
    const id = req.params.id;
    const updateInfo = req.body

    try {
        const data = await updateFertilizerById(id, updateInfo);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al actualizar el fertilizante por ID"
        })
    }
}
async function deleteFertilizer(req, res) {
    const id = req.params.id;
    try {
        const data = await deleteFertilizerByid(id);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.log(error)
        re.json({
            ok:false,
            msg:"Error al eliminar el fertilizante por ID"
        })
    }
}


module.exports ={
    createFertilizer,
    getFertilizer,
    getFertilizerById,
    upateFertilizer,
    deleteFertilizer
}