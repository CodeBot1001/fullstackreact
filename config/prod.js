//prod.js - production keys are hereererererer
//DEV.JS DONT COMMIT THIS
//can make these available to other files within our application
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
    
    //googleClientID: '394839695968-nbi2c8h81ao2g39th3a6j2lt6arojenp.apps.googleusercontent.com',
    //googleClientSecret: '-Srmo0DN0D5muQPp8ESEpD9a',
    //mongoURI: 'mongodb://cody:password@ds249269.mlab.com:49269/emaily-dev',
    //cookieKey: 'asdflakjsdfhlaskjdfhaslkfjhaslfkjh'
};