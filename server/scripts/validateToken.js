//const {body, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    var token = null;
    if (authHeader)
        token = authHeader.split(' ')[1];
    else
        token = req.body.authorization;

    if (!token)
        return res.sendStatus(401);

    try {
        const user = jwt.verify(token, process.env.SECRET);
        req.user = user;
        return next();
    } catch(err) {
        return res.redirect('/login');
    }
}