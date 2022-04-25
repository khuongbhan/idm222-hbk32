// /* =============
//     parallax
// ============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//var parallax = document.querySelector(".hero-img")

// if(parallax){
//     gsap.to(".hero-img",{scrollTrigger:{
//         trigger: ".hero-img",
//         pin: true,
//         pinSpacing: false,
//         start: "top top",
//         // end: "top 5%",
//         markers: true,
//         scrub: true
//     }})
// }

export function heroPinning(){
    ScrollTrigger.create({
        trigger: ".project-hero",
        pin: true,
        start: "top top",
        //end:"100vh",
        pinSpacing: false,
        markers: true,
        scrub: true
    });
}

