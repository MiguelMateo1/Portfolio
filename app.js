const toTopBtn = document.querySelector(".topBtn");

// shows/hide button to top of page on botton of page
window.addEventListener('scroll', () => {

    if (window.scrollY > 350) {
        toTopBtn.classList.add('on');
    } else {
        toTopBtn.classList.remove('on');
    }
})


// Functions to switch the active page
const workBtn = document.getElementById("workBtn");
const playBtn = document.getElementById("playBtn");
const workPage = document.getElementById("workPage");
const playPage = document.getElementById("playPage");

function fadeOut(element) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.display = "none";
    }, 300);
}

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";
    setTimeout(() => {
        element.style.opacity = 1;
    }, 10);
}

function switchPage(page) {
    if (page === "work") {
      workBtn.classList.add("active");
      playBtn.classList.remove("active");
        fadeOut(playPage);
        setTimeout(() => {
            fadeIn(workPage);
        }, 300);
    } else if (page === "play") {
        playBtn.classList.add("active");
        workBtn.classList.remove("active");
        fadeOut(workPage);
        setTimeout(() => {
            fadeIn(playPage);
        }, 300);
    }
}

// Initially, display the "work" page content
switchPage("work");
  
// Add event listeners to the buttons
workBtn.addEventListener("click", function () {
  switchPage("work");
});

playBtn.addEventListener("click", function () {
  switchPage("play");
});
// Function to switch the active page END==========


// nav links toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navUl = document.querySelector('.nav-ul');

  function toggleMenu() {
    menuBtn.classList.toggle('active');
    navUl.classList.toggle('active');
  }

  menuBtn.addEventListener('click', toggleMenu);
  navUl.addEventListener('click', toggleMenu)
});
// nav links toggle END===

  
//  certificats container
const sliderWrapper = document.querySelector(".slider-wrapper");
const images = sliderWrapper.querySelectorAll("img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let slideInterval;

function showImage(index) {
  const slideWidth = sliderWrapper.offsetWidth;
  const displacement = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${displacement}px)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

function startSlideShow() {
  slideInterval = setInterval(nextImage, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}
startSlideShow();

// Pause the slideshow when hovering over the container
sliderWrapper.addEventListener("mouseenter", stopSlideShow);

// Resume the slideshow when the mouse leaves the container
sliderWrapper.addEventListener("mouseleave", () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  startSlideShow();
});
//  certificats container END====