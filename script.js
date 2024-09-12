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

function scrollToSection(sectionId, offset = 50) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Apply offset after the smooth scroll to create a gap
        setTimeout(() => {
            const scrolledY = window.scrollY;

            // Adjust scroll by subtracting the desired offset
            if (scrolledY) {
                window.scrollBy({ top: -offset, behavior: 'smooth' });
            }
        }, 100); // Set a small delay for smooth scroll to finish
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 0; // Adjust this value as needed to set the distance above the section
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

