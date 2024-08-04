import {defineStore, createPinia} from 'pinia'
import {ref} from 'vue'

const globalStore = defineStore('globalStore', () => {
    const inventoryLength = ref(10),
        inventory = ref(Array.from({length: inventoryLength.value}, () => ({}))),
        rewardPool = ref({}),
        itemList = ref([]),
        setInventory = value => inventory.value = value,
        setItemList = value => itemList.value = value,
        setRewardPool = value => rewardPool.value = value,
        getItem = id => {
            const result = itemList.value.find(item => item.id === id)
            return result ? JSON.parse(JSON.stringify(result)) : void 0
        },
        getInventoryItem = id => {
            const result = inventory.value.find(item => item.id === id)
            return result ? JSON.parse(JSON.stringify(result)) : void 0
        }
    return {
        inventoryLength,
        inventory,
        rewardPool,
        itemList,
        setInventory,
        setItemList,
        setRewardPool,
        getItem,
        getInventoryItem,
    }
})

const pinia = createPinia()

export {
    globalStore,
    pinia
}
