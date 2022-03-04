// import {gsap} from "gsap";

var burgerSpeed = 0.5;

gsap.set(".lines",{transformOrigin:"center"}); 

let burgerTimeline = gsap.timeline({pause:true});

burgerTimeline.addLabel("burgertoMinus")
.to("#long-line",{duration:burgerSpeed, opacity:0,y:10},"burgertoMinus")
              .to("#short-line",{duration:burgerSpeed,y:-10},"burgertoMinus");

// $("#burger-container").on("click", function(){
//     console.log("click on burger")
// });