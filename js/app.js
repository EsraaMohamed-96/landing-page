
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
    pin: true,
    markers:true
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
})
header_tl.to('.story #triangle',0.5,{
  y:'-2rem',
  ease: "power4.out",
})

// ----------------------------------





let story_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "+=850",
    scrub: 1,
    pin: true,
    markers:true
  }
});

story_tl.to('.story .txt-wrapper h1',0.3,
{
  y:'-5rem',
  ease: "power4.inOut"
})



story_tl.from('.story .txt-wrapper .content p',0.3,
{
  y:'8rem',
  stagger:0.1,
  ease: "power4.inOut"
})

story_tl.to('.story .img-wrapper img',0.3,
{
  scale:1.3,
  ease: "power4.inOut"
},'-=0.3')















// const topTopAniOnScroll = (ele,trigger,duration=0.3,yPosition='-8rem',delay='') =>{

//   let topTopAniOnScroll_tl = new gsap.timeline({
//     scrollTrigger: {
//       trigger:trigger,
//       start: "center center",
//       end: "bottom bottom",
//       scrub: 0.3,
//       pin: false,
//       markers:true
//     }
//   });
  
//   topTopAniOnScroll_tl.to(ele,0.3,{
//     y:'-8rem'
//   },delay)

//   return topTopAniOnScroll_tl

// }

// topTopAniOnScroll('.hero .img-wrapper img','.hero')
// topTopAniOnScroll('.hero','.hero .paragraph')