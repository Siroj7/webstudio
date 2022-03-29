window.addEventListener('DOMContentLoaded', () =>{
    let closeBtn = document.querySelector('.menu-close');
    let menu = document.querySelector('menu'),
        toggle = document.querySelector('.toggle');



    closeBtn.addEventListener('click', ()=>{
        menu.style.display = 'none';
    });

    toggle.addEventListener('click', ()=>{
        menu.style.display = 'block';
    });

});