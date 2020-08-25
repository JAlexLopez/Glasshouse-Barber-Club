function addMarker(map) {
    var glasshouseMarker = new H.map.Marker({ lat: 33.982709, lng: -117.339323 });
    map.addObject(glasshouseMarker);
}

function moveMapToRiverside(map) {
    map.setCenter({ lat: 33.982709, lng: -117.339323 });
    map.setZoom(16);
}

var platform = new H.service.Platform({
    apikey: 'jOHJ-Z4Au-UnL3-x5iv11B30XSevt27X7Ox3lV3QZCk'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('mapdiv'),
    defaultLayers.vector.normal.map, {
        center: { lat: 50, lng: 5 },
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1
    });

window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);
window.onload = function() {
    addMarker(map);
    moveMapToRiverside(map);
}