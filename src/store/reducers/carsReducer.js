import {settings} from '../../appConfig/temporaryData'

const initialState = {
    userCars:null,
    firstAddCar: false,
    settings
}


const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARS":
            return {
                ...state,
                userCars: action.payload,
            }
        case "FIRST_ADD_CAR":
            return {
                ...state,
                firstAddCar: action.payload
            }

        default:
            return state;
    }
}



export default carsReducer;

