<script setup>
import {ref, onMounted, nextTick} from 'vue'
import {globalStore} from "@/store/index.js";
import {useRoute} from 'vue-router'
import probability from "@/utils/probability.js"
import {storeToRefs} from "pinia";
import random from "@/utils/random.js";
import entry from "@/data/entry.js";
import hole from "@/data/hole.js";
import shuffle from "@/utils/shuffle.js";
import routerMap from "@/data/routerMap.js";
import teamList from "@/data/team.js";
import router from "@/router/index.js";
import elementList from "@/data/element.js";
import {getData} from "@/utils/other.js";

const {setRewardPool, setItemList, setInventory, getItem, getInventoryItem} = globalStore(),
    route = useRoute()

const title = ref(""),
teamState = ref(true)

const {teamId, mapId} = route.params

const storeData = getData(routerMap, Number(mapId)), teamData = getData(teamList, Number(teamId))

if (storeData && teamData) {
  const {itemList, rewardPool, name} = storeData
  setRewardPool(rewardPool)
  setItemList(itemList)
  title.value = name
  teamState.value = teamData.name
} else {
  router.push({path: '/404'})
}

const store = globalStore()
const {inventoryLength, inventory, rewardPool, itemList} = storeToRefs(store)

const tag = ref(null),
    state = ref(false),
    tagPos = ref({x: 0, y: 0}),
    selectItem = ref({}),
    image = ref(localStorage.getItem('image'))

const mouseover = e => {
  const item = getInventoryItem(Number(e.currentTarget.id))
  if (item) {
    let width = e.currentTarget.offsetLeft
    state.value = true
    selectItem.value = item
    nextTick(() => {
      tagPos.value.x = width - tag.value.offsetWidth - 1
      const tagHeight = tag.value.offsetHeight, diff = window.innerHeight - e.currentTarget.offsetTop - 1
      tagPos.value.y = tagHeight > diff ? e.currentTarget.offsetTop - (tagHeight - diff) - 1 : e.currentTarget.offsetTop
    })
  }
}

const randomItem = () => {
  let i = 1, arr = [], poolType = {}
  for (const item in rewardPool.value) {
    const result = probability(rewardPool.value[item])
    const resultItem = getItem(result?.id)
    if(resultItem?.poolType) {
      const {name} = resultItem.poolType
      !poolType[name] ? (poolType[name] = []).push({result, resultItem}) : poolType[name].push({result, resultItem})
      continue
    }
    if (resultItem) {
      resultItem.count = Number(random(1, result.maxCount))
      resultItem.id = i
      arr.push(JSON.parse(JSON.stringify(resultItem)))
      i++
    }
  }

  for (const item in poolType) {
    const resultItem = poolType[item]
    const obj = resultItem.length >= 2 ? resultItem.sort((a, b) => a.resultItem.poolType.weight - b.resultItem.poolType.weight)[0] : resultItem[0]
    const resultObj = obj.resultItem
    resultObj.count = Number(random(1, obj.result.maxCount))
    resultObj.id = arr.length + 1
    arr.push(resultObj)
  }

  return [...shuffle(arr), ...Array.from({length: inventoryLength.value - arr.length}, () => "")]
}

const equipAdd = equip => {
  const {maxEntryNum, equipType, elementList: equipElementList, skill, maxHoleNum, hand} = equip

  let holeNum = 0, entryArr = [], element = 1, skillArr = []

  equipType.attribute.forEach(item => {
    const {min, max} = item
    item.value = Number(random(min, max))
  })

  for (let i = 0; i < maxEntryNum; i++) {
    const resultIndex = random(0, entry.length - 1), result = entry[resultIndex]
    const {id, min, max, type, double} = result
    result.value = random(min, double && hand === 2 ?  max * 2 : max, type)
    if (getData(entryArr, id)) break;
    entryArr.push(result)
  }

  const getSkill = (skillList, idList, arr = []) => {
    const id = probability(idList)?.id
    const result = getData(skillList, id)
    const children = result?.children
    if (!result) return arr
    arr.push(result)
    element = result.element.id
    if(children.length > 0) getSkill(children, children, arr)
    return arr
  }

  element = equipElementList[Number(random(0, equipElementList.length - 1))]
  skill ? skillArr = getSkill(skill, skill.filter(item => item.element.id === element)) : null

  for (let i = 1; i < maxHoleNum + 1; i++) {
    const result = probability([getData(hole, i)])
    if (!result) {
      break;
    } else {
      holeNum += 1
    }
  }

  return {
    ...equip,
    element: getData(elementList, element),
    skillArr,
    holeNum,
    entryArr,
  }
}

