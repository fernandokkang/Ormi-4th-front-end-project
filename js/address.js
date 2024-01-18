let geocoder = new kakao.maps.services.Geocoder();
let coord = new kakao.maps.LatLng(33.450701, 126.570667);
const addr = document.querySelector('#address');
const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
        console.log(result[0].address.address_name);
        addr.innerHTML = "<span>"+result[0].address.address_name+"</span>"
    }
}

geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);