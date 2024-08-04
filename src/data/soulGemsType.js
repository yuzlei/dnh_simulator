import {setId, SoulGemsType} from "@/utils/other.js";

let soulGemsTypeList = ["主手", "副手", "头盔", "衣服", "护手", "裤子", "鞋子", "项链", "戒指", "护符"].map(item => new SoulGemsType(item))

soulGemsTypeList = setId(soulGemsTypeList)

export default soulGemsTypeList