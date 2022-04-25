import { gsap } from "gsap";
import $ from "jquery";
import {burgerTimeline} from './burger-animation';

export var canISeetheMenu = false;

var navHeight = $("#main-nav").outerHeight();
console.log(navHeight);

//setting nav height

 gsap.set("#main-nav",{y:-navHeight});


 export const  mainNavTimeline = gsap.timeline({paused:true})

    mainNavTimeline.to("#main-nav", {duration:0.5, y:0})

// function to handle the showing and hiding of the main-nav

export function hideShowMainNav(){

    console.log("show me the menu!");
    console.log(canISeetheMenu + " can you see the menu value");


    if(canISeetheMenu === false){

        burgerTimeline.play("burgertoMinus");
        mainNavTimeline.play();
        canISeetheMenu = true;

    }
    else{
        burgerTimeline.reverse();
        mainNavTimeline.reverse();
        canISeetheMenu = false;

    }
}
export function navClick(){
    $("#burger").on("click", hideShowMainNav);
}

var menuBackground = document.querySelector("#main-nav");
export function menuBgSelect() {
    window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
    }
}

//add a listener to the window for every time it's being resized


export function reportWindowSize(){
    if (canISeetheMenu === false){
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav",{y:-navHeight});
    }

    window.addEventListener('resize', reportWindowSize);
}

