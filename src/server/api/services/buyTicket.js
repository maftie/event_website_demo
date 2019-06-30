const Event = require('../models/Event');

module.exports = (req, res) => {
    let eventName = req.body.name,   
    amount = req.body.amount;
    try {
       Event.findOne({name: eventName},
            (err, event) => {
                if(event) {
                    let total = parseInt(event.ticketTotal) - amount;
                    if( total < 0) {
                        return res.status(200).json({
                            success: true,
                            message: 'Sorry, the tickets you you requested are unavailable at this time.'
                        })
                    } 
                    event.ticketTotal = total;
                    event.save();
                }else{
                    res.status(404).json({
                        success: false,
                        message: 'Oops, we weren\'t able to locate that event, please try again later.' 
                    })
                }
            })
            .then(()=> {
                try{
                    Event.find({}, (err, events) => {
                        if (err) {
                            res.status(404).json({
                                success: false,
                                message:'The resource couldn\'t be loaded, please wait and try again later.'
                            })
                        }
                        else {
                            res.status(200).json(events)
                        };
                    })
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'something went wrong'
                    })
                }
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Oops, something went wrong. Please try again later.'
        })
    }
}