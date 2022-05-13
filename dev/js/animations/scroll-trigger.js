// /* =============
//     parallax
// ============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


var heroFades = gsap.timeline();

heroFades.to(".project-hero",{alpha:0})

export function heroPinning(){
    ScrollTrigger.create({
        trigger: ".project-hero",
        pin: true,
        start: "top top",
        //end:"100vh",
        pinSpacing: false,
        animation: heroFades,
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


// /* =============
//     index > text n draw
// ============= */

var heroTextFadesIn = gsap.timeline();
var largeTextFadeTime = 1;
var drawOutSVG = .75;

heroTextFadesIn.from("#large-text",{duration:largeTextFadeTime,alpha: 0,translateX:"-10%",delay:1.75,ease:"power1.out"},"fadeIn")
.from("#circle-1",{duration:drawOutSVG,drawSVG: "50% 50%",ease:"power2.easeInOut"},"drawOut")
.from("#circle-2",{duration:drawOutSVG,drawSVG: "50% 50%",ease:"power2.easeInOut"},"drawOut")
.from("#sketch-brand",{duration:drawOutSVG,drawSVG: 0,ease:"power2.easeInOut"},"drawOut")
.from("#sketch-dig",{duration:drawOutSVG,drawSVG: 0,ease:"power2.easeInOut"},"drawOut")
.from("#sketch-front",{duration:drawOutSVG,drawSVG: 0,ease:"power2.easeInOut"},"drawOut")
.from("#sketch-package",{duration:drawOutSVG,drawSVG: 0,ease:"power2.easeInOut"},"drawOut")

export function heroTextFades(){
    ScrollTrigger.create({
        animation: heroTextFadesIn,
        trigger: "#large-text",
        start: "center 61%",
        markers: true
    });
}