let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      pin: true,
      start: "top top",
      end: "+=1000",
      scrub: 1,
    }
  });
tl.to('#right1',{
    duration:6,
    ease:Expo.easeInOut,
    x:-350,
},"")
tl.to('#left',{
    duration:6,
    ease:Expo.easeInOut,
    opacity: 0,
    x:-400,
},"-=6")
tl.to('#right :nth-child(1)',{
    duration:3,
    ease:Expo.easeInOut,
    y:-95,
},"+=6")
tl.to('#right :nth-child(6)',{
    duration:3,
    ease:Expo.easeInOut,
    y:220,
},"-=3")
tl.to('#right :nth-child(2)',{
    duration:3,
    ease:Expo.easeInOut,
    y:-70,
},"-=3")
tl.to('#right :nth-child(5)',{
    duration:3,
    ease:Expo.easeInOut,
    y:160,
},"-=3")
tl.to('#right :nth-child(4)',{
    duration:3,
    ease:Expo.easeInOut,
    y:90,
},"-=3")
tl.to('#right :nth-child(3)',{
    duration:3,
    ease:Expo.easeInOut,
    y:30,
},"-=3")




tl.to('#right :nth-child(3)',{
    duration:3,
    ease:Expo.easeInOut,
    y:0,
},"+=0")
tl.to('#right :nth-child(4)',{
    duration:3,
    ease:Expo.easeInOut,
    y:0,
},"-=3")
tl.to('#right :nth-child(5)',{
    duration:3,
    ease:Expo.easeInOut,
    y:0,
},"-=3")
tl.to('#right :nth-child(2)',{
    duration:3,
    ease:Expo.easeInOut,
    y:0,
},"-=3")
tl.to('#right :nth-child(6)',{
    duration:3,
    ease:Expo.easeInOut,
    y:0,
},"-=3")
tl.to('#right :nth-child(1)',{
    duration:3,
    ease:Expo.easeInOut,
    y:-0,
},"-=3")


tl.to('#right1',{
    duration:6,
    ease:Expo.easeInOut,
    x:-800,
    opacity:0,
},"+=1.5")

tl.to('#scroll',{
    duration:10,
    ease:Expo.easeInOut,
    x:-1520
})

tl.to('#scroll',{
    duration:10,
    ease:Expo.easeInOut,
    x:-3000,
    opacity:0
})
