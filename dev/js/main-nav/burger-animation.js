// import {gsap} from "gsap";

var burgerSpeed = 0.5;

gsap.set(".lines",{transformOrigin:"center"}); 

let burgerTimeline = gsap.timeline({pause:true});

burgerTimeline.to("#long-line",{duration:burgerSpeed, rotation: -45,y:10},"burgerToX")
              .to("#short-line",{duration:burgerSpeed, rotation: 45,y:-10},"burgerToX");

// $("#burger-container").on("click", function(){
//     console.log("click on burger")
// });