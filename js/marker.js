let markerPosition = new kakao.maps.LatLng(latitude, longitude);

let marker = new kakao.maps.Marker({
    position: markerPosition
})
marker.setMap(map);

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    let latlng = mouseEvent.latLng;
    marker.setPosition(latlng);

    latitude = latlng.getLat();
    longitude = latlng.getLng();

    geocoder.coord2Address(longitude, latitude, callback);
});