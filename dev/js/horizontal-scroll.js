gsap.registerPlugin(ScrollTrigger) // Register plugin

// Get the container to pin
// let containerName = "featured";
// let container = document.getElementById(containerName);



// /* =============
//     home
// ============= */

// Get project cards
let cards = gsap.utils.toArray('.home-proj-card');

// Get prescroll text
const prescrollText = document.getElementById("text-prescroll");

export const horizontalScroll = gsap.to(
    cards,
    {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#featured", // Pin element
            start: "center 55%", //  Determines the starting position of the ScrollTrigger.
            pin: true, // Pinned during the time that the ScrollTrigger is active
            scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true, // Add markers
            onUpdate: self => {
                if (prescrollText) {
                    let progress = self.progress.toFixed(3);
                    prescrollText.style.opacity = 1 - Math.min(2.5 * progress, 1);
                }
            }
            // snap: cards.length > 0? 1 / (cards.length - 1): null
            // end: () => "+=" + document.querySelector("#featured").offsetWidth // End if all cards are visited
        }
    }
);




// /* =============
//     application site index
// ============= */


// Get project cards
let applicationCards = gsap.utils.toArray('.application-proj-card');

// Get prescroll text
const applicationPrescrollText = document.getElementById("application-text-prescroll");

export const horizontalScrollApplication = gsap.to(
    applicationCards,
    {
        xPercent: -100 * (applicationCards.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#featured-application", // Pin element
            start: "center 55%", //  Determines the starting position of the ScrollTrigger.
            pin: true, // Pinned during the time that the ScrollTrigger is active
            scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true, // Add markers
            onUpdate: self => {
                if (applicationPrescrollText) {
                    let progress = self.progress.toFixed(3);
                    applicationPrescrollText.style.opacity = 1 - Math.min(2.5 * progress, 1);
                }
            }
            // snap: cards.length > 0? 1 / (cards.length - 1): null
            // end: () => "+=" + document.querySelector("#featured").offsetWidth // End if all cards are visited
        }
    }
);