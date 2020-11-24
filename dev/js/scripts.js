import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {titleAnimation} from "./title.js"



const mainTL = gsap.timeline();
mainTL.add(titleAnimation()); 


GSDevTools.create();