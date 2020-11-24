import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const titleTL = gsap.timeline();

         // Window
titleTL.from("#box", {duration: 1, drawSVG: "0%"})
        .to("#box", {duration: 1.5, scale: 4, transformOrigin: "center"}, "zoom")
        .from("#box-fill", {duration: 1.25, alpha: 0, scale: .25, transformOrigin: "center"}, "zoom")

        // Words
        .from("#m-monsters", {duration: .1, drawSVG: "0%", ease: "none"})
        .from("#o-monsters", {duration: .1, drawSVG: "0%", ease: "none"})
        .from("#n-monsters", {duration: .1, drawSVG: "0%", ease: "none"})
        .from("#s-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "flash")
        .from("#white", {duration: .02, alpha: 0}, "flash")
        .from("#t-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "flash-off")
        .to("#white", {duration: .02, alpha: 0}, "flash-off")
        .from("#t2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#e-monsters", {duration: .1, drawSVG: "0%", ease: "none"})
        .from("#e2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#r-monsters", {duration: .1, drawSVG: "0%", ease: "none"})
        .from("#r2-monsters", {duration: .05, drawSVG: "0%", ease: "none"})
        .from("#s2-monsters", {duration: .1, drawSVG: "0%", ease: "none"})

        .to("#m-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "a")
        .from("#f-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "a")
        .to("#o-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "b")
        .from("#f2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "b")
        .to("#n-monsters", {duration: .1, drawSVG: "0%", ease: "none"},"c")
        .from("#e-feathers", {duration: .1, drawSVG: "0%", ease: "none"},"c")
        .to("#s-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "d")
        .from("#e2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "d")
        .to("#t-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "e")
        .from("#a-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "e")
        .to("#t2-monsters", {duration: .05, drawSVG: "0%", ease: "none"}, "f")
        .from("#a2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "f")
        .to("#e-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "t")
        .from("#t-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "g")
        .to("#e2-monsters", {duration: .05, drawSVG: "0%", ease: "none"}, "h")
        .from("#t2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "h")
        .to("#r-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "i")
        .from("#h-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "i")
        .to("#r2-monsters", {duration: .05, drawSVG: "0%", ease: "none"}, "j")
        .from("#h2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "j")
        .to("#s2-monsters", {duration: .1, drawSVG: "0%", ease: "none"}, "k")
        .from("#h3-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "k")

        .from("#e3-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "l")
        .from("#f-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "l")
        .to("#white", {duration: .02, alpha: 1}, "l")
        .from("#e4-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "m")
        .from("#f2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "m")
        .to("#f-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "m")
        .to("#white", {duration: .02, alpha: 0}, "m")
        .from("#r-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "n")
        .from("#i-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "n")
        .to("#f2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "n")
        .from("#r2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "o")
        .from("#i2-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "o")
        .to("#e-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "o")
        .from("#s-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "p")
        .from("#e-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "p")
        .to("#e2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "p")

        .to("#a-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "q")
        .from("#e2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "q")
        .to("#a2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "r")
        .from("#r-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "r")
        .to("#t-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "s")
        .from("#r2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "s")
        .to("#t2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "u")
        .from("#c-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "u")
        .to("#h-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "v")
        .from("#e3-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "v")
        .to("#h2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "w")
        .from("#e4-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "w")
        .to("#h3-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "x")
        .to("#f-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "x")
        .to("#e3-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "y")
        .to("#f2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "y")
        .to("#e4-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "z")
        .to("#i-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "z")
        .to("#r-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "a2")
        .to("#i2-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "a2")
        .to("#r2-feathers", {duration: .05, drawSVG: "0%", ease: "none"}, "b2")
        .to("#e-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "b2")
        .to("#s-feathers", {duration: .1, drawSVG: "0%", ease: "none"}, "c2")
        .to("#e2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "c2")
        .to("#r-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "d2")
        .from("#h-hunt2", {duration: .1, drawSVG: "0%", ease: "none"}, "d2")
        .to("#r2-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "e2")
        .from("#h2-hunt2", {duration: .05, drawSVG: "0%", ease: "none"}, "e2")
        .to("#c-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "f2")
        .from("#h3-hunt2", {duration: .1, drawSVG: "0%", ease: "none"}, "f2")
        .to("#e3-fierce", {duration: .1, drawSVG: "0%", ease: "none"}, "g2")
        .from("#u-hunt2", {duration: .1, drawSVG: "0%", ease: "none"}, "g2")
        .to("#e4-fierce", {duration: .05, drawSVG: "0%", ease: "none"}, "h2")
        .from("#n-hunt2", {duration: .1, drawSVG: "0%", ease: "none"}, "h2")
        .from("#t-hunt2", {duration: .1, drawSVG: "0%", ease: "none"}, "i2")
        .to("#white", {duration: .04, alpha: 1}, "i2")
        .from("#t2-hunt2", {duration: .05, drawSVG: "0%", ease: "none"}, "j2")
        .to("#white", {duration: .04, alpha: 0}, "j2")


        // Title
        .from("#t-the", {duration: .05, drawSVG: "0%"})
        .from("#t2-the", {duration: .05, drawSVG: "0%"})
        .from("#h-the", {duration: .1, drawSVG: "0%"}, "flash2")
        .to("#white", {duration: .05, alpha: 1}, "flash2")
        .from("#e-the", {duration: .1, drawSVG: "0%"}, "flash2-off")
        .to("#white", {duration: .05, alpha: 1}, "flash2-off") 
        .from("#r-ress", {duration: .1, drawSVG: "0%"})
        .from("#e-ress", {duration: .1, drawSVG: "0%"})
        .from("#e2-ress", {duration: .05, drawSVG: "0%"})
        .from("#s-ress", {duration: .1, drawSVG: "0%"})
        .from("#s2-ress", {duration: .1, drawSVG: "0%"}, "white")
        .to("#white", {duration: .05, alpha: 1}, "white")
        .from("#h-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#h2-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#h3-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#u-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#n-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#t-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#t2-hunt", {duration:.01, alpha: 0}, "hunt")
        .from("#ts1", {duration: 1, drawSVG: "0%", ease: "none"}, "s1")
        .from("#ts2", {duration: .75, drawSVG: "0%", ease: "none"}, "s2")
        .from("#s1", {duration: 1, drawSVG: "0%", ease: "none"}, "s1")
        .from("#s2", {duration: 1, drawSVG: "0%", ease: "none"}, "s2")
        .from("#s3", {duration: .5, drawSVG: "0%", ease: "none"}, "s3")
        .from("#s4", {duration: .25, drawSVG: "0%", ease: "none"}, "s4")
        .from("#black", {duration: 1, alpha: 0}, "s3")


        // Zoom
        .to("#title", {duration: 2, scale: 2, transformOrigin: "center", x: 250, y:220},"title-zoom")
        .to("#title-streaks", {duration: 2, scale: 2, transformOrigin: "center", x: 190, y: 40}, "title-zoom")
        .to("#red-title", {duration: 2, scale: 2, transformOrigin: "center", x: 313, y:208, alpha: 0},"title-zoom")
        .from("#author", {duration: 1, alpha: 0})
        .to("#the", {duration: 1.5, alpha: 0}, "title-zoom")
        .to("#ress", {duration: 1.5, alpha: 0}, "title-zoom")


        // Fade & Glitch
        .to("#title", {delay: .25, duration: .5, alpha: 0})
        .to("#red-title", {delay: .7, duration: .01, alpha: 1})
        .to("#red-title", {duration: .02, alpha: 0}, "end")
        .to("#author", {duration: .02, alpha: 0}, "end")







export function titleAnimation(){
    return titleTL
}