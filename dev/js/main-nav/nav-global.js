import { gsap } from "gsap";
import $ from "jquery";
import { burgerTimeline } from './burger-animation';
import { mainNavTimeline } from './main-nav';
import { NavigationState } from './nav-state';

// A state holder for navigation panel
export let navState = new NavigationState($("#burger"), burgerTimeline, mainNavTimeline);

function hideMainNav() {
    let navHeight = $("#main-nav").outerHeight();
    gsap.set("#main-nav",{y:-navHeight}); // TODO: This will create a quick disappearance on the screen. Set it as hide by default somehow?
}

function onWindowSizeChange() {
    if (navState || navState.isOpen) {
        hideMainNav();
    }
}

function onWindowClick(event) {
    if (event.target == $("#main-nav")) {
        navState.close();
    }
}

export function initGlobalNav() {
    console.log("Initializing Global Navigation");

    // Setting navigation panel initial position
    hideMainNav();

    // Set up listener for click event on burger
    navState.init();

    // Set listener for navigation panel to close on click
    window.addEventListener("click", onWindowClick);

    // Add a listener to the window for every time it's being resized
    window.addEventListener('resize', onWindowSizeChange);
}


