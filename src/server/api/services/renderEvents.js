const Event = require('../models/Event');

module.exports = (req, res, next) => {
    try{
        Event.find({}, (err, events) => {
            if (err) {
                res.status(404).json({
                    success: false,
                    message:'The resource couldn\'t be loaded, please wait and try again later.'
                })
            }
            else res.status(200).json(events);
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong'
        })
    }
}
    