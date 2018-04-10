     const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

//Next line is for heroku. We wait for heroku to specify what port we want to use. If we are
//running in a development environment, like on our machines, we will say or (||) just use
//Port 5000, or in my case 8080 because of c9 (i think)
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server running...');
});