const resetInventory = () => {
  setInventory(Array.from({length: inventoryLength.value}, () => ({})))
  setInventory(randomItem().map(item => {
    if (item.equipType) item = equipAdd(item)
    return item
  }))
}

onMounted(async () => {
  window.addEventListener("contextmenu", e => e.preventDefault())
  window.addEventListener("keydown", e => e.key === "t" ? resetInventory() : null)
  resetInventory()
})

const mouseout = e => {
  state.value = false
}
</script>

<template>
  <div class="background" :style="{background:`url(${image}) no-repeat center center`}">
    <div class="mask">
      <div :style="{'left': `${tagPos.x}px`, 'top': `${tagPos.y}px`}" v-show="state" ref="tag" class="tag">
        <div class="name">
          <div :class="`item ${selectItem?.quality?.name}`">
            <div v-if="selectItem.count > 1" class="num">{{selectItem.count}}</div>
            <img v-if="selectItem?.element?.img" class="element" :src="selectItem?.element?.img" alt="?">
            <img class="items" :src="selectItem?.img" alt="?">
            <div v-if="selectItem?.durable" class="durable-bar">
              <div style="width: 100%"></div>
            </div>
          </div>
          <span class="message">
            <p :class="selectItem?.quality?.name">{{ selectItem.name }}</p>
            <em>{{ selectItem.typeName }}</em>
          </span>
        </div>
        <div class="message">
          <p v-html="selectItem.introduce"></p>
        </div>
        <div v-if="selectItem?.soulGemsType" class="area">
          {{ selectItem.soulGemsType.nameList.join("、") }}
        </div>
        <div v-if="selectItem?.soulGemsType" class="soul-stone-attribute">
          <p>属性</p>
          <ul class="attribute entry">
            <li>
              <p v-for="(item, i) in selectItem.soulGemsType.attributeList.map(item => item.name)" :key="i">
                {{ item }}</p>
            </li>
            <li>
              <p v-for="(item, i) in selectItem.soulGemsType.attributeList.map(item => item.value)" :key="i">
                {{ parseFloat(item) >= 0 ? `+${item}` : `-${item}` }}</p>
            </li>
          </ul>
          <p>{{ selectItem.soulGemsType.technicalSkill }}</p>
        </div>
        <div v-if="selectItem?.useLevel" class="level">
          使用等级：{{ selectItem.useLevel }}
        </div>
        <ul v-if="selectItem?.equipType" class="attribute">
          <li>
            <p v-for="(item, i) in selectItem.equipType.attribute.map(item => item.name)" :key="i">{{ item }}</p>
          </li>
          <li>
            <p v-for="(item, i) in selectItem.equipType.attribute.map(item => item.value)" :key="i">
              {{ parseFloat(item) >= 0 ? `+${item}` : `${item}` }}</p>
          </li>
          <li>
            <p v-for="(item, i) in selectItem.equipType.attribute" :key="i" :class="{max: item.value >= item.max}">
              {{ item.value >= item.max ? "max" : `[${item.min}~${item.max}]` }}</p>
          </li>
        </ul>
        <ul v-if="selectItem?.entryArr" class="entry attribute">
          <li>
            <p v-for="(item, i) in selectItem.entryArr.map(item => item.name)" :key="i">{{ item }}</p>
          </li>
          <li>
            <p v-for="(item, i) in selectItem.entryArr.map(item => item.value)" :key="i">
              {{ parseFloat(item) >= 0 ? `+${item}` : `${item}` }}</p>
          </li>
        </ul>
        <ul v-if="selectItem?.skillArr?.length > 0" class="attribute skill">
          <li>
            <p v-for="(item, i) in selectItem?.skillArr" :class="item.element.className" :key="i">特殊技能</p>
          </li>
          <li>
            <p v-for="(item, i) in selectItem?.skillArr" :class="item.element.className" :key="i">{{ item.name }}</p>
          </li>
        </ul>
        <div v-if="selectItem?.element && selectItem?.element?.className !== 'none'"
             :class="`element-message ${selectItem?.element.className}`">
          <p>属性</p>
          <span>
            <img :src="selectItem?.element.img" alt="?">
            {{ selectItem?.element.name }}
          </span>
        </div>
        <div v-if="selectItem?.durable" class="durable">
          <p>耐久度</p>
          <span>{{ `${selectItem?.durable}/${selectItem?.durable}` }}</span>
        </div>
        <div v-if="selectItem?.repairs" class="repair">
          <p>修理次数：</p>
          <span>{{ `${selectItem?.repairs}/${selectItem?.repairs}` }}</span>
        </div>
        <div v-if="selectItem?.holeNum !== undefined" class="hole">
          <p>镶嵌孔</p>
          <ul v-if="selectItem?.holeNum !== 0" class="attribute">
            <li>
              <img v-for="(item, i) in selectItem?.holeNum" :key="i" src="@/assets/images/gui/hole.png" alt="?">
            </li>
            <li>
              <p v-for="(item, i) in selectItem?.holeNum" :key="i">未镶嵌</p>
            </li>
          </ul>
          <div v-if="selectItem?.holeNum !== 0" class="tips">
            按住 【ctrl】，锁定窗口查看魂石详情
          </div>
          <p v-if="selectItem?.holeNum === 0">此装备无镶嵌孔！</p>
        </div>
        <div v-if="selectItem?.lock === 'lock'" class="state lock">已绑定</div>
        <div v-else-if="selectItem?.lock === 'noLock'" class="state no-lock">使用时绑定</div>
      </div>
      <div class="box">
        <div class="header">
          <div class="header-content">
            <p>{{ title }}</p>
            <div class="btn"></div>
          </div>
        </div>
        <div v-if="teamState" class="allocation">
          <p>分配规则：队长分配</p>
        </div>
        <ul :class="teamState ? 'ul-team' : null">
          <li @mouseover="mouseover" @mouseout="mouseout" :id="item?.id"
              :class="`item ${!item?.quality ? 'empty' : item.quality.name}`" v-for="item in inventory" :key="item.id">
            <div v-if="item?.durable" class="durable-bar">
              <div style="width: 100%"></div>
            </div>
            <div v-if="item.count > 1" class="num">{{item.count}}</div>
            <img v-if="item?.element?.img" class="element" :src="item.element.img" alt="?">
            <img v-if="item?.img" class="items" :src="item.img" alt="?">
            <img v-if="teamState && item.allocation" class="team" src="@/assets/images/gui/team.png" alt="?">
          </li>
        </ul>
        <div v-if="!teamState" class="footer">
          <div class="btn">领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  width: 100%;
  height: 100%;
  background-size: auto 100% !important;
  cursor: url("@/assets/images/cursor/normal.png"), auto;
  font-family: "Noto Sans";

  > .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > .box {
      border-radius: 0.4vw;
      overflow: hidden;
      border: 0.1vw solid black;
      box-shadow: 0.1vw 0.1vw 0.2vw rgba(0, 0, 0, 0.3),
      -0.1vw 0.1vw 0.2vw rgba(0, 0, 0, 0.3),
      0.1vw -0.1vw 0.2vw rgba(0, 0, 0, 0.3),
      -0.1vw -0.1vw 0.2vw rgba(0, 0, 0, 0.3);

      > .header {
        width: 100%;
        height: 3.45vw;
        position: relative;

        &::before {
          content: "";
          height: 100%;
          opacity: 0.87;
          background: url("@/assets/images/background/header.png") no-repeat center center;
          background-size: 100% auto;
          display: block;
        }

        > .header-content {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;

          &::before {
            content: "";
          }

          > p {
            font-size: 1vw;
            font-weight: bold;
            color: #dadada;
            -webkit-text-stroke: 0.2vw transparent;
            background-color: black;
            -webkit-background-clip: text;
          }

          > .btn {
            background: {
              repeat: no-repeat;
              position: center center;
              size: cover;
              image: url("@/assets/images/gui/button/close.png");
            }
            width: 2.05vw;
            aspect-ratio: 1/1;
            position: absolute;
            right: 1.2vw;

            &:hover {
              background-image: url("@/assets/images/gui/button/close_hover.png");
            }
          }
        }
      }

      > .allocation {
        background-color: rgba(24, 44, 49, 0.9);
        padding: 0.33vw 0 0 0.75vw;

        > p {
          font-size: 0.95vw;
          color: #dadada;
          -webkit-text-stroke: 0.2vw transparent;
          background-color: black;
          -webkit-background-clip: text;
        }
      }

      > .allocation, ul {
        background-color: rgba(24, 44, 49, 0.9);
      }

      > .ul-team {
        padding: {
          bottom: 1.45vw !important;
          top: 0.8vw !important;
        }
      }

      > ul {
        display: grid;
        grid-template-columns: repeat(5, 4.2vw);
        grid-template-rows: repeat(2, 4.2vw);
        gap: 0.2vw;
        padding: 1vw 0.75vw;

        > li {
          > .team {
            width: 2.7vw;
            position: absolute;
            bottom: 0;
            right: 0;
          }

          &:hover::before {
            display: block;
            filter: brightness(140%);
          }

          &:hover {
            filter: brightness(140%);
          }

          &::before {
            content: "";
            position: absolute;
            z-index: 10;
            width: 100%;
            height: 100%;
            background: url("@/assets/images/gui/slot/select.png") no-repeat center center;
            background-size: cover;
            display: none;
          }
        }
      }

      > .footer {
        height: 3.29vw;
        display: flex;
        justify-content: center;
        background-color: rgba(24, 44, 49, 0.9);

        > .btn {
          background: {
            repeat: no-repeat;
            position: center center;
            size: cover;
            image: url("@/assets/images/gui/button/normal.png");
          }

          width: 8.27vw;
          height: 2.1vw;
          border-radius: 0.24vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #dadada;
          font-size: 0.8vw;

          &:hover {
            background-image: url("@/assets/images/gui/button/normal_hover.png");
          }
        }
      }
    }

    > .tag {
      position: absolute;
      background-color: rgba(24, 44, 49, 0.9);
      border-radius: 0.25vw;
      z-index: 999;
      width: 17.15vw;
      border: 0.1vw solid black;
      box-shadow: 0.1vw 0.1vw 0.2vw rgba(0, 0, 0, 0.3),
                  -0.1vw 0.1vw 0.2vw rgba(0, 0, 0, 0.3),
                  0.1vw -0.1vw 0.2vw rgba(0, 0, 0, 0.3),
                  -0.1vw -0.1vw 0.2vw rgba(0, 0, 0, 0.3);

      > .name {
        display: flex;
        padding: {
          top: 0.9vw;
          bottom: 0.59vw;
        }
        align-items: flex-end;

        > .item {
          width: 4.2vw;
          aspect-ratio: 1/1;
        }

        > .message {
          margin-left: 0.6vw;

          > p {
            background: none !important;
            filter: brightness(125%);
            font-size: 0.95vw;
          }

          > em {
            display: block;
            color: #75817d;
            margin: 0.27vw 0 0.07vw 0;
          }
        }
      }

      > .message {
        padding: {
          top: 0.4vw;
          bottom: 0.8vw;
        }

        > p {
          color: #75817d;
          width: calc(100% - 0.8vw);
          line-height: 1.2vw;
        }
      }

      > .level {
        color: #dadada;
      }

      > .area {
        color: #dadada;
      }

      > .soul-stone-attribute {
        > p {
          &:nth-of-type(1) {
            color: #dadada;
          }

          &:nth-of-type(2) {
            color: #586f99 !important;
          }
        }

        > ul {
          border: none;

          > li {
            &:nth-of-type(2) {
              margin-left: 0.33vw;
            }
          }
        }
      }

      .attribute {
        display: flex;
        align-items: center;
        padding: {
          top: 0.53vw;
          bottom: 0.53vw;
        }

        > li {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;

          &:nth-of-type(1) {
            color: #dadada;
          }

          &:nth-of-type(2) {
            color: #75817d;
            margin-left: 4.05vw;
          }

          &:nth-of-type(3) {
            color: #dadada;
            margin-left: 0.92vw;
          }

          > p, > span {
            margin-bottom: 0.2vw;
          }

          > p:nth-last-child(1), > span:nth-last-child(1), > img:nth-last-child(1) {
            margin-bottom: 0;
          }
        }
      }

      .entry {
        > li {
          color: #586f99 !important;
        }
      }

      .skill {
        display: flex;

        > li {
          &:nth-of-type(2) {
            margin-left: 0.92vw;

            > p {
              color: #dadada;
            }
          }
        }
      }

      .element-message {
        display: flex;

        > p {
          margin-right: 2.95vw;
        }

        > span {
          display: flex;
          align-items: center;

          > img {
            width: 0.92vw;
            margin-right: 0.33vw;
          }
        }
      }

      .durable {
        display: flex;

        > p {
          color: #dadada;
          margin-right: 1.7vw;
        }

        > span {
          color: #75817d;
        }
      }

      .repair {
        display: flex;

        > p {
          color: #dadada;
          margin-right: 0.2vw;
        }

        > span {
          color: #75817d;
        }
      }

      .hole {
        padding: {
          left: 0;
          bottom: 0.2vw;
        }

        > p {
          &:nth-of-type(1){
            margin-left: 0.8vw;
            color: #dadada;
          }
          &:nth-of-type(2){
            color: #75817d;
            margin: 0.53vw 0 2.5vw 1.6vw;
          }
        }

        > ul {
          margin-left:0.8vw;
          border: none;

          > li {
            &:nth-of-type(2) {
              margin-left: 0.53vw !important;
            }

            > img {
              width: 1.44vw;
              opacity: 0.7;
              margin-bottom: 0.45vw;
            }

            > p {
              padding: 0.4vw 0;
            }
          }
        }

        > .tips {
          margin: 0 auto;
          width: calc(98% - 2vw);
          height: 2vw;
          background-color: rgba(255, 255, 255, 0.12);
          color: #dadada;
          display: flex;
          align-items: center;
          padding-left: 2vw;
        }
      }

      & > :last-child {
        border: none;
      }

      > div, ul {
        font-size: 0.8vw;
        border-bottom: 0.2vw solid rgba(255, 255, 255, 0.15);
        padding: 0.4vw 0 0.4vw 0.8vw;
      }
    }
  }

  .item {
    background: {
      repeat: no-repeat;
      position: center center;
      size: auto 100%;
    }
    border-radius: 0.3vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    > .num {
      top: 0.2vw;
      left: 0.4vw;
      color: #dadada;
      font-size: 0.85vw;
      font-weight: bold;
      -webkit-text-stroke: 0.2vw transparent;
      background-color: black;
      -webkit-background-clip: text;
      position: absolute;
    }

    > .element {
      position: absolute;
      top: 0.07vw;
      left: 0.07vw;
      width: 0.94vw;
    }

    > .items {
      width: 3.5vw;
      aspect-ratio: 1/1;
    }

    > .durable-bar {
      height: 0.25vw;
      width: 86%;
      position: absolute;
      bottom: 0.137vw;
      border-radius: 1vw;
      overflow: hidden;
      border: 0.15vw solid #102741;
      background-color: rgba(0, 0, 0, 0.5);

      > div {
        background-color: #35dfe9;
        height: 100%;
        z-index: 2;
      }
    }
  }

  .empty {
    background-image: url("@/assets/images/gui/slot/black.png");
    opacity: 0.6;
  }

  .white {
    background-image: url("@/assets/images/gui/slot/white.png");
    color: #919091 !important;
  }

  .green {
    background-image: url("@/assets/images/gui/slot/green.png");
    color: #52795a !important;
  }

  .blue {
    background-image: url("@/assets/images/gui/slot/blue.png");
    color: #3c7d8b !important;
  }

  .purple {
    background-image: url("@/assets/images/gui/slot/purple.png");
    color: #844d8c !important;
  }

  .gold {
    background-image: url("@/assets/images/gui/slot/gold.png");
    color: #a4802c !important;
  }

  .fire {
    color: #e46c35 !important;
  }

  .water {
    color: #39b5d3 !important;
  }

  .dark {
    color: #7d5ace !important;
  }

  .light {
    color: #f6e44f !important;
  }

  .thunder {
    color: #3bc555 !important;
  }

  .lock, .tip {
    color: #beb14b !important;
  }

  .no-lock {
    color: #0b7d03 !important;
  }

  .max {
    color: #cf6d6a !important;
  }
}
</style>