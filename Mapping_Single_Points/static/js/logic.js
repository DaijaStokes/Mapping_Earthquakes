//  Create the map object with a center and zoom level.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a marker to the map for Los Angeles, California.
L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

 // Add a circle to the map
L.circleMarker([34.0533,-118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);