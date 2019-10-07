const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    date: Date,
    imageLink: String,
    ticketPrice: String,
    description: String,
    ticketTotal: String
});

const Event = mongoose.model('Event', EventSchema, 'Events');

module.exports = Event;