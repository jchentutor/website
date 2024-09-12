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
    const header = document.querySelector('header'); // Select the header element

    if (section) {
        // Hide the header by setting its opacity or display
        header.style.transition = 'opacity 0.5s'; // Optional: smooth transition
        header.style.opacity = '0'; // Hides the header by making it transparent
        
        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });

        // Optionally, you can show the header again after the scroll completes
        setTimeout(() => {
            header.style.opacity = '1'; // Show the header again after scrolling
        }, 1000); // Delay to re-show the header after 1 second
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

