const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/:id', userController.getUser);

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route(':id')
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;