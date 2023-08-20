
const locations = JSON.parse(document.getElementById('map').dataset.locations)

console.log(locations)

mapboxgl.accessToken = 'pk.eyJ1IjoieXVpbW9yaWkiLCJhIjoiY2xsam5teHczMWQ5bzNmcGJmaGZkN2ZwdiJ9.PStK5RpEzOikhEZ7nEpzyA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    // center: [-122.662323, 45.523751], // starting position
    // zoom: 12
});
