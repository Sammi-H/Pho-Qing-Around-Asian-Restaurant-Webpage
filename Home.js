// DYNAMISK FUNKTION

window.plusSlides = plusSlides;
window.showSlides = showSlides;
window.currentSlide = currentSlide;

let lastSlideIndex = 0;
let slideTimeout; // timeout ID

function showSlides(slideIndex = 0) {
  let slides = document.getElementsByClassName("mySlides");
  let thumbnails = document.getElementsByClassName("demo");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    thumbnails[i].classList.remove("active");
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go to last slide
  } else if (slideIndex >= slides.length) {
    slideIndex = 0; // Go to first slide
  }

  slides[slideIndex].style.display = "block";
  thumbnails[slideIndex].classList.add("active");
  lastSlideIndex = slideIndex;

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => showSlides(slideIndex + 1), 3000);
}

function plusSlides(n) {
  let slideIndex = lastSlideIndex + n;
  let slides = document.getElementsByClassName("mySlides"); //DOM slide access
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; //last side
    lastSlideIndex = slideIndex
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0; //go first slide
    lastSlideIndex = slideIndex
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  const slideIndex = n - 1;
  showSlides(slideIndex);
}

showSlides();

export const menuBtn = document.querySelector(".menu-btn");
export const menu = document.querySelector("#main-menu");

document.addEventListener("DOMContentLoaded", () => {
  
  menuBtn.addEventListener("click", (event) => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("show");  
    event.stopPropagation(); 
  });

 
  document.addEventListener("click", (event) => {
   
    if (!menu.contains(event.target) && event.target !== menuBtn) {
      menu.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});

export {showSlides,plusSlides, currentSlide }