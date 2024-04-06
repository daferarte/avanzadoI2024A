const  { Router } = require('express');

const { viewUsers } = require('../controllers/users.controller');

const routerUser = Router();

routerUser.get('', viewUsers);

module.exports = routerUser;