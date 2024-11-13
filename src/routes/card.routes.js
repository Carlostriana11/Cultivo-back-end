const { Router } = require('express');
const { createInfo, getInfo, updateInfo, deleteInfo, getInfoById } = require('../controllers/card.controller');



const router = Router();

router.post('/', createInfo);
router.get('/', getInfo);
router.get('/:id', getInfoById)
router.patch('/:id', updateInfo);
router.delete('/:id', deleteInfo);



module.exports = router;

