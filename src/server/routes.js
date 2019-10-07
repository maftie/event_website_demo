const router = require('express').Router();
const services = require('./api/services/index');
const isOrganizer = require('./api/services/auth/isOrganizer');
const passport = require('passport');

router.post('/api/login', services.Login);
router.post('/api/register', services.Register);
router.post('/api/createEvent', passport.authenticate('jwt', {session: false}), isOrganizer, services.CreateEvent);
router.post('/api/purchaseTickets', passport.authenticate('jwt', {session: false}), services.PurchaseTickets);
router.get('/api/getevents', services.RenderEvents);

module.exports = router;