//this loads the original npm passport module
const passport = require('passport');


module.exports = (app) => {

    //passport has an internal identifier of google, so thats how it knows to use the GoogleStrategy
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    //when the user visits this address below, google strategy will recognize that they have the
    //special code
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        //takes the cookie and makes the id no longer valid
        res.send(req.user);
        //a thing that comes back and says no content, or nothing, to show logout success
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    //from lucture 42, basically shows the record from mongo on a web page
    //but this is an example of what we could be showing the user. The user not has access to his info
    //because he is logged in.
    //Once user logs out, this page will be blank
};
