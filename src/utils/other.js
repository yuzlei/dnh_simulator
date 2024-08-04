const setId = data => JSON.parse(JSON.stringify(data)).map((item, i) => ({
    ...item,
    id: i + 1
}))

const getData = (data, id) => data.find(item => item.id === id)

class Item {
    constructor(name, img, maxStack, typeName, quality, introduce, allocation, tip = null, lock = null, useLevel = null, poolType = null) {
        this.name = name
        this.img = img
        this.maxStack = maxStack
        this.typeName = typeName
        this.quality = quality
        this.introduce = introduce
        this.allocation = allocation
        this.tip = tip
        this.lock = lock
        this.useLevel = useLevel
        this.poolType = poolType
    }
}

class ItemEquip extends Item{
    constructor(name, img, maxStack, typeName, quality, introduce, allocation, useLevel, hand, maxEntryNum, equipType, durable, repairs, elementList, lock, maxHoleNum = 0, skill = null, poolType = null , tip = null) {
        super(name, img, maxStack, typeName, quality, introduce, allocation, tip, lock, useLevel, poolType);
        this.hand = hand
        this.maxEntryNum = maxEntryNum
        this.equipType = equipType
        this.durable = durable
        this.repairs = repairs
        this.elementList = elementList
        this.skill = skill
        this.maxHoleNum = maxHoleNum
    }
}

class ItemSoulGems extends Item{
    constructor(name, img, maxStack, typeName, quality, introduce, allocation, soulGemsType, tip = null,lock = null, useLevel = null, poolType = null) {
        super(name, img, maxStack, typeName, quality, introduce, allocation, tip, lock, useLevel, poolType);
        this.soulGemsType = soulGemsType
    }
}

class PoolType {
    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }
}

class Skill {
    constructor(name, probability, element) {
        this.name = name
        this.probability = probability
        this.element = element
    }
}

class SetSkill {
    #data

    constructor(data) {
        this.#data = data
        this.result = this.#result(data)
    }

    #result(data, arr = []) {
        arr.push(...setId(data.map(item => ({
            ...new Skill(...item.data),
            children: item.children.length > 0 ? this.#result(item.children) : []
        }))))
        return arr
    }
}

class Element {
    constructor(name, className, img= null) {
        this.name = name
        this.className = className
        this.img = img
    }
}

class Entry {
    constructor(name, min, max, type, double = false) {
        this.name = name
        this.min = min
        this.max = max
        this.type = type
        this.double = double
    }
}

class EquipAttribute {
    constructor(name) {
        this.name = name
    }
}

class EquipType{
    constructor(name, attribute) {
        this.name = name
        this.attribute = setId(attribute.map(item => new EquipAttribute(item)))
    }
}

class Hole {
    constructor(probability) {
        this.probability = probability
    }
}

class Quality {
    constructor(name, level) {
        this.name = name
        this.level = level
    }
}

class RouterMap {
    constructor(name, itemList, rewardPool) {
        this.name = name
        this.itemList = itemList
        this.rewardPool = rewardPool
    }
}

class SoulGemsType {
    constructor(name) {
        this.name = name
    }
}

class Team {
    constructor(name) {
        this.name = name
    }
}

class RewardPool {
    constructor(id, probability, maxCount) {
        this.id = id
        this.probability = probability
        this.maxCount = maxCount
    }
}

class SetItem {
    constructor(data) {
        this.result = data.map(item => {
            switch (item.type) {
                case "item":
                    return new Item(...item.data)
                case "equip":
                    return new ItemEquip(...item.data)
                case "soulGems":
                    return new ItemSoulGems(...item.data)
            }
        })
    }
}

export {
    setId,
    getData,
    Item,
    ItemEquip,
    ItemSoulGems,
    SetSkill,
    PoolType,
    Element,
    Entry,
    EquipType,
    Hole,
    Quality,
    RouterMap,
    SoulGemsType,
    Team,
    RewardPool,
    SetItem
}


