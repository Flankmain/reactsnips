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


    if (!req.body.email) {
        console.log("no email given")
        return badCredentials();
    }

    User.findOne({$or: [{email:req.body.email}, {name:req.body.email}]}, (err, user) =>
    {    
        if (err)
            return internalError();
        
        if (!user) {
            console.log("no user found")
            return badCredentials();
        }


        //password validation
        bcrypt.compare(req.body.password, user.passwordHash, (err, passwordMatch) => {
            
            //unsuccessful login handling
            if (err)
            {
                console.log("bcrypt comparison error: ", err);
                return internalError();
            }
            else if (!passwordMatch)
            {
                console.log("Password mismatch.");
                return badCredentials();
            }
            else { console.log("Matching passwords."); }

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