// /* =============
//     parallax
// ============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function heroPinning(){
    ScrollTrigger.create({
        trigger: ".project-hero",
        pin: true,
        start: "top top",
        //end:"100vh",
        pinSpacing: false,
        // markers: true,
        scrub: true
    });
}

// /* =============
//     projects page > fade in
// ============= */

var projectFadesIn = gsap.timeline();
var projectFadeTime = .5;

projectFadesIn.from("#proj-1",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj1")
              .from("#proj-2",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj2")
              .from("#proj-3",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj3")
              .from("#proj-4",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj4")
              .from("#proj-5",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj5")
              .from("#proj-6",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj6")
              .from("#proj-7",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj7")
              .from("#proj-8",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj8")
              .from("#proj-9",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj9")
              .from("#proj-10",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj10")

export function projectsFade(){
    ScrollTrigger.create({
        animation: projectFadesIn,
        trigger: "#proj-1",
        start: "center 61%"
        // markers: true
    });
}
