const hoverBtn = document.querySelector('.hoverBtn');
const hoverBtnImg = document.querySelector('.hoverBtnImg');

hoverBtn.addEventListener('click', function (){
    window.scrollTo({top: 0, behavior: 'smooth'});
});