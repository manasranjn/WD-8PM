const express = require('express');
const DataController = require('../controllers/dataController');
const router = express.Router();

router.post('/create', DataController.createData);
router.get('/get', DataController.getData);
router.get('/get/:id', DataController.getDataById);
router.put('/update/:id', DataController.updateData);
router.delete('/delete/:id', DataController.deleteData);

module.exports = router;
