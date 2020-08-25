let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.982758, lng: -117.339297 },
        zoom: 10
    });
}