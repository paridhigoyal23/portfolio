var typed=new Typed(".text",{
    strings:["Frontened Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.addEventListener('DOMContentLoaded', function () {
    const btnToggle = document.getElementById('btnToggle');
    const navbar = document.getElementById('navbar');
  
    btnToggle.addEventListener('click', function () {
      // Toggle the 'active' class on the navigation bar
      navbar.classList.toggle('active');
    });
  });