const showBtn = document.getElementById('show');
const NotshowBtn = document.getElementById('not-show');
const Menu = document.getElementById('menu');



showBtn.addEventListener('click', ()=>{
    Menu.classList.add('open')
})
NotshowBtn.addEventListener('click', ()=>{
    Menu.classList.toggle('open')
})