var tl = gsap.timeline(
{ scrollTrigger:{
  trigger:'.main',
  // markers:true,
  start:"50% 50%",
  end:"150% 50%",
  scrub:2,
  pin:true
}});

tl
.to('.center-p',{
  height:"100vh",
},'a')
.to(".top-p",{
  top:'-50%',
} ,'a')
.to(".top-p h1",{
  bottom:'-50%',
} ,'a')
.to(".bottom-p",{
  bottom:'-50%',
} ,'a')
.to(".bottom-p h1",{
  bottom:'-50%',
} ,'a')