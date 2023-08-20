
const locations = JSON.parse(document.getElementById('map').dataset.locations)

console.log(locations)

mapboxgl.accessToken = 'pk.eyJ1IjoieXVpbW9yaWkiLCJhIjoiY2xsamxsZXd0MTQwejNkcjYwbzFscTYzOSJ9.x-BM1dPOqU1AR2jpuqJR7A';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

