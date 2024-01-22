const showMoreBtn = document.querySelector('.content-btn');
const imgDiv = document.querySelector(".content-img-div");
let pageToFetch = 1;
let INFINITY_SCROLL_ON = true;
let INFINITY_SCROLL_OFF = false;
let flag = INFINITY_SCROLL_OFF;
let timer;

showMoreBtn.addEventListener('click', function (){
    if(!flag) {
        fetchImages(pageToFetch++);
        window.addEventListener('scroll', infinityScroll);
        flag = INFINITY_SCROLL_ON;

        showMoreBtn.innerText = 'Stop';
    }else {
        window.removeEventListener('scroll', infinityScroll);
        flag = INFINITY_SCROLL_OFF;

        showMoreBtn.innerText = 'Show more';
    }
});

async function fetchImages(pageNum) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=12');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    for(let i=0; i<datas.length; i+=3) {
        imgDiv.innerHTML +=
            "<div class='content-img-div-row'>" +
            "<img src=" + datas[i].download_url + " alt=''>" +
            "<img src=" + datas[i+1].download_url + " alt=''>" +
            "<img src=" + datas[i+2].download_url + " alt=''>" +
            "</div>"
    }
}

function infinityScroll() {
    if (window.innerHeight + document.documentElement.scrollTop + 750 >= document.documentElement.offsetHeight) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fetchImages(pageToFetch++);
            }, 500);
        }
    }
}