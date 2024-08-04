import {itemList as itemListOne, rewardPool as rewardPoolOne} from "@/data/items/ancientStoneSoul.js";
import {itemList as itemListTwo, rewardPool as rewardPoolTwo} from "@/data/items/saman.js";
import {itemList as itemListThree, rewardPool as rewardPoolThree} from "@/data/items/tauren.js";
import {itemList as itemListFour, rewardPool as rewardPoolFour} from "@/data/items/xuzuo.js";

import {setId, RouterMap} from "@/utils/other.js";

let routerMapList = [
    ["石灵抽奖", itemListOne, rewardPoolOne],
    ["萨满抽奖", itemListTwo, rewardPoolTwo],
    ["牛牛抽奖", itemListThree, rewardPoolThree],
    ["须佐抽奖", itemListFour, rewardPoolFour]
].map(item => new RouterMap(...item))

routerMapList = setId(routerMapList)

export default routerMapList