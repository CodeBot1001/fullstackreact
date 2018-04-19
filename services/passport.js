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
  new GoogleStrategy(
   {
       clientID: keys.googleClientID,
       clientSecret: keys.googleClientSecret,
       callbackURL: 'http://quickie-codebot1001.c9users.io/auth/google/callback'
       //'/auth/google/callback'
       
   }, 
   (accessToken, refreshToken, profile, done) => {
      //Removing this stuff, because we dont care about posting this info to the console anymore
      //console.log('access token', accessToken);
      //console.log('refresh token', refreshToken);
      //console.log('profile:', profile);
      
      //console.log('just profile:', profile);
      //console.log('pofile with id:', profile.id);
      //learned from above: profile is a ton of info. Profile.id just takes the id number
      
      //below is in lecture 37
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                //we already have a record with the given profile id
                //so we dont have to make a user
                done(null, existingUser);
                //null says everything is good, existingUser means something didnt go right
                //
            } else {
                //we need to make a new user
                
                 //this looks for an existing google id
                 new User ({ googleId: profile.id })
                    .save()
                 //the .save saves this thing in the collection, so it makes a record
                    .then(user => done(null, user));
                 //saying done to user.findOne or an error
                 //also, the user that we are calling back in the .then will be the newest
                 //version, the freshest version of the user. It will incorporate any changes that
                 //were made in the saving of the user
                
            }
        });
    }       
  )
);
