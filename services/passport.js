//THIS WHOLE FILE HAS TO BE REQUIRED IN THE INDEX FILE. 
//OTHERWISE IT WILL NEVER GET USED!
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

//the .. tells the thing to go up a directory, then go to config/keys
//one dot just says start in current directory
const keys = require('../config/keys');

const User = mongoose.model('users');
//one argument in this statement, so we're taking something out of mongoose


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});



//creates a new instance of the google strategy, tells passport to use the strategy
passport.use(
    new GoogleStrategy({

            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            //callbackURL: keys.callbackURL,
            proxy: true
            //this short thing works with heroku, but not c9
            //need to add some code to check what environment we're in
            //'http://quickie-codebot1001.c9users.io/auth/google/callback'
            //'https://agile-hollows-83355.herokuapp.com/''
            //
            //may need to add in a thing that checks what env we're in and sends us to the correct link
            //'/auth/google/callback'

        },
        async(accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                //we already have a record with the given profile id
                //so we dont have to make a user
                return done(null, existingUser);
                //null says everything is good, existingUser means something didnt go right
            }
            //we need to make a new user

            //this looks for an existing google id
            const user = await new User({ googleId: profile.id }).save()
            //the .save saves this thing in the collection, so it makes a record
            done(null, user);

        }
    )
);
