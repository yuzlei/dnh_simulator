import {setId, Team} from "@/utils/other.js";

let teamList = [true, false].map(item => new Team(item))

teamList = setId(teamList)

export default teamList