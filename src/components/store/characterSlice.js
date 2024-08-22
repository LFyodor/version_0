import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characterFirstName: 'Кросби',
        characterLastName: 'Барнесс',
        hp: 8,
        luck: 2,
        crafts: 2,
        time: 0,
        tiredness: 17,
        torch: 0,
        usedDark: 17,
        bonfire: 0,
        drunkenness: 0,
        inGame: false,
        partPlot: [
            {id: 0, title: 'Начало'},
            {id: 29, title: 'Кубик в рыбе не найден'},
            {id: 32, title: 'Нож в расщелине'},
            {id: 37, title: 'До землетрясения № 1'},
            {id: 117, title: 'Ром, вино или ничего'},
            {id: 170, title: 'Другой остров не найден'},
        ],
        inventory: [],
    },
    reducers: {
        addHp: (state, action) => {
            state.hp += action.payload
            if (state.hp > 12) {
                state.hp = 12
            }
        },
        decreaseHp: (state, action) => {
            state.hp -= action.payload
            if (state.hp < 0) {
                state.hp = 0
            }
        },
        addLuck: (state, action) => {
            state.luck += action.payload
        },
        decreaseLuck: (state, action) => {
            state.luck -= action.payload
        },
        addCrafts: (state) => {
            state.crafts += 1
        },
        addTime: (state, action) => {
            state.time += action.payload
            state.tiredness += action.payload
            state.torch -= action.payload
            if (state.torch < 0) {
                state.usedDark += -state.torch
                state.torch = 0
            }
            state.bonfire -= action.payload
            if (state.bonfire < 0) {
                state.bonfire = 0
            }
        },
        addTiredness: (state, action) => {
            state.tiredness += action.payload
        },
        decreaseTiredness: (state, action) => {
            state.tiredness -= action.payload
            if (state.tiredness < 0) {
                state.tiredness = 0
            }
        },
        addTorch: (state) => {
            state.torch = 12
            state.usedDark = 0
        },
        removeTorch: (state) => {
            state.torch = 0
        },
        clearUsedDark: (state) => {
            state.usedDark = 0
        },
        addBonfire: (state) => {
            state.bonfire += 36
            state.usedDark = 0
        },
        addDrunkenness: (state, action) => {
            state.drunkenness += action.payload
            if (state.drunkenness > 12) {
                state.drunkenness = 12
            }
        },
        decreaseDrunkenness: (state, action) => {
            state.drunkenness -= action.payload
            if (state.drunkenness < 0) {
                state.drunkenness = 0
            }
        },
        inGameTurn: (state) => {
            state.inGame = !state.inGame
        },
        addPartPlot: (state, action) => {
            state.partPlot = state.partPlot.concat(action.payload)
        },
        removePartPlot: (state, action) => {
            state.partPlot = state.partPlot.filter((obj) => obj.id !== action.payload.id)
        },
        addInventory: (state, action) => {
            state.inventory = state.inventory.concat(action.payload)
        },
        removeInventory: (state, action) => {
            state.inventory = state.inventory.filter((obj) => obj.id !== action.payload.id)
        },
        sleepHere: (state, action) => {
            state.time += action.payload
            state.tiredness -= action.payload
            if (state.tiredness < 0) {
                state.tiredness = 0
            }
            state.torch -= action.payload
            if (state.torch < 0) {
                state.usedDark += -state.torch
                state.torch = 0
            }
            state.bonfire -= action.payload
            if (state.bonfire < 0) {
                state.bonfire = 0
            }
            state.drunkenness -= action.payload
            if (state.drunkenness < 0) {
                state.drunkenness = 0
            }
        },
        sleepBonfire: (state) => {
            state.hp += 1
            if (state.hp > 12) {
                state.hp = 12
            }
            state.time += 4
            state.tiredness -= 8
            if (state.tiredness < 0) {
                state.tiredness = 0
            }
            state.torch -= 4
            if (state.torch < 0) {
                state.torch = 0
            }
            state.bonfire -= 4
            if (state.bonfire < 0) {
                state.bonfire = 0
            }
            state.usedDark = 0
            state.drunkenness -= 4
            if (state.drunkenness < 0) {
                state.drunkenness = 0
            }
        },
        load: (state) => {
            state.hp = JSON.parse(localStorage.getItem('bonfire')).hp
            state.luck = JSON.parse(localStorage.getItem('bonfire')).luck
            state.crafts = JSON.parse(localStorage.getItem('bonfire')).crafts
            state.time = JSON.parse(localStorage.getItem('bonfire')).time
            state.tiredness = JSON.parse(localStorage.getItem('bonfire')).tiredness
            state.torch = JSON.parse(localStorage.getItem('bonfire')).torch
            state.usedDark = JSON.parse(localStorage.getItem('bonfire')).usedDark
            state.bonfire = JSON.parse(localStorage.getItem('bonfire')).bonfire
            state.drunkenness = JSON.parse(localStorage.getItem('bonfire')).drunkenness
            state.inGame = JSON.parse(localStorage.getItem('bonfire')).inGame
            state.partPlot = JSON.parse(localStorage.getItem('bonfire')).partPlot
            state.inventory = JSON.parse(localStorage.getItem('bonfire')).inventory
        },
        againBegin: (state) => {
            state.hp = 8
            state.luck = 2
            state.crafts = 2
            state.time = 0
            state.tiredness = 17
            state.torch = 0
            state.usedDark = 17
            state.bonfire = 0
            state.drunkenness = 0
            state.inGame = false
            state.partPlot = [
                {id: 0, title: 'Начало'},
                {id: 29, title: 'Кубик в рыбе не найден'},
                {id: 32, title: 'Нож в расщелине'},
                {id: 37, title: 'До землетрясения № 1'},
                {id: 117, title: 'Ром, вино или ничего'},
                {id: 170, title: 'Другой остров не найден'},
            ]
            state.inventory = []
        },
    }
});

export const {
    addHp,
    decreaseHp,
    addLuck,
    decreaseLuck,
    addCrafts,
    addTime,
    addTiredness,
    decreaseTiredness,
    addTorch,
    removeTorch,
    clearUsedDark,
    addBonfire,
    addDrunkenness,
    decreaseDrunkenness,
    inGameTurn,
    addPartPlot,
    removePartPlot,
    addInventory,
    removeInventory,
    sleepHere,
    sleepBonfire,
    load,
    againBegin,
    clearState } = characterSlice.actions;
export default characterSlice.reducer;