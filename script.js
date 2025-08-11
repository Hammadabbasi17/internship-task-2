const menu = document.getElementById('toggle-btn');
const navlinks = document.getElementById('navlinks');
menu.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
    if(navlinks.className == 'active'){
      document.getElementById("bar").className = "ri-close-line";
    } else {
      document.getElementById("bar").className = "ri-menu-line";

    }

});