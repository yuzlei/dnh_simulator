import soulGemsTypeList from "@/data/soulGemsType.js";
import type from "@/data/equipType.js";
import {setId, getData} from "@/utils/other.js";

class SetSoulGemsType {
    #arr = soulGemsTypeList

    constructor(idList, attributeList, technicalSkill) {
        this.#arr = setId(this.#arr)
        this.result = {
            nameList: this.#arr.filter(item => idList.includes(item.id)).map(item => item.name),
            attributeList,
            technicalSkill
        }
    }
}

class SetAttribute {
    #arr = type

    constructor(id, arr = []) {
        const findType = getData(this.#arr, id)
        findType.attribute = findType.attribute.map((item, i) => {
            item.min = arr[i].min ? arr[i].min : 0
            item.max = arr[i].max ? arr[i].max : 0
            return item
        })
        this.result = findType
    }
}

export {
    SetAttribute,
    SetSoulGemsType
}