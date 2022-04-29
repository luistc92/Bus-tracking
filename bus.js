mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc3RjOTIiLCJhIjoiY2wxbjB0OTBwMHA4eTNlbW16NWFsc2V0dyJ9.-N7RWPK1oLn4DPbZWq_LxA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});