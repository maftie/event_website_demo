const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const User = require('./api/models/User'); 

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

    passport.use(new LocalStrategy(
            {
            usernameField: 'email',
            passwordField: 'password'
            },
            (email, password, done) => {
                try{
                    User.findOne({ email: email }).then(user => {
                        if(!user) {
                            return done(null, false);
                        }
                        bcrypt.compare(password, user.password, (err, match) => {
                            if(match) {
                                return done(null, user);
                            }
                            return done(null, false, {message: 'Incorrect email or password.'});
                        })
                    })
                }catch (error) {
                    return done(null,false);
                }
            }
        )
    );

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
          try
          {return User.findOne({email: jwt_payload.email}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
          })}catch (error) {
            return done(null,false);
          }
        }
    ));

