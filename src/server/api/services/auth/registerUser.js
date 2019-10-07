const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

module.exports = (req, res) => {    
    let email = req.body.email, password = req.body.password, organizer = req.body.organizer;
    try {
        let emailQuery = User.find({email: email})
        .then(()=>{
            if(emailQuery.length >=1) {
                return res.status(422).json({
                    success: false,
                    message: 'Sorry, that email is already in use.'
                })
            }
    
            bcrypt.hash(password, 10, (err, pwHash) => {
    
                const user = new User ({
                    _id: new mongoose.Types.ObjectId(),
                    email: email,
                    password: pwHash,
                    organizer: organizer = 'yes' ? true : false
                });
    
                user.save();
              
                res.status(201).json({
                    success: true,
                    message: 'Success: Your account has been registered!'
                }) 
                    
            })  
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong'
        })
    }
}