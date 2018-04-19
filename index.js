const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//the below is what we originally put for the passportConfig variable
//but the passport file doesn't return anything, so we don't need the variable
//const passportConfig = require('./services/passport');
//so it just becomes
require('./models/Users');
require('./services/passport');


mongoose.connect(keys.mongoURI);



const app = express();
//app declaration



app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      //how long the cookie will be valid, in miliseconds
      keys: [keys.cookieKey]
      //keys encrypts the cookie so that it can not be dublicated or something
  })  
);
app.use(passport.initialize());
app.use(passport.session());



//immediately calling the function that we just required
require('./routes/authRoutes')(app);


//removing from lecture 19 on
//app.get('/', (req, res) => {
//    res.send({ hi: 'there' });
//});

//Next line is for heroku. We wait for heroku to specify what port we want to use. If we are
//running in a development environment, like on our machines, we will say or (||) just use
//Port 5000, or in my case 8080 because of c9 (i think)
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server running...');
});


