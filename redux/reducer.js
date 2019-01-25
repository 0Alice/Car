
import { ADD_CAR, ADD_NUMBER, ADD_REPAIR, ADD_COST } from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)



const yReducer = (state = { carList: [{ name: "Renault", distance: '0', carId: -1, numbersList: [], repairsList: [], costsList: [] }], carIdCounter: 0 }, action) => {
  switch (action.type) {
    case ADD_CAR:
      return { carList: [...state.carList, { ...action.payload, carId: state.carIdCounter }], carIdCounter: state.carIdCounter + 1 }

    case ADD_NUMBER:
      let carData = state.carList.filter(car => car.carId === action.carId)[0]
      const numbers = [...carData.numbersList, action.number]
      carData.numbersList = numbers;
      const newCarList = state.carList.filter(car => car.carId !== action.carId)
      return { ...state, carList: [...newCarList, carData] }

    case ADD_REPAIR:
      let carDat = state.carList.filter(car => car.carId === action.carId)[0]
      const repairs = [...carDat.repairsList, action.repair]
      carDat.repairsList = repairs;
      const newCarList2 = state.carList.filter(car => car.carId !== action.carId)
      return { ...state, carList: [...newCarList2, carDat] }

    case ADD_COST:
      let carDat1 = state.carList.filter(car => car.carId === action.carId)[0]
      const costs = carDat1.costsList ? [...carDat1.costsList, action.payload] : [action.payload]
      carDat1.costsList = costs;
      carDat1.mainCost = costs.reduce((pV, cV) => pV + parseInt(cV.cost, 10), 0)
      const newCarList3 = state.carList.filter(car => car.carId !== action.carId)
      return { ...state, carList: [...newCarList3, carDat1] }



    default:
      return state
  }
}



export default yReducer
