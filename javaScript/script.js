var menu_bar = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');

menu_bar.onclick =()=>{
    menu_bar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu_bar.classList.remove('fa-times');
    navbar.classList.remove('active')}