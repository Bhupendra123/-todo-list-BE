const router = require('express').Router();
const entityCtrl = require('../controllers/entity-ctrl');
// User routes
router.get('/test', (req, res) => {
  console.log('Here');
  res.send(JSON.stringify(1));
});
router.post('/insertEntity', entityCtrl.insertEntity);
router.post('/updateEntity', entityCtrl.updateEntity);
router.post('/deleteEntity', entityCtrl.deleteEntity);
router.post('/getAllEntities', entityCtrl.getAllEntities);
router.post('/deleteMultipleEntities', entityCtrl.deleteMultipleEntities);
router.post('/getEntityById', entityCtrl.getEntityById);

module.exports = router;
