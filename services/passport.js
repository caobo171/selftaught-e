const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../configs/keys');

const User = mongoose.model('user');
passport.serializeUser((user, done) => {

    done(null, user.id);
});
console.log(keys);
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email','name', 'gender', 'link'],
    proxy:true
},
    async (accessToken, refreshToken, profile, done) => {
        const existUser = await User.findOne({ facebookId: profile.id })
        console.log(profile._json.picture.data.url);

        if (existUser) {
            return done(null, existUser);
        } else {
            const user = await new User({ facebookId: profile.id }).save()
            done(null, user)

        }
       
    })
);
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        const existUser = await User.findOne({ googleId: profile.id })
        console.log(profile);

        if (existUser) {
            return done(null, existUser);
        } else {
            const user = await new User({ googleId: profile.id }).save()
            done(null, user)

        }
        
    })
);

