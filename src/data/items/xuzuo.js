import elementList from "@/data/element.js";
import qualityList from "@/data/quality.js";
import {setId, getData, SetSkill, PoolType, RewardPool, SetItem} from "@/utils/other.js";
import {SetAttribute} from "@/utils/create.js";
import {whiteDragonCrystal, knightWeapons, mageWeapon, sagittariusWeapon, claymoreSkill} from "@/data/items/universal.js";
import img15421 from "@/assets/images/items/xuzuo/15421.png"
import img15422 from "@/assets/images/items/xuzuo/15422.png"
import img15423 from "@/assets/images/items/xuzuo/15423.png"
import img15424 from "@/assets/images/items/xuzuo/15424.png"
import img15425 from "@/assets/images/items/xuzuo/15425.png"
import img15426 from "@/assets/images/items/xuzuo/15426.png"
import img15429 from "@/assets/images/items/xuzuo/15429.png"
import img15430 from "@/assets/images/items/xuzuo/15430.png"
import img15431 from "@/assets/images/items/xuzuo/15431.png"
import img15432 from "@/assets/images/items/xuzuo/15432.png"
import img15433 from "@/assets/images/items/xuzuo/15433.png"
import img15434 from "@/assets/images/items/xuzuo/15434.png"
import img15440 from "@/assets/images/items/xuzuo/15440.png"
import img15442 from "@/assets/images/items/xuzuo/15442.png"
import img15447 from "@/assets/images/items/xuzuo/15447.png"
import img15448 from "@/assets/images/items/xuzuo/15448.png"
import img15449 from "@/assets/images/items/xuzuo/15449.png"
import img1010078 from "@/assets/images/items/xuzuo/1010078.png"
import img1080401 from "@/assets/images/items/xuzuo/1080401.png"
import img2001084 from "@/assets/images/items/xuzuo/2001084.png"

class Furniture {
    constructor(name, img) {
        this.result = {
            type: "item",
            data: [name, img, 1, "方块", getData(qualityList, 3), "夏日活动方块", false]
        }
    }
}

const furnitureList = [
    ["夏日·天狗面具" ,img15421],
    ["夏日·能面具" ,img15422],
    ["夏日·河童面具" ,img15423],
    ["夏日·猫脸面具" ,img15424],
    ["夏日·招财面具" ,img15425],
    ["夏日·隈取面具" ,img15426],
    ["夏日·橙色纸灯" ,img15429],
    ["夏日·蓝色纸灯" ,img15430],
    ["夏日·绿色纸灯" ,img15431],
    ["夏日·粉色纸灯" ,img15432],
    ["夏日·青色纸灯" ,img15433],
    ["夏日·紫色纸灯" ,img15434],
    ["夏日·惠比寿" ,img15440],
    ["夏日·木偶" ,img15442],
    ["夏日·富士山摆件" ,img15447],
    ["夏日·手提灯" ,img15448],
    ["夏日·章鱼挂画" ,img15449],
].map(item => new Furniture(...item).result)

const SwordIntroduce = str => `<br>从剑刃里隐隐能够感受到${str}的力量`

const swordData = ["火焰", "流水", "雷电", "神圣", "黑暗"]

const createSword = [1, 2, 3, 4, 5, 6].map((item, i) => {
    const element = getData(elementList, item)
    const skill = ["旋风斩", "气刃斩", "居合斩"].map(items => ({
        data: [`${items}${item === 6 ? '' : `（${element.name}）`}`, 0.1, element],
        children: []
    }))
    return {
        type: "equip",
        data: [
            "天从云", img2001084, 1, "双手剑（主手）", getData(qualityList, 4),
            `神社供奉的神剑的复制品，据说和真品同样使用了大蛇的尾骨制成，在传说里甚至可以斩断云雾${swordData[i] ? SwordIntroduce(swordData[i]) : ''}`, true, 18, 2, 2,
            new SetAttribute(1, [{min: 332, max: 406}, {min: 46, max: 58}, {min: 46, max: 58}]).result,
            100, 10, [item], "lock", 2,
            new SetSkill(skill).result
        ]
    }
})

let itemList = [
    ...furnitureList,
    ...whiteDragonCrystal,
    ...knightWeapons,
    ...mageWeapon,
    ...sagittariusWeapon,
    ...createSword,
    {
        type: "equip",
        data: [
            "天从云", img2001084, 1, "双手剑（主手）", getData(qualityList, 3),
            "神社供奉的神剑的复制品，据说和真品同样使用了大蛇的尾骨制成，在传说里甚至可以斩断云雾", true, 18, 2, 2,
            new SetAttribute(1, [{min: 242, max: 296}, {min: 31, max: 39}, {min: 31, max: 39}]).result,
            100, 5, [6], "noLock", 0,
            new SetSkill(claymoreSkill).result
        ],
    },{
        type: "item",
        data: ["铠甲碎片", img1010078, 99, "道具", getData(qualityList, 3), "须佐能乎铠甲的碎片<br />净化后可以得到素盏鸣的部件", false],
    }, {
        type: "item",
        data: ["游园币", img1080401, 99, "道具", getData(qualityList, 1), "夏日活动道具<br />用于参与夏日游园会游园活动", false, null, "lock"]
    },
]

itemList = setId(new SetItem(itemList).result)

let rewardPool = [
    [
        [19, 0.145, 1],
        [20, 0.145, 1],
        [21, 0.145, 1],
        [22, 0.145, 1],
        [23, 0.145, 1],
        [24, 0.145, 1],
        [25, 0.005, 1],
        [26, 0.005, 1],
        [27, 0.005, 1],
        [28, 0.005, 1],
        [29, 0.005, 1],
        [30, 0.005, 1],
        [31, 0.1, 1],
    ], [
        [1, 0.01, 1],
        [2, 0.01, 1],
        [3, 0.01, 1],
        [4, 0.01, 1],
        [5, 0.01, 1],
        [6, 0.01, 1],
        [7, 0.01, 1],
        [8, 0.01, 1],
        [9, 0.01, 1],
        [10, 0.01, 1],
        [11, 0.01, 1],
        [12, 0.01, 1],
        [13, 0.01, 1],
        [14, 0.01, 1],
        [15, 0.01, 1],
        [16, 0.01, 1],
        [17, 0.01, 1],
    ], [
        [32, 0.4, 1]
    ], [
        [33, 1, 3]
    ], [
        [18, 1, 6]
    ]
].map(item => item.map(items => new RewardPool(...items)))

export {
    itemList,
    rewardPool,
}
