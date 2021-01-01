L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJlc2hwcmluY2UwMDEiLCJhIjoiY2tqZGxzNGZlMTY0bzMycXE5dnRkZmptNSJ9.i9XB2Mjnqog6nFIs888P3A'
}).addTo(Jena);
