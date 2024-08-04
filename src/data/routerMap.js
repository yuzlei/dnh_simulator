import {itemList as itemListOne, rewardPool as rewardPoolOne} from "@/data/items/ancientStoneSoul.js";
import {itemList as itemListTwo, rewardPool as rewardPoolTwo} from "@/data/items/saman.js";
import {itemList as itemListThree, rewardPool as rewardPoolThree} from "@/data/items/tauren.js";
import {itemList as itemListFour, rewardPool as rewardPoolFour} from "@/data/items/xuzuo.js";

import {setId, RouterMap} from "@/utils/other.js";

let routerMapList = [
    ["远古石灵", itemListOne, rewardPoolOne],
    ["哥布林萨满", itemListTwo, rewardPoolTwo],
    ["牛头人狂战士", itemListThree, rewardPoolThree],
    ["须佐能乎命", itemListFour, rewardPoolFour]
].map(item => new RouterMap(...item))

routerMapList = setId(routerMapList)

export default routerMapList