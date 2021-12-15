const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {

    badCredentials = () => {
        return res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }

    internalError = () => {
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }


    if (!req.body.email)
        return badCredentials();

    User.findOne({$or: [{email:req.body.email}, {name:req.body.email}]}, (err, user) =>
    {    
        if (err)
            return internalError();
        
        if (!user)
            return badCredentials();

        //password validation
        bcrypt.compare(req.body.password, user.passwordHash, (err, passwordMatch) => {
            
            //unsuccessful login handling
            if (err)
                return internalError();
            else if (!passwordMatch)
                return badCredentials();

            //token creation
            const token = jwt.sign(
                {id:user._id, email:user.email},
                process.env.SECRET,
                {expiresIn: 3600}
            );
    
            if (!token) return internalError();
    
            return res.status(200).json({
                success: true,
                token: token
            });
        });

    });
}