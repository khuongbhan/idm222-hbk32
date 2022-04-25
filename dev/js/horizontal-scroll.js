gsap.registerPlugin(ScrollTrigger) // Register plugin

// Get the container to pin
// let containerName = "featured";
// let container = document.getElementById(containerName);

// Get project cards
let cards = gsap.utils.toArray('.home-proj-card');

// Get prescroll text
const prescrollText = document.getElementById("text-prescroll");

export const  horizontalScroll = gsap.to(
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
                let progress = self.progress.toFixed(3);
                prescrollText.style.opacity = 1 - Math.min(2.5 * progress, 1);
            },
            snap: 1 / (cards.length - 1)
            // end: () => "+=" + document.querySelector("#featured").offsetWidth // End if all cards are visited
        }
    }
);


