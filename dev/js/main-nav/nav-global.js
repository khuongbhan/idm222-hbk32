import { gsap } from "gsap"
import {burgerTimeline} from './burger-animation'

var canISeetheMenu = false;

var navHeight = $("#main-nav").outerHeight();
console.log(navHeight);

//setting nav height

 gsap.set("#main-nav",{y:-navHeight});


var mainNavTimeline = gsap.timeline({paused:true})

    mainNavTimeline.to("#main-nav", {duration:0.85, y:0})


function hideShowMainNav(){
    if(canISeetheMenu === false){

        burgerTimeline.play("burgertoX");
        mainNavTimeline.play();
        canISeetheMenu = true;

    }
    else{
        burgerTimeline.reverse();
        mainNavTimeline.reverse();
        canISeetheMenu = false;

    }
}

$("#burger").on("click", hideShowMainNav);

var menuBackground = document.querySelector('#main-nav');
window.onclick = function(event){
    
    //hiding menu when clicked anywhere outside of the button areas
    if(event.target == menuBackground){
        hideShowMainNav();
    }
    
}

//add a listener to the window for every time it's being resized
window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    if (canISeetheMenu === false){
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav",{y:-navHeight});
    }
}

