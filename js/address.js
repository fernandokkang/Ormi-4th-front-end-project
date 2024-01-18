let geocoder = new kakao.maps.services.Geocoder();

let latitude = 33.450701;
let longitude = 126.570667;

const coord = new kakao.maps.LatLng(latitude, longitude);
const addr = document.querySelector('#address');
const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        addr.innerHTML = "<span>"+result[0].road_address.address_name+"</span>"
    }
}

geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);