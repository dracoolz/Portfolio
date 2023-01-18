//css after preload
window.onload = function () {
  setTimeout(navbarSection, 5300);
  setTimeout(mainTitle, 6200);
  setTimeout(blackBar, 6500);
  setTimeout(navurlSection, 6520);
  setTimeout(bottomText, 7700);
  setTimeout(showRoomItems, 8000);
  setTimeout(visiblity, 8000);
}
//Div will appeare after 1 sec the window is loaded fully
function navbarSection() {
//navbar section
  document.querySelector('.navbar .indonesia').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .indonesia').style.display = "block";
  document.querySelector('.navbar .home').style.animation = "slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .home').style.display = "block";
  document.querySelector('.navbar .porto').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .porto').style.display = "block";
}

function mainTitle() {
  document.querySelector('.title1 h1').style.animation = "title-slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.title1 h1').style.display = "block";
}

function blackBar() {
  document.querySelector('.navurl').style.animation = "scale-in-ver-center 0.5s ease-in both"
  document.querySelector('.navurl').style.display = "flex"
}

function navurlSection() {
  document.getElementById('work').style.animation = "slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('work').style.display = "block";
  document.getElementById('about').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('about').style.display = "block";
  document.getElementById('contact').style.animation = "slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('contact').style.display = "block";
  document.querySelector('.navurl .build').style.animation = "slide-up 2.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navurl .build').style.display = "block";
}

function bottomText() {
  document.querySelector('.navfoot .footer-one').style.animation = "opacity-slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-one').style.display = "block";
  document.querySelector('.navfoot .footer-two').style.animation = "slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-two').style.display = "block";
}

function visiblity() {
  document.querySelector('.title1').style.overflow = "visible";
}

function showRoomItems() {
  document.querySelector('.showroom').style.opacity = 1;
}

// === paralax effect ===
const hiddenBox = document.querySelectorAll('.hidden');
const appearOption = { 
  threshold: 0.5
};

const Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
}, appearOption);

hiddenBox.forEach(el => Observer.observe(el));
