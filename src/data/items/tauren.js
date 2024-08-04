import elementList from "@/data/element.js";
import qualityList from "@/data/quality.js";
import {setId, getData, SetSkill, PoolType, RewardPool, SetItem} from "@/utils/other.js";
import {SetAttribute, SetSoulGemsType} from "@/utils/create.js";
import {jewelry} from "@/data/items/universal.js";
import img1020016 from "@/assets/images/items/tauren/1020016.png"
import img1020017 from "@/assets/images/items/tauren/1020017.png"
import img1020018 from "@/assets/images/items/tauren/1020018.png"
import img1020019 from "@/assets/images/items/tauren/1020019.png"
import img1020020 from "@/assets/images/items/tauren/1020020.png"
import img1020021 from "@/assets/images/items/tauren/1020021.png"
import img1020022 from "@/assets/images/items/tauren/1020022.png"
import img2102034 from "@/assets/images/items/tauren/2102034.png"
import img2302034 from "@/assets/images/items/tauren/2302034.png"
import img5554015 from "@/assets/images/items/tauren/5554015.png"
import img5554016 from "@/assets/images/items/tauren/5554016.png"
import img1010043 from "@/assets/images/items/tauren/1010043.png"
import img1010044 from "@/assets/images/items/tauren/1010044.png"
import img1010045 from "@/assets/images/items/tauren/1010045.png"
import img7019104 from "@/assets/images/items/tauren/7019104.png";

const universalCodeSkill = [{
    data: ["苏生 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["苏生 II", 0.01, getData(elementList, 6)],
    children: []
},{
    data: ["护盾 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["护盾 II", 0.01, getData(elementList, 6)],
    children: []
},{
    data: ["元素强化 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["元素强化 II", 0.01, getData(elementList, 6)],
    children: []
},{
    data: ["强化攻击 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["强化攻击 II", 0.01, getData(elementList, 6)],
    children: []
},{
    data: ["护甲强化 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["护甲强化 II", 0.01, getData(elementList, 6)],
    children: []
},{
    data: ["抗性强化 I", 0.05, getData(elementList, 6)],
    children: []
},{
    data: ["抗性强化 II", 0.01, getData(elementList, 6)],
    children: []
},]

const codeSkill = [{
    data: ["治愈 I", 0.5, getData(elementList, 6)],
    children: universalCodeSkill,
},{
    data: ["治愈 II", 0.2, getData(elementList, 6)],
    children: universalCodeSkill,
}]

const shieldSkill = [{
    data: ["格挡", 0.2, getData(elementList, 6)],
    children: []
}, {
    data: ["盾击", 0.2, getData(elementList, 6)],
    children: []
}]

let itemList = [{
    type: "equip",
    data: [
        "牛魔防御者", img2102034, 1, "盾牌（副手）", getData(qualityList, 4),
        "牛头人部族战士常用的盾牌，异常的坚固，曾经有人见到牛头人战士使用这面盾牌来迎击飞来的箭矢", true, 20, 1, 2,
        new SetAttribute(2, [{min: 182, max: 224}, {min: 26, max: 32}, {min: 26, max: 32}]).result,
        100, 10, [6], "lock", 2,
        new SetSkill(shieldSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "equip",
    data: [
        "知识宝典", img2302034, 1, "魔典（副手）", getData(qualityList, 4),
        "哥布林部族祭司常用的魔典，据说拥有着起死回生的力量", true, 20, 1, 2,
        new SetAttribute(6, [{min: 182, max: 224}, {min: 26, max: 32}, {min: 26, max: 32}]).result,
        100, 10, [6], "lock", 2,
        new SetSkill(codeSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "soulGems",
    data: [
        "牛头人狂战士魂石", img7019104, 1, "魂石", getData(qualityList, 4),
        "牛头人狂战士孕育出的魂石<br />似乎可以提供强大的能力", true, new SetSoulGemsType([1], [{
            name: "力量",
            value: 15
        }, {
            name: "敏捷",
            value: 15
        }, {
            name: "智慧",
            value: 15
        }], "受到攻击时，有一定几率进入狂怒状态，施放技能的消耗降低50%").result, "不能镶嵌在等级超过28级的装备上", "lock"
    ]
}, {
    type: "item",
    data: [
        "短剑精粹", img1020016, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质短剑<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "壁垒精粹", img1020017, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质圆盾<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "头盔精粹", img1020018, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质头盔<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "胸甲精粹", img1020019, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质胸甲<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "手甲精粹", img1020021, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质护手<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "腿甲精粹", img1020020, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质腿甲<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "战靴精粹", img1020022, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质战靴<br />可通过炼金获得", true
    ]
}, ...jewelry, {
    type: "item",
    data: [
        "魔化结晶", img1010043, 99, "道具", getData(qualityList, 3),
        "牛头人狂战士携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "细白沙", img1010045, 99, "道具", getData(qualityList, 3),
        "牛头人狂战士携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "魔化峭石", img1010044, 99, "道具", getData(qualityList, 3),
        "牛头人狂战士携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "厚重毛皮", img5554016, 99, "道具", getData(qualityList, 4),
        "击败牛头人狂战士后获得的皮毛，刀枪不入，能用来制造很好的盾牌", true, null, "lock", null, new PoolType("boss", 2)
    ]
}, {
    type: "item",
    data: [
        "坚韧牛角", img5554015, 99, "道具", getData(qualityList, 4),
        "牛头人狂战士遗落的双角，里面蕴含着陌生的魔力，可以用来制造魔典", true, null, "lock", null, new PoolType("boss", 2)
    ]
}]

itemList = setId(new SetItem(itemList).result)

let rewardPool = [
    [
        [1, 0.03, 1],
        [2, 0.03, 1],
        [4, 0.06, 1],
        [5, 0.06, 1],
        [6, 0.06, 1],
        [7, 0.06, 1],
        [8, 0.06, 1],
        [9, 0.06, 1],
        [10, 0.06, 1],
        [11, 0.18, 1],
        [12, 0.17, 1],
        [13, 0.17, 1],
    ], [
        [14, 0.34, 1],
        [15, 0.33, 1],
        [16, 0.33, 1],
    ], [
        [3, 0.15, 1],
    ], [
        [17, 0.4, 1],
        [18, 0.4, 1],
    ]
].map(item => item.map(items => new RewardPool(...items)))

export {
    itemList,
    rewardPool
}