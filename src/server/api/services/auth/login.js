const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          success: false,
          message: err ? err : 'Log-in failed, please check your username/password combination and try again.'
        });
      }
      req.login(user, {session: false}, (err) => {
        if (err) {
          res.status(400).json({
            success:false,
            message: err
          });
        }
          const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: '30m' });
          return res.status(200).json({
              success: true,
              message: 'Log-in successful!',
              email: user.email,
              organizer: user.organizer,
              token: token
            });
        });
    })(req, res);
};