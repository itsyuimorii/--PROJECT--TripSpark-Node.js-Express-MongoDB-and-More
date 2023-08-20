console.log("before parsing..")
console.log(document.getElementById('map').dataset.locations)

const locations = JSON.parse(document.getElementById('map').dataset.locations)

console.log(locations)
mapboxgl.accessToken = 'pk.eyJ1IjoieXVpbW9yaWkiLCJhIjoiY2xsam5teHczMWQ5bzNmcGJmaGZkN2ZwdiJ9.PStK5RpEzOikhEZ7nEpzyA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yuimorii/clljpug4o026p01qn7y6t5t55',

    scrollZoom: false

    // center: [-115.5704680739651, 51.1794359990721],
    // zoom: 12
});



const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    })
        .setLngLat(loc.coordinates)
        .addTo(map);

    // Add popup
    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
});
