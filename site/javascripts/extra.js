document.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.hero-section');
  if (window.scrollY > 50) {
    heroSection.classList.add('scrolled');
  } else {
    heroSection.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".md-nav__link");
  navLinks.forEach(function(link) {
    if (link.textContent.trim() === "Welcome") {
      link.style.display = "none"; // 隐藏 "Welcome" 链接
    }
  });
});