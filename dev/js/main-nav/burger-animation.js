import {gsap} from "gsap";

var burgerSpeed = 0.25;

gsap.set(".lines",{transformOrigin:"center"}); 

let burgerTimeline = gsap.timeline();

burgerTimeline.to("#long-line",{duration:burgerSpeed, rotation: -45,y:10,stroke:"#fff"},"burgerToX")
              .to("#short-line",{duration:burgerSpeed, rotation: 45,y:-10,stroke:"#fff"},"burgerToX");

// $("#burger-container").on("click", function(){
//     console.log("click on burger")
// });