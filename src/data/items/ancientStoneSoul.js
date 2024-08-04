import elementList from "@/data/element.js";
import qualityList from "@/data/quality.js";
import {setId, getData, SetSkill, PoolType, RewardPool, SetItem} from "@/utils/other.js";
import {SetAttribute, SetSoulGemsType} from "@/utils/create.js";
import {jewelry, claymoreSkill} from "@/data/items/universal.js";
import img2001054 from "@/assets/images/items/stone_soul/2001054.png";
import img2101034 from "@/assets/images/items/stone_soul/2101034.png";
import img2202034 from "@/assets/images/items/stone_soul/2202034.png";
import img7019204 from "@/assets/images/items/stone_soul/7019204.png";
import img1020023 from "@/assets/images/items/stone_soul/1020023.png";
import img1020024 from "@/assets/images/items/stone_soul/1020024.png";
import img1020025 from "@/assets/images/items/stone_soul/1020025.png";
import img1020026 from "@/assets/images/items/stone_soul/1020026.png";
import img1020028 from "@/assets/images/items/stone_soul/1020028.png";
import img1020027 from "@/assets/images/items/stone_soul/1020027.png";
import img1020029 from "@/assets/images/items/stone_soul/1020029.png";
import img1020042 from "@/assets/images/items/stone_soul/1010042.png";
import img1020041 from "@/assets/images/items/stone_soul/1010041.png";
import img1020040 from "@/assets/images/items/stone_soul/1010040.png";
import img5554014 from "@/assets/images/items/stone_soul/5554014.png";
import img5554013 from "@/assets/images/items/stone_soul/5554013.png";
import img5554012 from "@/assets/images/items/stone_soul/5554012.png";

const swordSkill = [1, 2, 3, 4, 5].map(item => {
    const element = getData(elementList, item)
    return {
        data: [`斩击·终（${element.name}）`, 1, element],
        children: []
    }
})

const arrowSkill = [{
    data: ["灼热箭矢", 0.6, getData(elementList, 1)],
    children: []
},{
    data: ["爆破箭矢", 0.4, getData(elementList, 1)],
    children: []
},{
    data: ["冰冻箭矢", 0.6, getData(elementList, 2)],
    children: []
},{
    data: ["冰破箭矢", 0.4, getData(elementList, 2)],
    children: []
},{
    data: ["猛毒箭矢", 0.6, getData(elementList, 3)],
    children: []
},{
    data: ["麻痹箭矢", 0.4, getData(elementList, 3)],
    children: []
},{
    data: ["光耀箭矢", 0.6, getData(elementList, 4)],
    children: []
},{
    data: ["闪光箭矢", 0.4, getData(elementList, 4)],
    children: []
},{
    data: ["诅咒箭矢", 0.6, getData(elementList, 5)],
    children: []
},{
    data: ["混乱箭矢", 0.4, getData(elementList, 5)],
    children: []
},{
    data: ["强袭箭矢", 0.2, getData(elementList, 6)],
    children: []
}]

let itemList = [{
    type: "equip",
    data: [
        "大地之石", img2001054, 1, "双手剑（主手）", getData(qualityList, 4),
        "从远古石灵身体里碎裂的石块，从外形上看，像极了一把剑", true, 20, 2, 2,
        new SetAttribute(1, [{min: 350, max: 428}, {min: 49, max: 61}, {min: 49, max: 61}]).result,
        100, 10, [6], "lock", 2,
        new SetSkill(claymoreSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "equip",
    data: [
        "魔石之刃", img2101034, 1, "单手剑（主手）", getData(qualityList, 4),
        "从远古石灵身体里碎裂的石块，从外形上看，像极了一把剑", true, 20, 1, 2,
        new SetAttribute(1, [{min: 128, max: 224}, {min: 26, max: 32}, {min: 26, max: 32}]).result,
        100, 10, [1, 2, 3, 4, 5, 6], "lock", 2,
        new SetSkill(swordSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "equip",
    data: [
        "探索者箭袋", img2202034, 1, "箭袋（副手）", getData(qualityList, 4),
        "哥布林部族斥候常用的箭袋，可以容纳附带元素的箭矢，但内部结构尚不明确", true, 20, 1, 2,
        new SetAttribute(4, [{min: 167, max: 205}, {min: 23, max: 29}, {min: 23, max: 29}]).result,
        100, 10, [1, 2, 3, 4, 5, 6], "lock", 2,
        new SetSkill(arrowSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "soulGems",
    data: [
        "远古石灵魂石", img7019204, 1, "魂石", getData(qualityList, 4),
        "远古石灵孕育出的魂石<br />似乎可以提供强大的能力", true, new SetSoulGemsType([4], [{
            name: "耐力",
            value: 25
        }], "受到元素属性伤害后，有一定几率触发屏障效果，使受到的对应元素伤害降低25%").result, "不能镶嵌在等级超过28级的装备上", "lock"
    ]
}, {
    type: "item",
    data: [
        "猎弓精粹", img1020023, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质长弓<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "箭袋精粹", img1020024, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮箭袋<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "面甲精粹", img1020025, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮帽<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "护胸精粹", img1020026, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮甲<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "护手精粹", img1020028, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮手套<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "护腿精粹", img1020027, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮短裤<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "长靴精粹", img1020029, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的韧化皮靴<br />可通过炼金获得", true
    ]
}, ...jewelry, {
    type: "item",
    data: [
        "涌泉核心", img1020042, 99, "道具", getData(qualityList, 3),
        "远古石灵携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "钟乳石", img1020041, 99, "道具", getData(qualityList, 3),
        "远古石灵携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "神殿光苔", img1020040, 99, "道具", getData(qualityList, 3),
        "远古石灵携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "尖锐巨石", img5554014, 99, "道具", getData(qualityList, 4),
        "远古石灵掉落的巨型石块，能从里面感受到一股厚重的气息，大小用来制作双手剑刚刚好", true, null, "lock", null, new PoolType("boss", 2)
    ]
}, {
    type: "item",
    data: [
        "粗糙青岩", img5554012, 99, "道具", getData(qualityList, 4),
        "远古石灵留下的看起来很特殊的石头，表面比正常的石头要粗糙很多，制作单手剑的时候也许用得上", true, null, "lock", null, new PoolType("boss", 2)
    ]
}, {
    type: "item",
    data: [
        "符文石块", img5554013, 99, "道具", getData(qualityList, 4),
        "远古石灵掉落的上面画着奇怪花纹的石块，也许是远古时期祭祀时画上的，大小正好用来制作箭头", true, null, "lock", null, new PoolType("boss", 2)
    ]
}]

itemList = setId(new SetItem(itemList).result)

let rewardPool = [
    [
        [1, 0.02, 1],
        [2, 0.02, 1],
        [3, 0.02, 1],
        [5, 0.07, 1],
        [6, 0.07, 1],
        [7, 0.07, 1],
        [8, 0.07, 1],
        [9, 0.07, 1],
        [10, 0.07, 1],
        [11, 0.07, 1],
        [12, 0.15, 1],
        [13, 0.15, 1],
        [14, 0.15, 1],
    ], [
        [15, 0.34, 1],
        [16, 0.33, 1],
        [17, 0.33, 1],
    ], [
        [4, 0.3, 1],
    ], [
        [18, 0.25, 1],
        [19, 0.25, 1],
        [20, 0.25, 1],
    ]
].map(item => item.map(items => new RewardPool(...items)))

export {
    itemList,
    rewardPool
}

