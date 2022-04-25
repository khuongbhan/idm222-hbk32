import {gsap} from "gsap";

var burgerSpeed = 0.5;

gsap.set(".lines",{transformOrigin:"center"}); 

export const burgerTimeline = gsap.timeline({paused:true});

burgerTimeline.addLabel("burgertoMinus")
.to("#long-line",{duration:burgerSpeed, opacity:0,y:10},"burgertoMinus")
              .to("#short-line",{duration:burgerSpeed,y:-10},"burgertoMinus")
              .addPause()

// $("#burger-container").on("click", function(){
//     console.log("click on burger")
// });