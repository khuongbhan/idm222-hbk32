import { gsap } from "gsap";

// Define main navigation timeline
export const mainNavTimeline = gsap.timeline({paused:true})

// Define main navigation timeline properties
mainNavTimeline.to("#main-nav", {duration:0.5, y:0})
