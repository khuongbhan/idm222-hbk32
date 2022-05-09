import { gsap } from "gsap";

// Define a burger speed
const burgerSpeed = 0.5;

// Set line transformation
gsap.set(".lines",{transformOrigin:"center"}); 

// Define a burger timeline
export const burgerTimeline = gsap.timeline({paused:true});

// Define timeline properties
burgerTimeline.addLabel("burgertoMinus")
.to("#long-line",{duration:burgerSpeed, opacity:0,y:10},"burgertoMinus")
.to("#short-line",{duration:burgerSpeed,y:-10},"burgertoMinus")
.addPause();

// $("#burger-container").on("click", function(){
//     console.log("click on burger")
// });