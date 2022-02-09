
document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
  $('.menu-mobile').fadeToggle(500);
});

// ----------------------------------
let navbar_tl = gsap.timeline();
navbar_tl.fromTo('nav .nav-links ul li',0.5,{
  yPercent:50,
  opacity:0
},{
  yPercent:0,
  opacity:1,
  stagger:0.1
})
navbar_tl.fromTo('nav .navbar .social-links .social-links--item',0.5,{
  yPercent:50,
  opacity:0
},{
  yPercent:0,
  opacity:1,
  stagger:0.1
},'-=0.5')
// ----------------------------------

let header_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=450",
    scrub: 0.8,
    pin: false,
    markers:false
  }
});

header_tl.to('.hero .img-wrapper img',0.3,
{
  y:'-5rem',
  ease: "power4.inOut"
})

header_tl.to('.hero .paragraph',2.5,{
  y:'-5rem',
  ease: "power4.inOut"
})
header_tl.to('.hero .hero-left-arrow',2.5,{
  x:'-15vw',
  opacity:0,
  ease: "power4.out",
})
header_tl.to('.hero .hero-right-arrow',2.5,{
  x:'15vw',
  opacity:0,
  ease: "power4.out",
},'-=2.5')
header_tl.to('.story #triangle',0.5,{
  y:'-2rem',
  ease: "power4.out",
})

// ----------------------------------

let story_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    start: "top +=65%",
    end: "bottom +=90%",
    scrub: 1,
    pin: false,
    markers:false
  }
});

story_tl.to('.story .txt-wrapper h1',0.3,
{
  y:'-5rem',
  ease: "power4.inOut"
})


story_tl.to('.story .img-wrapper .men-img',0.3,
{
  scale:1.1,
  ease: "power4.inOut"
},'-=0.6')


story_tl.to('.story .img-wrapper .decoration-rotation',8.3,
{
  rotate:'180deg',
  ease: "power4.inOut"
},'-=1')
story_tl.to('.story .txt-wrapper .content p',1.3,
{
  y:'-5rem',
  stagger:0.1,
  ease: "power4.inOut"
},'-=1')

// ----------------------------------
let roadMap_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".road-map",
    start: "top +=80%",
    end: "bottom bottom",
    scrub: 2,
    pin: false,
    markers:true
  }
});

roadMap_tl.from('.road-map .road-map--arrow',
{
  y:'70%',
  ease: "power4.inOut"
})

roadMap_tl.from('.road-map .data-wrapper h3',
{
  y:'100%',
  opacity:0,
  stagger:0.2,
  ease: "power4.inOut"
},'-=0.7')
roadMap_tl.from('.road-map .data-wrapper p',
{
  y:'100%',
  opacity:0,
  stagger:0.2,
},'-=1')
roadMap_tl.from('.road-map .road-map--overlay img',2,
{
  y:'100%',
  ease: "power4.inOut"
},'-=2')
// ----------------------------------

let next_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".next",
    start: "top +=80%",
    end: "bottom bottom",
    scrub: 2,
    pin: false,
    markers:true
  }
});

next_tl.from('.next .bg--left img:nth-child(2)',1.5,{
  y:'-100%',
  ease: "power4.inOut"
})


next_tl.from('.next .bg--right img:nth-child(2)',1.5,{
  y:'-100%',
  ease: "power4.inOut"
},'-=1.3')