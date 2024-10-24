const Koa = require('koa');
const Router = require('koa-router');
const userController = require('../controllers/userController');
const router = new Router();

router.get('/admin/login', userController.login);

module.exports = router;