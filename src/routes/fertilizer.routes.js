const Router = require("express");
const { createFertilizer, getFertilizer, getFertilizerById, upateFertilizer, deleteFertilizer } = require("../controllers/fertilizer.controller");


const router = Router();

router.post('/', createFertilizer);
router.get('/', getFertilizer);
router.get('/:id', getFertilizerById);
router.patch('/:id', upateFertilizer);
router.delete('/:id', deleteFertilizer);



module.exports = router;