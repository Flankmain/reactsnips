const router = require('express').Router();
const { body, validationResult } = require('express-validator');

//scripts
//const validateToken = require('../scripts/validateToken');
const addNewUser = require('../scripts/addNewUser');
const attemptLogin = require('../scripts/attemptLogin')


router.post(
    '/register',

    body('name')
    .trim()
    .isLength({min: 1, max: 20})
    .withMessage('name should be between 1 and 20 characters long.'),

    body('email')
    .isEmail()
    .withMessage('email should be in format address@provider.com'),

    body('password')
    .isLength({min: 15})
    .withMessage('minimum length 15'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Bad mojo.',
                errors: errors.array()
            });
        }
        next();
    },
    
    addNewUser
);

router.post(
    '/login',
    
    body('name').trim().escape(),
    body('password').escape(),

    attemptLogin
);

module.exports = router;