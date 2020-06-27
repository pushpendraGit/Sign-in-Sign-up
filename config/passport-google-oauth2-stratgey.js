const passport = require('passport');

var googleStrategy = require('passport-google-oauth20').Strategy;

const crypto = require('crypto');

const User = require('../models/user');

passport.use(new googleStrategy({

    clientID: '315572372959-vj7lg24i0brskqvt8irufh069hv5f8ts.apps.googleusercontent.com',
    clientSecret: 'hjsuHHsPys5m-SFEcaWeRrDA',
    callbackURL: "http://localhost:8000/users/auth/google/callback"

}, function(accessToken, refreshToken, profile, done){

    User.findOne({email:profile.emails[0].value}).exec(function(err, user){

        if(err){ console.log('Error in google stratgy', err); return }

        console.log(profile);

        if(user)
        {
            return done(null, user);
        }else{

            User.create({

                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            },function(err,user){

                if(err){ console.log('Error in creating user google statgy', err); return }

                return done(null, user);


            })
        }


    })
}))

module.exports= passport;