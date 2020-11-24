import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const titleTL = gsap.timeline();

            // Dash & Spedometer Circle
titleTL.to("#Rectangle", {duration: .1, alpha: 0})
        .to("#streak-container", {duration: .1, alpha: 0})
        .to("#title", {duration: .1, alpha: 0})
        .to("#title-streaks", {duration: .1, alpha: 0})
        //.to("#box-fill", {duration: 1, alpha: 0})

        // Window
        .from("#box", {duration: 1, drawSVG: "0%"})
        .to("#box", {duration: 1.5, scale: 4, transformOrigin: "center"}, "zoom")
        .from("#box-fill", {duration: 1.25, alpha: 0, scale: .25, transformOrigin: "center"}, "zoom")

        // Monsters
        .from("#m-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#o-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#n-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#s-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#t-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#t2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#e-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#r-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#r2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#s2-monsters", {duration: .15, drawSVG: "0%", ease: "none"})

        .to("#m-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#o-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#n-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#s-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#t-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#t2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#e-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#r-monsters", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#r2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#s2-monsters", {duration: .15, drawSVG: "0%", ease: "none"})

        // Feathers
        .from("#f-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#f2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#e-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#a-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#a2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#t-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#t2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#h-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#h2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#h3-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e3-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e4-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#r-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#r2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#s-feathers", {duration: .15, drawSVG: "0%", ease: "none"})

        .to("#f-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#f2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#e-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#a-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#a2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#t-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#t2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#h-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#h2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#h3-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e3-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e4-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#r-feathers", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#r2-feathers", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#s-feathers", {duration: .15, drawSVG: "0%", ease: "none"})

        // Fierce
        .from("#f-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#f2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#i-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#i2-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#r-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#r2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#c-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e3-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .from("#e4-fierce", {duration: .05, drawSVG: "0%", ease: "none"})

        .to("#f-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#f2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#i-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#i2-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#r-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#r2-fierce", {duration: .05, drawSVG: "0%", ease: "none"})
        .to("#c-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e3-fierce", {duration: .15, drawSVG: "0%", ease: "none"})
        .to("#e4-fierce", {duration: .05, drawSVG: "0%", ease: "none"})


            
            

export function titleAnimation(){
    return titleTL
}