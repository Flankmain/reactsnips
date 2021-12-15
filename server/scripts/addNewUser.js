const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
    
    User.findOne({$or: [{email:req.body.email}, {name:req.body.name}]}, (err, user) => { 
    
        if (err) {
            return res.status(500);
        }

        if (user) {

            let inUseMessage;

            if (user.email === req.body.email)
                inUseMessage = 'Email is already in use.';
            else if (user.name === req.body.name)
                inUseMessage = 'Name is already in use.'
            else
                inUseMessage = 'COMPARISON ERROR'

            return res.status(400).json({message: inUseMessage});
        }
        

        let salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if (err) return res.status(500).json({message: 'Hashing error.'});

            User.create({
                name: req.body.name,
                email: req.body.email,
                passwordHash: hash
            });

            return res.redirect("/login");
        });
    });
}