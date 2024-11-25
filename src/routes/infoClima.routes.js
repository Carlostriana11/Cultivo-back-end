const { Router } = require('express');
const { createClimate, getclimate, getClimateById, updateClimate, deleteClimate } = require("../controllers/infoClima..controller");

const router = Router();

router.post('/', createClimate);
router.get('/', getclimate);
router.get('/:id', getClimateById);
router.patch('/:id', updateClimate);
router.delete('/:id', deleteClimate);

module.exports = router