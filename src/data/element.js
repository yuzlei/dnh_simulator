import fireImg from "@/assets/images/elements/fire.png"
import waterImg from "@/assets/images/elements/water.png"
import thunderImg from "@/assets/images/elements/thunder.png"
import lightImg from "@/assets/images/elements/light.png"
import darkImg from "@/assets/images/elements/dark.png"
import {setId, Element} from "@/utils/other.js";

let elementList = [
    ["火", "fire", fireImg],
    ["水", "water", waterImg],
    ["雷", "thunder", thunderImg],
    ["光", "light", lightImg],
    ["暗", "dark", darkImg],
    ["无", "none"]
].map(item => new Element(...item))

elementList = setId(elementList)

export default elementList