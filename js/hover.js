const hoverBtn = document.querySelector('.hoverBtn');

hoverBtn.addEventListener('click', function (){
    window.scrollTo({top: 0, behavior: 'smooth'});
});