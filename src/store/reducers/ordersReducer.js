
const initialState = {
    orders: [],
}


const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.payload,
            }
        case "ADD_ORDER":
            return {
                ...state,
                qrCode:null
            }

        default:
            return state;
    }
}



export default ordersReducer;
