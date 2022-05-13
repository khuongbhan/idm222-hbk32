
import {navClick} from "./main-nav/nav-global.js";
import {reportWindowSize} from "./main-nav/nav-global.js";
import {heroPinning} from "./animations/scroll-trigger.js";
import {projectsFade} from "./animations/scroll-trigger.js";
import {heroTextFades} from "./animations/scroll-trigger.js";
import {aboutPageAnimation} from "./animations/scroll-trigger.js";
import {resumeAnimation} from "./animations/scroll-trigger.js";
import {horizontalScroll} from "./horizontal-scroll.js";
import {fancyBox} from "./fancy-box/fancy-box.js";


reportWindowSize();
navClick();
heroPinning();
projectsFade();
heroTextFades();
aboutPageAnimation();
resumeAnimation();
horizontalScroll();
fancyBox();
