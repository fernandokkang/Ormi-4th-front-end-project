const container = document.querySelector('#map'); //지도를 담을 영역의 DOM 레퍼런스

let latitude = DEFAULT_MAP_LATITUDE;
let longitude = DEFAULT_MAP_LONGITUDE;

const options = { //지도를 생성할 때 필요한 기본 옵션

        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: DEFAULT_MAP_LEVEL //지도의 레벨(확대, 축소 정도)
    };

let map = new kakao.maps.Map(container, options);