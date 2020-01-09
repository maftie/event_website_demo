const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

module.exports = (req, res) => {    
    let email = req.body.email, password = req.body.password, organizer = req.body.organizer;
    try {
        User.findOne({ email: email })
        .then((result)=>{
            if(result) {
                console.log('user already exists')
                return res.status(422).json({
                    success: false,
                    message: 'Sorry, that email is already in use.'
                })
            }
    
            console.log('user ' + email + ' is unique. result of query is: ' + JSON.stringify(result))
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