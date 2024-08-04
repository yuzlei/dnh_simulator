import {setId, Hole} from "@/utils/other.js";

let holeList = [0.2, 0.05].map(item => new Hole(item));

holeList = setId(holeList)

export default holeList