var burgerSpeed=.5;gsap.set(".lines",{transformOrigin:"center"});let burgerTimeline=gsap.timeline({pause:!0});burgerTimeline.to("#long-line",{duration:burgerSpeed,rotation:-45,y:10},"burgerToX").to("#short-line",{duration:burgerSpeed,rotation:45,y:-10},"burgerToX");var canISeetheMenu=!1,navHeight=$("#main-nav").outerHeight();console.log(navHeight),gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){console.log("show me the menu!"),console.log(canISeetheMenu+" can you see the menu value"),!1===canISeetheMenu?(burgerTimeline.play("burgertoX"),mainNavTimeline.play(),canISeetheMenu=!0):(burgerTimeline.reverse(),mainNavTimeline.reverse(),canISeetheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.85,y:0}),$("#burger").on("click",hideShowMainNav);var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){!1===canISeetheMenu&&(navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize);