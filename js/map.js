const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
        latitude: 33.450701,
        longitude: 126.570667,
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

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