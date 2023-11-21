// /* =============
//     import and register plugins
// ============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


// /* =============
//     parallax
// ============= */


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
              .from("#proj-11",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj11")
              .from("#proj-12",{duration: projectFadeTime,alpha:0,yPercent:-10}, "proj12")

export function projectsFade(){
    ScrollTrigger.create({
        animation: projectFadesIn,
        trigger: "#proj-1",
        start: "center 70%"
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
.from("#rotate-button",{duration:drawOutSVG, alpha: 0,ease:"power2.easeInOut"},"buttonAppears")

export function heroTextFades(){
    ScrollTrigger.create({
        animation: heroTextFadesIn,
        trigger: "#large-text",
        start: "center 61%"
        // markers: true
    });
}

// /* =============
//     application index > text fades in
// ============= */ 

var heroTextFadesInApplication = gsap.timeline();
var largeTextFadeTimeApplication = .75;

heroTextFadesInApplication.from("#large-text-application",{duration:largeTextFadeTimeApplication,alpha: 0,translateX:"-10%",delay:1.75,ease:"power1.out"},"fadeIn")
.from("#rotate-button-application",{duration:drawOutSVG, alpha: 0,ease:"power2.easeInOut"},"buttonAppears")
.from("#featured-application",{duration:largeTextFadeTime,translateX:"10%", alpha: 0,ease:"power2.easeInOut"},"afterButton")

export function heroTextFadesApplication(){
    ScrollTrigger.create({
        animation: heroTextFadesInApplication,
        trigger: "#large-text-application",
        start: "center 61%"
        // markers: true
    });
}

// /* =============
//     about > fade in
// ============= */

var aboutPageAnim = gsap.timeline();

aboutPageAnim.from("#portrait-me",{duration:largeTextFadeTime,alpha: 0,delay:1,translateY:"10%",ease:"power1.out"},"typeWriterPlaying")
.from("#curvy-arrow",{duration:projectFadeTime,drawSVG: 0,alpha: 0,translateY:"10%",ease:"power1.easeInOut"},"typeWriterPlayingDone")
.from("#parents-text",{duration:projectFadeTime,alpha: 0,translateX:"-10%",ease:"power1.easeInOut"},"typeWriterPlayingDone")
.from("#about-p1",{duration:drawOutSVG,alpha: 0,translateY:"-3%",ease:"power1.easeInOut"},"-=1")
.from("#about-p2",{duration:drawOutSVG,alpha: 0,translateY:"-3%",ease:"power1.easeInOut"},"-=.75")
.from("#about-p3",{duration:drawOutSVG,alpha: 0,translateY:"-3%",ease:"power1.easeInOut"},"-=.5")
.from("#about-spotify",{duration:drawOutSVG,alpha: 0,translateY:"-3%",ease:"power1.easeInOut"},"-=.25")


export function aboutPageAnimation(){
    ScrollTrigger.create({
        animation: aboutPageAnim,
        trigger: "#about-container-top",
        start: "top 61%"
        // markers: true
    });
}

var resumeAnim = gsap.timeline();

resumeAnim.from("#resume-section-name",{duration: largeTextFadeTime,alpha:0,translateY:"-10%",ease:"power1.out"},"resumeFades")
.from("#resume-left",{duration: largeTextFadeTime,alpha:0,translateY:"-3%",ease:"power1.out"},"resumeContent")
.from("#resume-right",{duration: largeTextFadeTime,alpha:0,translateY:"3%",ease:"power1.out"},"resumeContent")


export function resumeAnimation(){
    ScrollTrigger.create({
        animation: resumeAnim,
        trigger: "#resume-container",
        start: "top 90%"
        // markers: true
    });
}


// /* =============
//     contact > fade in
// ============= */

var contactPageAnim = gsap.timeline();

contactPageAnim.from("#talk-more",{duration:largeTextFadeTime,alpha:0,translateY:"-10%",ease:"power1.easeInOut"},"contactLoads")
.from("#contact-p",{duration:drawOutSVG,alpha:0,translateX:"-7%",ease:"power2.easeInOut"},"-=.75")
.from("#contact-mail-p",{duration:drawOutSVG,alpha:0,translateX:"-7%",ease:"power2.easeInOut"},"-=.5")
.from("#contact-form-p",{duration:drawOutSVG,alpha:0,translateX:"-7%",ease:"power2.easeInOut"},"-=.25")
.from("#form",{duration:drawOutSVG,alpha:0,translateX:"-7%",ease:"power2.easeInOut"},"-=.05")

export function contactPageAnimation(){
    ScrollTrigger.create({
        animation: contactPageAnim,
        trigger: "#about-container-top",
        start: "top 61%"
        // markers: true
    });
}