// shows/hide button to top of page on botton of page
const toTopBtn = document.querySelector(".topBtn");
window.addEventListener('scroll', () => {

    if (window.scrollY > 350) {
        toTopBtn.classList.add('on');
    } else {
        toTopBtn.classList.remove('on');
    }
})
// shows/hide button to top of page on botton of page END==


// popup text box
const navIcon = document.querySelector('.nav-icon');
const popupText = document.querySelector('.popup-text');

navIcon.addEventListener('click', function() {
  popupText.classList.add('show-popup');
  setTimeout(() => {
    popupText.classList.remove('show-popup');
  }, 1500); // Hide the popup after 1.5 seconds (1500ms)
});
// popup text box END==


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
const currentIndexImg = document.querySelector(".current-index");
let currentIndex = 0;
let slideInterval;

function showImage(index) {
  const slideWidth = sliderWrapper.offsetWidth;
  const displacement = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${displacement}px)`;

  currentIndexImg.textContent = `${index + 1}/${images.length}`;
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


//== fade in anaimation (projects)
function fadeInElement(element) {
  element.classList.add('fade-in');
}

const projectContainers = document.querySelectorAll('.project-container');

// display the fisrt ele in projectsContainer on page load
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
      fadeInElement(entries[0].target);
      observer.unobserve(entries[0].target);
  }
});
observer.observe(projectContainers[0]);


const isElementInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight - 200 &&
    rect.bottom >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// adds classlist on scroll
const fadeInOnScroll = () => {
  projectContainers.forEach(projectContainer => {
      if (projectContainer !== projectContainers[0] && isElementInViewport(projectContainer)) {
          fadeInElement(projectContainer);
      }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
// fade in anaimation END ==


//== bg image transition effect
const bgImgElements = document.querySelectorAll('.bg-img');
let lastScrollY = window.scrollY;
const imgWidth = 900;
const initialOpacity = 0.7;

function handleScroll() {
  const currentScrollY = window.scrollY;

  bgImgElements.forEach(bgImg => {
    // Calculate new width and opacity based on scroll
    const newWidth = imgWidth + currentScrollY;
    const newOpacity = Math.max(initialOpacity - currentScrollY / 800, 0);

    // Apply new width and opacity to the styles of the current element
    bgImg.style.width = `${newWidth}px`;
    bgImg.style.opacity = newOpacity.toFixed(2); // Limit opacity to 2 decimal places
  });
}

window.addEventListener('scroll', handleScroll);
// bg image transition effect END==