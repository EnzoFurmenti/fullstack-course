const express = require('express');
const controllers = require('../controllers/order');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('jwt',{session:false}), controllers.getAll);
router.post('/',passport.authenticate('jwt',{session:false}), controllers.create);

module.exports = router;