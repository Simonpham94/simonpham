//variables
const burger = document.getElementById('burger'); //menu slider
const burgerLine3 = document.querySelector('#burger div:nth-child(3)');
const backToTop = document.getElementById('back-to-top');


const typedTextSpan = document.querySelector(".typed-text");//self-typing text
const cursorSpan = document.querySelector(".cursor");
const textArray = [" A Front-end Web Developer", " A Hufflepuff"];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

const jumbotronSection = $('#jumbotron');
const projectsSection = $('#projects');
const aboutSection = $('#about');
const dotScroll = $('#dot-scroll');
const jumbotronDot = $('#jumbotron-dot');
const projectsDot = $('#projects-dot');
const aboutDot = $('#about-dot');

//functions

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
function scrollSpy() {
  // console.log(dotScroll.offset().top)
  if(dotScroll.offset().top < 1522) {
    jumbotronDot.addClass('active');
    projectsDot.removeClass('active');
    aboutDot.removeClass('active');
  } else if(1522<dotScroll.offset().top<2726) {
    projectsDot.addClass('active');
    jumbotronDot.removeClass('active');
    aboutDot.removeClass('active');
  }
  if (2726<dotScroll.offset().top){
    aboutDot.addClass('active');
    projectsDot.removeClass('active');
    jumbotronDot.removeClass('active');
  }
}
scrollSpy()


//event listeners
burger.addEventListener('click', ()=>{
    // Burger anmimation
    burger.classList.toggle('toggle');
    burgerLine3.classList.toggle('short');
     
    //Nav links animation
    navLinks.classList.toggle('nav-active');

})

backToTop.addEventListener('mouseenter', ()=>{
    //show square brackets
    backToTop.classList.add('show');
})
backToTop.addEventListener('mouseleave', ()=>{
    //hide square brackets
    backToTop.classList.remove('show');
})

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    //self-typing text
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

window.addEventListener('scroll', scrollSpy);


//tag cloud
let settings = {
  
    //height of sphere container
    height: 350,
    //width of sphere container
    width: 350,
    //radius of sphere
    radius: 120,
    //rotat1on speed
    speed: .5,
    //sphere rotations slower
    slower: .9,
    //delay between update position
    timer: 4,
    //dependence of a font size on axis Z
    fontMultiplier: 15,
    //tag css stylies on mouse over
    hoverStyle: {
        border: 'none',
        color: '#fff'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
        border: '',
        color: ''
    }
    };
    $(document).ready(function(){
        $('#tagcloud').tagoSphere(settings);
});

let smallScreenSize = window.matchMedia('(max-width: 500px');
let xtraSmallScreenZie = window.matchMedia('(max-width: 350px');
if(smallScreenSize.matches) {
    settings.height = 250, 
    settings.width = 250, 
    settings.radius = 86
} 

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//smooth scrolling
$('#nav li a').on('click', function(e) {
  if(this.hash !== '') {
      e.preventDefault();
      const hash = this.hash; 
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800);
  }
})

$('#back-to-top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
  scrollTop: 0
  }, 800);
  
})