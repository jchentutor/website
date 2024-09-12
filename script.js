document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Initial display
    slides[currentSlide].classList.add("active");
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var signin = document.getElementById('sign-in');
  var booktrial = document.getElementById('book-trial')
  if (window.scrollY > 50) {
    header.classList.add('scroll');
    header.classList.remove('top');
    signin.classList.add('scroll');
    signin.classList.remove('top');
    booktrial.classList.add('scroll');
    booktrial.classList.remove('top');
  } else {
    header.classList.add('top');
    header.classList.remove('scroll');
    signin.classList.add('top');
    signin.classList.remove('scroll');
    booktrial.classList.add('top');
    booktrial.classList.remove('scroll');
  }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        smoothScroll(section, 2000); // 2000ms = 2 seconds scroll
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
}
