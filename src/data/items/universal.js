import qualityList from "@/data/quality.js";
import {getData, SetSkill} from "@/utils/other.js";
import img1020037 from "@/assets/images/items/universal/1020037.png"
import img1020038 from "@/assets/images/items/universal/1020038.png"
import img1020039 from "@/assets/images/items/universal/1020039.png"
import img100001 from "@/assets/images/items/universal/100001.png"
import img100002 from "@/assets/images/items/universal/100002.png"
import img2101022 from "@/assets/images/items/universal/2101022.png"
import img2102022 from "@/assets/images/items/universal/2102022.png"
import img2201022 from "@/assets/images/items/universal/2201022.png"
import img2202022 from "@/assets/images/items/universal/2202022.png"
import img2301022 from "@/assets/images/items/universal/2301022.png"
import img2302022 from "@/assets/images/items/universal/2302022.png"

import elementList from "@/data/element.js";
import {SetAttribute} from "@/utils/create.js";

const jewelry = [{
    type: "item",
    data: [
        "堕饰精粹", img1020037, 1, "道具", getData(qualityList, 4),
        "用于制作优质项链的必要材料<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "宝石精粹", img1020038, 1, "道具", getData(qualityList, 4),
        "用于制作优质指环的必要材料<br />可通过炼金获得", true
    ]
}, {
    type: "item",
    data: [
        "符能精粹", img1020039, 1, "道具", getData(qualityList, 4),
        "用于制作优质护符的必要材料<br />可通过炼金获得", true
    ]
}]

const purpleDragonCrystal = [{
    type: "item",
    data: [
        "紫龙晶", img100001, 1, "道具", getData(qualityList, 1),
        "颜色类似龙血的罕见晶石<br />可在星幕商会兑换", true
    ]
}]

const whiteDragonCrystal = [{
    type: "item",
    data: [
        "白龙晶", img100002, 1, "道具", getData(qualityList, 1),
        "常见的白色晶石<br />大陆上用于流通的一般等价物", false
    ]
}]

const claymoreSkill = [{
    data: ["旋风斩", 0.1, getData(elementList, 6)],
    children: []
}, {
    data: ["气刃斩", 0.1, getData(elementList, 6)],
    children: []
}, {
    data: ["居合斩", 0.1, getData(elementList, 6)],
    children: []
}]

const knightWeapons = [{
    type: "equip",
    data: [
        "铁制短剑", img2101022, 1, "单手剑（主手）", getData(qualityList, 3),
        "以铁锭为主要原料加工的单手剑", true, 18, 1, 2,
        new SetAttribute(1, [{min: 162, max: 155}, {min: 16, max: 20}, {min: 16, max: 20}]).result,
        100, 5, [6], "noLock",
    ]
}, {
    type: "equip",
    data: [
        "铁制圆盾", img2102022, 1, "盾牌（副手）", getData(qualityList, 3),
        "以铁锭为主要原料加工的盾牌", true, 18, 1, 2,
        new SetAttribute(2, [{min: 614, max: 752}, {min: 15, max: 19}, {min: 15, max: 19}]).result,
        100, 5, [6], "noLock", 0, new SetSkill([{
            data: ["格挡", 0.4, getData(elementList, 6)],
            children: []
        }]).result
    ]
}]

const sagittariusWeapon = [{
    type: "equip",
    data: [
        "铁制长弓", img2201022, 1, "弓（主手）", getData(qualityList, 3),
        "以铁锭和韧化毛皮为主要原料加工的弓", true, 18, 1, 2,
        new SetAttribute(3, [{min: 116, max: 142}, {min: 16, max: 20}, {min: 16, max: 20}]).result,
        100, 5, [6], "noLock", 0, new SetSkill([{
            data: ["散射射击", 0.1, getData(elementList, 6)],
            children: []
        },{
            data: ["穿透射击", 0.1, getData(elementList, 6)],
            children: []
        }]).result
    ]
}, {
    type: "equip",
    data: [
        "韧化皮箭袋", img2202022, 1, "箭袋（副手）", getData(qualityList, 3),
        "以韧化毛皮为主要原料加工的箭袋", true, 18, 1, 2,
        new SetAttribute(4, [{min: 116, max: 142}, {min: 15, max: 19}, {min: 15, max: 19}]).result,
        100, 5, [1, 2, 3, 4, 5, 6], "noLock", 0, new SetSkill([{
            data: ["灼热箭矢", 1, getData(elementList, 1)],
            children: []
        },{
            data: ["冰冻箭矢", 1, getData(elementList, 2)],
            children: []
        },{
            data: ["猛毒箭矢", 1, getData(elementList, 3)],
            children: []
        },{
            data: ["光耀箭矢", 1, getData(elementList, 4)],
            children: []
        },{
            data: ["诅咒箭矢", 1, getData(elementList, 5)],
            children: []
        }]).result
    ]
}]

const mageWeapon = [{
    type: "equip",
    data: [
        "铁制魔杖", img2301022, 1, "魔杖（主手）", getData(qualityList, 3),
        "以铁锭和棉布为主要原料加工的魔杖", true, 18, 1, 2,
        new SetAttribute(5, [{min: 126, max: 155}, {min: 16, max: 20}, {min: 16, max: 20}]).result,
        100, 5, [1, 2, 3, 4, 5, 6], "noLock", 0, new SetSkill([{
            data: ["火球术", 1, getData(elementList, 1)],
            children: []
        },{
            data: ["冰箭术", 1, getData(elementList, 2)],
            children: []
        },{
            data: ["雷电术", 1, getData(elementList, 3)],
            children: []
        },{
            data: ["光箭术", 1, getData(elementList, 4)],
            children: []
        },{
            data: ["暗影箭", 1, getData(elementList, 5)],
            children: []
        },{
            data: ["治疗术", 1, getData(elementList, 6)],
            children: []
        }]).result
    ]
}, {
    type: "equip",
    data: [
        "优质魔典", img2302022, 1, "魔典（副手）", getData(qualityList, 3),
        "以棉布为主要原料加工的魔典", true, 18, 1, 2,
        new SetAttribute(6, [{min: 116, max: 142}, {min: 15, max: 19}, {min: 15, max: 19}]).result,
        100, 5, [6], "noLock", 0, new SetSkill([{
            data: ["治愈 I", 0.5, getData(elementList, 6)],
            children: [{
                data: ["苏生 I", 0.2, getData(elementList, 6)],
                children: []
            }]
        }]).result
    ]
}]

export {
    jewelry,
    purpleDragonCrystal,
    whiteDragonCrystal,
    claymoreSkill,
    knightWeapons,
    sagittariusWeapon,
    mageWeapon
}