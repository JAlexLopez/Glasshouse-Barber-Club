// Initialize and add the map
function initMap() {
    // The location of Uluru
    var glasshouse = { lat: 33.982, lng: -117.339 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: glasshouse });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: glasshouse, map: map });
}