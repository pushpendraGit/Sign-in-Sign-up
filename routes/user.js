const express = require('express');

const router = express.Router();

const passport = require('passport');

const userController = require('../controllers/user_controller');


router.get('/sign-in', userController.sign_in);

router.get('/sign-up', userController.sign_up);

router.post('/create',userController.create);

router.post('/create-session',passport.authenticate(
    'local',

    {failureRedirect: '/users/sign-in'}

),userController.createSession);


router.get('/sign-out',userController.destroy);

router.get('/profile/:id',userController.profile);

router.post('/update/:id',passport.checkAuthentication,userController.update);


router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), userController.createSession);








module.exports = router;