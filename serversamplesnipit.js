//write a function to retrieve a blob of json
//make an ajax request! use the 'fetch' function.
//need a url to make a request to
//http://rallycoding.herokuapp.com/api/music_albums

/*var fetch = require("node-fetch");

function fetchAlbums() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    //fetch returns a promise, so we need a .then statement to know when it does
        .then(res => res.json())
        .then(json => console.log*(json));
}

fetchAlbums();*/

var fetch = require("node-fetch");

const fetchAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
        
    console.log(json);
}

fetchAlbums();





