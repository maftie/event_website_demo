const mongoose = require('mongoose');

const Event = require('../models/Event');

module.exports = async (req, res) => {
    let name = req.body.name, 
    date = req.body.date, 
    imageLink = req.body.imageLink, 
    description = req.body.description, 
    ticketPrice = req.body.ticketPrice.toString(), 
    ticketTotal = req.body.ticketTotal.toString();
    try {
        let eventQuery = await Event.find({name: name});
        if (eventQuery.length >=1) {
            return res.status(422).json({
                success: false,
                message: 'Error: That event already exists!'
            })
        }
        const event = new Event ({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            date: date,
            imageLink: imageLink,
            description: description,
            ticketPrice: ticketPrice,
            ticketTotal:  ticketTotal
        });

        console.log(event);
        event.save();
      
        res.status(201).json({
            success: true,
            message: 'Success: Event has been created!'
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong'
        })
    }
}