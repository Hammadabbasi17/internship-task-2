const menu = document.getElementById('toggle-btn');
const navlinks = document.getElementById('navlinks');
menu.addEventListener('click', () => {
  navlinks.classList.toggle('active')
  if (navlinks.className == 'active') {
    document.getElementById("bar").className = "ri-close-line";
  } else {
    document.getElementById("bar").className = "ri-menu-line";

  }

});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    let targetWidth = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = targetWidth + "%";
    }, 200); // Delay for smoother start
  });

});
function submit() {



  let form = document.getElementById('emailform');
  form.addEventListener('submit', (e) => {
    if (!form.value.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email');

    }

  })
}