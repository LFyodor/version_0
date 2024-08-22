import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        caveItems: [],
        centerItems: [
            {id: 3, item: 'Рваная тряпка'},
            {id: 26, item: 'Большая змея'},
            {id: 35, item: 'Перо'},
            {id: 36, item: 'Игральная кость'},
            {id: 54, item: 'Ключ из кости'},
        ],
        eastItems: [
            {id: 2, item: 'Короткая крепкая палка'},
            {id: 13, item: 'Деревянная ловушка'},
        ],
        northItems: [
            {id: 3, item: 'Рваная тряпка'},
            {id: 52, item: 'Сухая лоза'},
        ],
        northeastItems: [
            {id: 15, item: 'Топор'},
        ],
        northwestItems: [
            {id: 2, item: 'Короткая крепкая палка'},
            {id: 40, item: 'Ящик'},
        ],
        rockItems: [
            {id: 3, item: 'Рваная тряпка'},
            {id: 22, item: 'Свежий лосось'},
            {id: 24, item: 'Свежий тунец'},
            {id: 41, item: 'Левый сапог'},
            {id: 49, item: 'Дохлая чайка'},
        ],
        seaItems: [
            {id: 22, item: 'Свежий лосось'},
            {id: 24, item: 'Свежий тунец'},
            {id: 56, item: 'Кит'},
        ],
        southItems: [
            {id: 6, item: 'Бутылка рома'},
            {id: 14, item: 'Нож'},
            {id: 33, item: 'Медальон в виде четырёхлистного клевера'},
            {id: 36, item: 'Игральная кость'},
        ],
        southeastItems: [
            {id: 2, item: 'Короткая крепкая палка'},
            {id: 40, item: 'Ящик'},
            {id: 47, item: 'Мачта'},
        ],
        southwestItems: [
            {id: 0, item: 'Огниво'},
            {id: 2, item: 'Короткая крепкая палка'},
            {id: 3, item: 'Рваная тряпка'},
            {id: 31, item: 'Счастливая монетка капитана'},
            {id: 32, item: 'Татуировка чёрной кошки на коже'},
            {id: 36, item: 'Игральная кость'},
            {id: 39, item: 'Труп'},
            {id: 40, item: 'Ящик'},
            {id: 42, item: 'Правый сапог'},
            {id: 48, item: 'Бочка'},
        ],
        westItems: [
            {id: 2, item: 'Короткая крепкая палка'},
            {id: 3, item: 'Рваная тряпка'},
            {id: 18, item: 'Кусок парусины'},
            {id: 37, item: 'Бревно'},
            {id: 38, item: 'Тяжёлое бревно'},
            {id: 40, item: 'Ящик'},
            {id: 53, item: 'Шкатулка'},
        ],
    },
    reducers: {
        addCaveItems: (state, action) => {
            state.caveItems = state.caveItems.concat(action.payload)
        },
        removeCaveItems: (state, action) => {
            state.caveItems = state.caveItems.filter((obj) => obj.id !== action.payload.id)
        },
        addCenterItems: (state, action) => {
            state.centerItems = state.centerItems.concat(action.payload)
        },
        removeCenterItems: (state, action) => {
            state.centerItems = state.centerItems.filter((obj) => obj.id !== action.payload.id)
        },
        addEastItems: (state, action) => {
            state.eastItems = state.eastItems.concat(action.payload)
        },
        removeEastItems: (state, action) => {
            state.eastItems = state.eastItems.filter((obj) => obj.id !== action.payload.id)
        },
        addNorthItems: (state, action) => {
            state.northItems = state.northItems.concat(action.payload)
        },
        removeNorthItems: (state, action) => {
            state.northItems = state.northItems.filter((obj) => obj.id !== action.payload.id)
        },
        addNortheastItems: (state, action) => {
            state.northeastItems = state.northeastItems.concat(action.payload)
        },
        removeNortheastItems: (state, action) => {
            state.northeastItems = state.northeastItems.filter((obj) => obj.id !== action.payload.id)
        },
        addNorthwestItems: (state, action) => {
            state.northwestItems = state.northwestItems.concat(action.payload)
        },
        removeNorthwestItems: (state, action) => {
            state.northwestItems = state.northwestItems.filter((obj) => obj.id !== action.payload.id)
        },
        addRockItems: (state, action) => {
            state.rockItems = state.rockItems.concat(action.payload)
        },
        removeRockItems: (state, action) => {
            state.rockItems = state.rockItems.filter((obj) => obj.id !== action.payload.id)
        },
        removeSeaItems: (state, action) => {
            state.seaItems = state.seaItems.filter((obj) => obj.id !== action.payload.id)
        },
        addSouthItems: (state, action) => {
            state.southItems = state.southItems.concat(action.payload)
        },
        removeSouthItems: (state, action) => {
            state.southItems = state.southItems.filter((obj) => obj.id !== action.payload.id)
        },
        addSoutheastItems: (state, action) => {
            state.southeastItems = state.southeastItems.concat(action.payload)
        },
        removeSoutheastItems: (state, action) => {
            state.southeastItems = state.southeastItems.filter((obj) => obj.id !== action.payload.id)
        },
        addSouthwestItems: (state, action) => {
            state.southwestItems = state.southwestItems.concat(action.payload)
        },
        removeSouthwestItems: (state, action) => {
            state.southwestItems = state.southwestItems.filter((obj) => obj.id !== action.payload.id)
        },
        addWestItems: (state, action) => {
            state.westItems = state.westItems.concat(action.payload)
        },
        removeWestItems: (state, action) => {
            state.westItems = state.westItems.filter((obj) => obj.id !== action.payload.id)
        },
        loadItems: (state) => {
            state.caveItems = JSON.parse(localStorage.getItem('island')).caveItems
            state.centerItems = JSON.parse(localStorage.getItem('island')).centerItems
            state.eastItems = JSON.parse(localStorage.getItem('island')).eastItems
            state.northItems = JSON.parse(localStorage.getItem('island')).northItems
            state.northeastItems = JSON.parse(localStorage.getItem('island')).northeastItems
            state.northwestItems = JSON.parse(localStorage.getItem('island')).northwestItems
            state.rockItems = JSON.parse(localStorage.getItem('island')).rockItems
            state.seaItems = JSON.parse(localStorage.getItem('island')).seaItems
            state.southItems = JSON.parse(localStorage.getItem('island')).southItems
            state.southeastItems = JSON.parse(localStorage.getItem('island')).southeastItems
            state.southwestItems = JSON.parse(localStorage.getItem('island')).southwestItems
            state.westItems = JSON.parse(localStorage.getItem('island')).westItems
        },
        againBeginItems: (state) => {
            state.caveItems = []
            state.centerItems = [
                {id: 3, item: 'Рваная тряпка'},
                {id: 26, item: 'Большая змея'},
                {id: 35, item: 'Перо'},
                {id: 36, item: 'Игральная кость'},
                {id: 54, item: 'Ключ из кости'},
            ]
            state.eastItems = [
                {id: 2, item: 'Короткая крепкая палка'},
                {id: 13, item: 'Деревянная ловушка'},
            ]
            state.northItems = [
                {id: 3, item: 'Рваная тряпка'},
                {id: 52, item: 'Сухая лоза'},
            ]
            state.northeastItems = [
                {id: 15, item: 'Топор'},
            ]
            state.northwestItems = [
                {id: 2, item: 'Короткая крепкая палка'},
                {id: 40, item: 'Ящик'},
            ]
            state.rockItems = [
                {id: 3, item: 'Рваная тряпка'},
                {id: 22, item: 'Свежий лосось'},
                {id: 24, item: 'Свежий тунец'},
                {id: 41, item: 'Левый сапог'},
                {id: 49, item: 'Дохлая чайка'},
            ]
            state.seaItems = [
                {id: 22, item: 'Свежий лосось'},
                {id: 24, item: 'Свежий тунец'},
                {id: 56, item: 'Кит'},
            ]
            state.southItems = [
                {id: 6, item: 'Бутылка рома'},
                {id: 14, item: 'Нож'},
                {id: 33, item: 'Медальон в виде четырёхлистного клевера'},
                {id: 36, item: 'Игральная кость'},
            ]
            state.southeastItems = [
                {id: 2, item: 'Короткая крепкая палка'},
                {id: 40, item: 'Ящик'},
                {id: 47, item: 'Мачта'},
            ]
            state.southwestItems = [
                {id: 0, item: 'Огниво'},
                {id: 2, item: 'Короткая крепкая палка'},
                {id: 3, item: 'Рваная тряпка'},
                {id: 31, item: 'Счастливая монетка капитана'},
                {id: 32, item: 'Татуировка чёрной кошки на коже'},
                {id: 36, item: 'Игральная кость'},
                {id: 39, item: 'Труп'},
                {id: 40, item: 'Ящик'},
                {id: 42, item: 'Правый сапог'},
                {id: 48, item: 'Бочка'},
            ]
            state.westItems = [
                {id: 2, item: 'Короткая крепкая палка'},
                {id: 3, item: 'Рваная тряпка'},
                {id: 18, item: 'Кусок парусины'},
                {id: 37, item: 'Бревно'},
                {id: 38, item: 'Тяжёлое бревно'},
                {id: 40, item: 'Ящик'},
                {id: 53, item: 'Шкатулка'},
            ]
        },
    }
});

export const {
    addCaveItems,
    removeCaveItems,
    addCenterItems,
    removeCenterItems,
    addEastItems,
    removeEastItems,
    addNorthItems,
    removeNorthItems,
    addNortheastItems,
    removeNortheastItems,
    addNorthwestItems,
    removeNorthwestItems,
    addRockItems,
    removeRockItems,
    removeSeaItems,
    addSouthItems,
    removeSouthItems,
    addSoutheastItems,
    removeSoutheastItems,
    addSouthwestItems,
    removeSouthwestItems,
    addWestItems,
    removeWestItems,
    loadItems,
    againBeginItems,
    clearState } = itemsSlice.actions;
export default itemsSlice.reducer;