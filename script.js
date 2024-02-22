let toggle_logo = document.querySelector('.toggle_logo')
let menu = document.querySelector('.menu')

toggle_logo.addEventListener('click',function(){
    menu.classList.toggle('is-active')
})