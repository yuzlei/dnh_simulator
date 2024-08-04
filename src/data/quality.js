import {setId, Quality} from "@/utils/other.js";

let qualityList = [
    ["white", 1],
    ["green", 2],
    ["blue", 3],
    ["purple", 4],
    ["gold", 5],
].map(item => new Quality(...item))

qualityList = setId(qualityList)

export default qualityList