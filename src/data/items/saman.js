import elementList from "@/data/element.js";
import qualityList from "@/data/quality.js";
import {setId, getData, SetSkill, PoolType, RewardPool, SetItem} from "@/utils/other.js";
import {SetAttribute, SetSoulGemsType} from "@/utils/create.js";
import {jewelry} from "@/data/items/universal.js";
import img1020030 from "@/assets/images/items/shaman/1020030.png"
import img1020031 from "@/assets/images/items/shaman/1020031.png"
import img1020032 from "@/assets/images/items/shaman/1020032.png"
import img1020033 from "@/assets/images/items/shaman/1020033.png"
import img1020034 from "@/assets/images/items/shaman/1020034.png"
import img1020035 from "@/assets/images/items/shaman/1020035.png"
import img1020036 from "@/assets/images/items/shaman/1020036.png"
import img2201034 from "@/assets/images/items/shaman/2201034.png"
import img2301034 from "@/assets/images/items/shaman/2301034.png"
import img5554010 from "@/assets/images/items/shaman/5554010.png"
import img5554011 from "@/assets/images/items/shaman/5554011.png"
import img7019304 from "@/assets/images/items/shaman/7019304.png"
import img1010046 from "@/assets/images/items/shaman/1010046.png"
import img1010047 from "@/assets/images/items/shaman/1010047.png"
import img1010048 from "@/assets/images/items/shaman/1010048.png"

const universalBowSkill =[{
    data: ["箭雨", 0.2, getData(elementList, 6)],
    children: [{
        data: ["后撤射击", 0.1, getData(elementList, 6)],
        children: []
    }]
}]

const bowSkill = [{
    data: ["散射射击", 0.3, getData(elementList, 6)],
    children: universalBowSkill
}, {
    data: ["穿透射击", 0.3, getData(elementList, 6)],
    children: universalBowSkill
}]

const staffSkill = [{
    data: ["火球术", 1, getData(elementList, 1)],
    children: [{
        data: ["烈焰花环", 0.1, getData(elementList, 1)],
        children: [],
    },{
        data: ["熔岩爆裂", 0.1, getData(elementList, 1)],
        children: [],
    }]
},{
    data: ["冰箭术", 1, getData(elementList, 2)],
    children: [{
        data: ["寒冰风暴", 0.1, getData(elementList, 2)],
        children: [],
    },{
        data: ["暴风雪", 0.1, getData(elementList, 2)],
        children: [],
    }]
},{
    data: ["雷电术", 1, getData(elementList, 3)],
    children: [{
        data: ["飓风术", 0.2, getData(elementList, 3)],
        children: [],
    }]
},{
    data: ["光箭术", 1, getData(elementList, 4)],
    children: [{
        data: ["天罚", 0.2, getData(elementList, 4)],
        children: [],
    }]
},{
    data: ["暗影箭", 1, getData(elementList, 5)],
    children: [{
        data: ["暗影震击", 0.2, getData(elementList, 5)],
        children: [],
    }]
},{
    data: ["治疗术", 1, getData(elementList, 6)],
    children: [{
        data: ["光之新星", 0.2, getData(elementList, 4)],
        children: [],
    }]
}]

let itemList = [{
    type: "equip",
    data: [
        "新生枝芽", img2301034, 1, "魔杖（主手）", getData(qualityList, 4),
        "哥布林部族萨满所使用的魔杖，拿在手中可以感觉到明显的能量波动", true, 20, 1, 2,
        new SetAttribute(5, [{min: 182, max: 224}, {min: 26, max: 32}, {min: 26, max: 32}]).result,
        100, 10, [1, 2, 3, 4, 5, 6], "lock", 2,
        new SetSkill(staffSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "equip",
    data: [
        "柳木猎弓", img2201034, 1, "弓（主手）", getData(qualityList, 4),
        "精锐哥布林部族斥候使用的弓，由于其韧性异常，可以同时射出很多支箭矢", true, 20, 1, 2,
        new SetAttribute(3, [{min: 182, max: 224}, {min: 26, max: 32}, {min: 26, max: 32}]).result,
        100, 10, [6], "lock", 2,
        new SetSkill(bowSkill).result,
        new PoolType("boss", 1)
    ]
}, {
    type: "soulGems",
    data: [
        "哥布林萨满魂石", img7019304, 1, "魂石", getData(qualityList, 4),
        "哥布林萨满孕育出的魂石<br />似乎可以提供强大的能力", true, new SetSoulGemsType([7], [{
            name: "移动速度",
            value: "10%"
        }], "提升10%的翻滚距离和0.1秒的无敌时间").result, "不能镶嵌在等级超过28级的装备上", "lock"
    ]
}, {
    type: "item",
    data: [
        "魔杖精粹", img1020030, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的铁质魔杖<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "魔典精粹", img1020031, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的优质魔典<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "兜帽精粹", img1020032, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的棉纺兜帽<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "法袍精粹", img1020033, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的棉纺长袍<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "手套精粹", img1020035, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的棉纺手套<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "长裤精粹", img1020034, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的棉纺长裤<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "软鞋精粹", img1020036, 1, "道具", getData(qualityList, 4),
        "可以用来制造极品的棉纺软靴<br />可通过炼金获得", true
    ]
}, ...jewelry, {
    type: "item",
    data: [
        "洞穴菌粉", img1010046, 99, "道具", getData(qualityList, 3),
        "哥布林萨满携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "幽暗藤蔓", img1010047, 99, "道具", getData(qualityList, 3),
        "哥布林萨满携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "凝聚晶石", img1010048, 99, "道具", getData(qualityList, 3),
        "哥布林萨满携带的一种罕见材料", false
    ]
}, {
    type: "item",
    data: [
        "神秘种子", img5554010, 99, "道具", getData(qualityList, 4),
        "哥布林萨满掉落的奇怪的种子，能长出充满魔力的植物，应该能够用来制作法杖", true, null, "lock", null, new PoolType("boss", 2)
    ]
}, {
    type: "item",
    data: [
        "柔韧柳枝", img5554011, 99, "道具", getData(qualityList, 4),
        "哥布林萨满留下的柔韧又不失强度的柳枝，是用来制造弓箭的好材料", true, null, "lock", null, new PoolType("boss", 2)
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
    rewardPool,
}