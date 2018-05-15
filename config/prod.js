//prod.js - production keys are hereererererer
//DEV.JS DONT COMMIT THIS
//can make these available to other files within our application
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    callbackURL: '/auth/google/callback',
    //googleClientID: '394839695968-nbi2c8h81ao2g39th3a6j2lt6arojenp.apps.googleusercontent.com',
    //googleClientSecret: '-Srmo0DN0D5muQPp8ESEpD9a',
    //mongoURI: 'mongodb://cody:password@ds249269.mlab.com:49269/emaily-dev',
    //cookieKey: 'asdflakjsdfhlaskjdfhaslkfjhaslfkjh'
    clientSignIn: '/auth/google'
     //this was from when i was gonna try to make something to find out what env we're in, and then
    //give the correct link to the sign in with google link on the front end front page
};