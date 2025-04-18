var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.getElementById("btnToggle");
    const navbar = document.getElementById("navbar");
  
    btnToggle.addEventListener("click", function () {
      // Toggle the 'active' class on the navigation bar
      navbar.classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll(".scroll-link");
  
    scrollLinks.forEach(function (scrollLink) {
      scrollLink.addEventListener("click", function (event) {
        event.preventDefault();
  
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });