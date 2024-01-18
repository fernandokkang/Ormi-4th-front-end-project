const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.subscribe-btn');
const modalCloseBtn = document.querySelector('.modal-btn');

modalOpenBtn.addEventListener('click', function (){
    modal.style.visibility = 'visible';
});

modalCloseBtn.addEventListener('click', function (){
   modal.style.visibility = 'hidden';
});