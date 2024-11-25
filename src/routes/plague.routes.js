const {Router} = require("express");
const { createOnePlague, getAllPlague, getPlagueById, updatePlague, deletePlague } = require("../controllers/plague.controller");

const router = Router();

router.post('/', createOnePlague);
router.get('/', getAllPlague);
router.get('/:id', getPlagueById);
router.patch('/:id', updatePlague);
router.delete('/:id', deletePlague);


module.exports = router
