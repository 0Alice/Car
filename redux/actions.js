// action types

export const ADD_CAR = "ADD_CAR";
export const ADD_NUMBER = 'ADD_NUMBER';
export const ADD_REPAIR = 'ADD_REPAIR';
export const ADD_COST='ADD_COST';
// action creators


export const addCar = (name,distance) => ({
    type: ADD_CAR,
    payload: {
        name: name,
        distance:distance,
        numbersList:[],
        repairsList:[],
        costsList:[],
    },
})

export const addNumber = (number,carId)=>({
    type: ADD_NUMBER,
    number:number,
    carId:carId,
})

export const addRepair = (repair,carId)=>({
    type:ADD_REPAIR,
    repair:repair,
    carId:carId,
})

export const addCost = (name,cost,carId)=>({
    type:ADD_COST,
    payload:{
        name:name,
        cost:cost,
    },
    carId:carId,
})