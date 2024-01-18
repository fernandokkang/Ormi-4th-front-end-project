let geocoder = new kakao.maps.services.Geocoder();

const coord = new kakao.maps.LatLng(latitude, longitude);
const addr = document.querySelector('#address');

const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {

        let detailAddr = !!result[0].road_address ?
            result[0].road_address.address_name : result[0].address.address_name;

        addr.innerHTML = "<span>"+detailAddr+"</span>"
    }
}
geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);